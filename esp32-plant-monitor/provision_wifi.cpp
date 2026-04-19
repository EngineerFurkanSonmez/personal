// Flash this sketch ONCE to store WiFi credentials in ESP32 NVS (flash).
// After it prints "Yazildi", flash main.cpp firmware — credentials persist.
// Never commit this file with real credentials filled in.

#include <Arduino.h>
#include <Preferences.h>

// Fill in before flashing, then revert to placeholders before committing.
static const char* WIFI_SSID = "WIFI_ADINIZI_BURAYA_YAZIN";
static const char* WIFI_PASS = "WIFI_SIFRENIZI_BURAYA_YAZIN";

void setup()
{
  Serial.begin(115200);
  delay(1000);

  Preferences prefs;
  prefs.begin("wifi", false); // read-write
  prefs.putString("ssid", WIFI_SSID);
  prefs.putString("pass", WIFI_PASS);
  prefs.end();

  Serial.println("WiFi bilgileri NVS'e yazildi.");
  Serial.println("Simdi main.cpp firmware'ini yukleyebilirsiniz.");
}

void loop() {}
