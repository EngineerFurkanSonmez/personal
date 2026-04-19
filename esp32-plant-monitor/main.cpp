#include <Arduino.h>
#include <WiFi.h>
#include <WebServer.h>
#include <LittleFS.h>
#include <Preferences.h>

const int adcPin = 1;

// Credentials loaded from NVS at runtime — never hardcoded in source
static char ssid[64];
static char password[64];

// Static IP settings
IPAddress local_IP(192, 168, 1, 128);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 255, 0);
// Use router as DNS — no need to leak queries to public internet
IPAddress primaryDNS(192, 168, 1, 1);

WebServer server(80);

const int DRY_VALUE = 3000;
const int WET_VALUE = 1400;

// /soil rate limit: at most one response per second
static unsigned long lastSoilMs = 0;
static const unsigned long SOIL_MIN_INTERVAL_MS = 1000;

// DNS rebinding protection: reject requests with unexpected Host header
static bool isValidHost()
{
  String host = server.hostHeader();
  return host == "192.168.1.128" || host == "192.168.1.128:80";
}

static void addSecurityHeaders()
{
  server.sendHeader("X-Content-Type-Options", "nosniff");
  server.sendHeader("X-Frame-Options", "DENY");
  server.sendHeader("Cache-Control", "no-store");
  // Empty ACAO blocks cross-origin fetch from other websites (DNS rebinding)
  server.sendHeader("Access-Control-Allow-Origin", "");
}

// ---- Sensor ----------------------------------------------------------------

int readSoilRaw()
{
  return analogRead(adcPin);
}

int readSoilMilliVolts()
{
  return analogReadMilliVolts(adcPin);
}

int calculateMoisturePercent(int rawValue)
{
  int percent = map(rawValue, DRY_VALUE, WET_VALUE, 0, 100);
  if (percent < 0)   percent = 0;
  if (percent > 100) percent = 100;
  return percent;
}

String getSoilStatus(int moisturePercent)
{
  if (moisturePercent >= 75) return "Toprak cok nemli";
  if (moisturePercent >= 45) return "Toprak uygun";
  if (moisturePercent >= 25) return "Toprak kuruya yaklasiyor";
  return "Sulama gerekli";
}

String getStatusClass(int moisturePercent)
{
  if (moisturePercent >= 75) return "good";
  if (moisturePercent >= 45) return "normal";
  if (moisturePercent >= 25) return "warn";
  return "danger";
}

// ---- HTML ------------------------------------------------------------------

String htmlPage()
{
  String page = R"rawliteral(
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Sümeyye ve Furkan'ın Bitkisi</title>

<style>
body{
  font-family: Arial, sans-serif;
  background:#eef6ee;
  margin:0;
  padding:0;
  color:#1f2d1f;
}

.container{
  max-width:760px;
  margin:24px auto;
  padding:16px;
}

.header{
  background:linear-gradient(135deg,#4caf50,#2e7d32);
  color:white;
  border-radius:16px;
  padding:22px;
  box-shadow:0 6px 18px rgba(0,0,0,0.15);
  text-align:center;
}

.header h1{
  margin:0;
  font-size:26px;
}

.image-card{
  margin-top:16px;
  border-radius:16px;
  overflow:hidden;
  box-shadow:0 6px 18px rgba(0,0,0,0.12);
  background:#e9efe9;
  padding:8px;
}

.plant-img{
  width:100%;
  height:auto;
  max-height:420px;
  object-fit:contain;
  display:block;
  background:#e9efe9;
  border-radius:12px;
}

.grid{
  display:grid;
  grid-template-columns:1fr;
  gap:16px;
  margin-top:18px;
}

.card{
  background:white;
  border-radius:16px;
  padding:20px;
  box-shadow:0 6px 18px rgba(0,0,0,0.08);
}

.label{
  color:#5b6b5b;
  font-size:14px;
  margin-bottom:8px;
}

.main-value{
  font-size:42px;
  font-weight:bold;
  margin:4px 0 10px 0;
}

.status{
  display:inline-block;
  padding:10px 14px;
  border-radius:999px;
  font-weight:bold;
  font-size:14px;
}

.status.good   { background:#d7f5dc; color:#1b5e20; }
.status.normal { background:#e8f5e9; color:#2e7d32; }
.status.warn   { background:#fff4d6; color:#8a5a00; }
.status.danger { background:#fde0e0; color:#b71c1c; }

.progress-wrap{
  margin-top:16px;
  background:#dfe9df;
  border-radius:999px;
  overflow:hidden;
  height:28px;
}

.progress-bar{
  height:100%;
  width:0%;
  background:linear-gradient(90deg,#66bb6a,#2e7d32);
  transition:width 0.5s ease;
  text-align:center;
  color:white;
  font-weight:bold;
  line-height:28px;
}

.info-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.mini-card{
  background:#f7faf7;
  border-radius:12px;
  padding:14px;
  border:1px solid #e3ece3;
}

.mini-title{
  font-size:13px;
  color:#5b6b5b;
  margin-bottom:6px;
}

.mini-value{
  font-size:20px;
  font-weight:bold;
}

.footer-note{
  margin-top:12px;
  font-size:13px;
  color:#667566;
}

@media (max-width: 560px){
  .container  { margin:12px auto; padding:12px; }
  .header h1  { font-size:22px; }
  .main-value { font-size:36px; }
  .info-grid  { grid-template-columns:1fr; }
  .plant-img  { max-height:320px; }
}
</style>
</head>

<body>
<div class="container">

  <div class="header">
    <h1>Sümeyye ve Furkan'ın Bitkisi</h1>
  </div>

  <div class="image-card">
    <img src="/photo.jpg" class="plant-img" alt="Bitki fotografi">
  </div>

  <div class="grid">

    <div class="card">
      <div class="label">Toprak nem seviyesi</div>
      <div class="main-value" id="moisture">-- %</div>
      <div class="status normal" id="statusText">veri bekleniyor</div>
      <div class="progress-wrap">
        <div class="progress-bar" id="progressBar">0%</div>
      </div>
      <div class="footer-note" id="updatedAt">son guncelleme: -</div>
    </div>

    <div class="card">
      <div class="info-grid">
        <div class="mini-card">
          <div class="mini-title">ADC raw</div>
          <div class="mini-value" id="rawValue">-</div>
        </div>
        <div class="mini-card">
          <div class="mini-title">sensor cikisi</div>
          <div class="mini-value" id="mvValue">- mV</div>
        </div>
      </div>
      <div class="footer-note">capacitive soil moisture sensor v2.0</div>
    </div>

  </div>
</div>

<script>
function nowText()
{
  return new Date().toLocaleString("tr-TR");
}

async function updateSoilData()
{
  try {
    const response = await fetch('/soil');

    if (response.status === 429) {
      return; // rate limited — silently skip, retry next cycle
    }

    const data = await response.json();

    document.getElementById('moisture').textContent = data.moisture + " %";
    document.getElementById('rawValue').textContent = data.raw;
    document.getElementById('mvValue').textContent  = data.mv + " mV";

    const statusEl = document.getElementById('statusText');
    statusEl.textContent = data.status;
    statusEl.className   = "status " + data.statusClass;

    const bar = document.getElementById('progressBar');
    bar.style.width = data.moisture + "%";
    bar.textContent = data.moisture + "%";

    document.getElementById('updatedAt').textContent =
      "son guncelleme: " + nowText();
  }
  catch (err) {
    document.getElementById('statusText').textContent = "ESP32 verisi alinamadi";
    document.getElementById('statusText').className   = "status danger";
  }
}

updateSoilData();
setInterval(updateSoilData, 2000);
</script>
</body>
</html>
)rawliteral";

  return page;
}

// ---- HTTP handlers ---------------------------------------------------------

void handleRoot()
{
  if (!isValidHost()) { server.send(403, "text/plain", "Forbidden"); return; }
  addSecurityHeaders();
  server.send(200, "text/html; charset=UTF-8", htmlPage());
}

void handleSoil()
{
  if (!isValidHost()) { server.send(403, "text/plain", "Forbidden"); return; }

  unsigned long now = millis();
  if (now - lastSoilMs < SOIL_MIN_INTERVAL_MS) {
    addSecurityHeaders();
    server.send(429, "text/plain", "Too Many Requests");
    return;
  }
  lastSoilMs = now;

  int raw      = readSoilRaw();
  int mv       = readSoilMilliVolts();
  int moisture = calculateMoisturePercent(raw);
  String status      = getSoilStatus(moisture);
  String statusClass = getStatusClass(moisture);

  String json = "{";
  json += "\"raw\":"         + String(raw)       + ",";
  json += "\"mv\":"          + String(mv)         + ",";
  json += "\"moisture\":"    + String(moisture)   + ",";
  json += "\"status\":\""    + status             + "\",";
  json += "\"statusClass\":\"" + statusClass      + "\"";
  json += "}";

  addSecurityHeaders();
  server.send(200, "application/json; charset=UTF-8", json);
}

void handlePhoto()
{
  if (!isValidHost()) { server.send(403, "text/plain", "Forbidden"); return; }

  File file = LittleFS.open("/photo.jpg", "r");
  if (!file) {
    server.send(404, "text/plain", "Foto bulunamadi");
    return;
  }
  addSecurityHeaders();
  server.streamFile(file, "image/jpeg");
  file.close();
}

// ---- WiFi credentials from NVS ---------------------------------------------

static bool loadWiFiCredentials()
{
  Preferences prefs;
  prefs.begin("wifi", true); // read-only namespace
  String s = prefs.getString("ssid", "");
  String p = prefs.getString("pass", "");
  prefs.end();

  if (s.length() == 0 || p.length() == 0) {
    Serial.println("HATA: WiFi bilgileri NVS'de bulunamadi!");
    Serial.println("Lutfen once provision_wifi.ino ile yazin.");
    return false;
  }

  s.toCharArray(ssid,     sizeof(ssid));
  p.toCharArray(password, sizeof(password));
  return true;
}

void connectToWiFi()
{
  WiFi.mode(WIFI_STA);

  if (!WiFi.config(local_IP, gateway, subnet, primaryDNS)) {
    Serial.println("Statik IP ayarlanamadi");
  }

  WiFi.begin(ssid, password);

  Serial.print("WiFi baglaniyor");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println();
  Serial.println("WiFi baglandi");
  Serial.print("IP adresi: ");
  Serial.println(WiFi.localIP());
}

// ---- Arduino entry points --------------------------------------------------

void setup()
{
  Serial.begin(115200);
  delay(1000);

  analogReadResolution(12);
  pinMode(adcPin, INPUT);

  if (!LittleFS.begin(true)) {
    Serial.println("LittleFS baslatilamadi");
    return;
  }
  Serial.println("LittleFS hazir");

  if (!loadWiFiCredentials()) {
    return; // halt — no credentials stored yet
  }

  connectToWiFi();

  server.on("/",          handleRoot);
  server.on("/soil",      handleSoil);
  server.on("/photo.jpg", HTTP_GET, handlePhoto);

  server.begin();

  Serial.println("Web server basladi");
  Serial.println("Tarayicidan ac: http://192.168.1.128");
}

void loop()
{
  server.handleClient();
}
