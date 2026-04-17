export const cvData = {
  personal: {
    name: 'Furkan Sönmez',
    title: 'Embedded Systems Software Engineer',
    headline: 'Safety-Critical Avionics & Embedded Systems Engineer',
    summary:
      '~5 years engineering safety-critical embedded software for avionics and real-time systems in full compliance with RTCA DO-178C. Specialized in aviation battery management systems, multi-protocol communication stacks (ARINC-429, CAN, SPI, UART, I2C, RS485), and the complete DO-178C lifecycle from SOI planning through verification and certification activities. Proficient across Infineon Tricore, STM32 ARM, TI C2000, and Atmel AVR target architectures.',
    email: 's.furkan@gmail.com',
    phone: '(+49) 15236717807',
    linkedin: 'linkedin.com/in/frknsonmez',
    linkedinUrl: 'https://linkedin.com/in/frknsonmez',
    location: 'Munich, Germany',
    nationality: 'Turkish',
    photography500px: 'https://500px.com/p/sfurkan',
  },

  experience: [
    {
      id: 'capgemini',
      role: 'Embedded Systems Software Developer',
      company: 'Capgemini Engineering',
      period: 'Feb 2024 – Present',
      location: 'Munich, Germany',
      current: true,
      bullets: [
        'Unit testing for Battery Management Software using the Gtest framework',
        'Model-based system development with SysML/UML in Magic Draw / Cameo',
        'Embedded software development targeting Infineon Aurix Tricore for hardware verification',
        'AUTOSAR Classic architecture training and application',
      ],
      tags: ['Infineon Tricore', 'Gtest', 'SysML/UML', 'AUTOSAR Classic', 'C/C++', 'Magic Draw'],
    },
    {
      id: 'aspilsan',
      role: 'Embedded Systems Software Developer',
      company: 'Aspilsan Energy',
      period: 'Mar 2021 – Dec 2023',
      location: 'Ankara, Turkey',
      current: false,
      bullets: [
        'Designed DAL-A Aviation Battery Management System; 28 Vdc – 270 Vdc Low and High Voltage Emergency Battery Packs per DO-311',
        'Developed C/C++ firmware for TI C2000 and STM32 MCUs — State of Charge, State of Health, Thermal Management, Protection, and Communication algorithms',
        'Defined and owned DO-178C SW Planning, Development, and Verification processes; drove documentation through SOI-1, SOI-2, and SOI-3',
        'Authored High-Level and Low-Level Software Requirements in IBM DOORS',
        'Conducted Code/Model Reviews, Static Code Analysis (LDRA), Coverage Analysis (LDRA), and early WCET analysis',
        'Implemented ARINC-429, UART, SPI, CAN, I2C, and RS485 communication interfaces',
        'Performed Model-Based Development using SysML/UML in MATLAB/Simulink',
        'Collaborated with Certification, Qualification, Safety, and Software Assurance teams throughout all SOI activities',
        'Designed GUI diagnostic tools in Python with Qt',
        'Applied standards: DO-178C, DO-254, MIL-STD-704F, SAE AS50881, ARP4754, MISRA-C',
      ],
      tags: ['DO-178C', 'TI C2000', 'STM32', 'ARINC-429', 'CAN', 'IBM DOORS', 'LDRA', 'MATLAB/Simulink', 'MISRA-C', 'ARP4754'],
    },
    {
      id: 'eysa',
      role: 'Embedded Systems Software Developer',
      company: 'EYSA Technology',
      period: 'Sep 2019 – Jul 2020',
      location: 'Ankara, Turkey',
      current: false,
      bullets: [
        'Developed ultra-low-power firmware for STM32 ARM and AVR MCUs targeting an 8-year battery life',
        'Programmed RF SoC in Sub-GHz and 2.4 GHz wireless modules',
        'Designed, implemented, and tested custom PCBs for Wireless Fire Detection Systems (up to 1,500 IoT nodes) per EN-54, including EMI/EMC compliance',
        'Implemented communication drivers: UART, SPI, I2C, RS232, RS485, USB, Wi-Fi, and GSM/GPRS over TCP/IP',
        'Worked in FreeRTOS and bare-metal RTOS environments',
      ],
      tags: ['STM32', 'AVR', 'FreeRTOS', 'RF/IoT', 'EN-54', 'PCB Design', 'GSM/GPRS', 'TCP/IP'],
    },
    {
      id: 'odorel',
      role: 'Candidate Engineer',
      company: 'Odorel IT & Security Technology',
      period: 'Apr 2019 – Jul 2019',
      location: 'Ankara, Turkey',
      current: false,
      bullets: [
        'Developed embedded software for AVR MCU with GSM/GPRS module using TCP/IP stack',
        'Designed and tested a 2-layer PCB in Autodesk Eagle for a Police Department project',
        'Documented technical specifications of prototypes for laboratory tests',
      ],
      tags: ['AVR', 'GSM/GPRS', 'PCB Design', 'Autodesk Eagle'],
    },
    {
      id: 'tai',
      role: 'Internship',
      company: 'Turkish Airlines – Turkish Technic',
      period: 'Jun 2018 – Jul 2018',
      location: 'Istanbul, Turkey',
      current: false,
      bullets: [
        'Worked in the Radio Laboratory of the Maintenance Department',
        'Performed repair, test, calibration, and maintenance of avionic components',
      ],
      tags: ['Avionics MRO', 'Calibration', 'Radio Systems'],
    },
  ],

  education: [
    {
      degree: 'B.Sc. Electrical and Electronics Engineering',
      institution: 'Middle East Technical University (METU)',
      location: 'Ankara, Turkey',
      period: 'Sep 2013 – Dec 2019',
      note: 'One of Turkey\'s top-ranked engineering programs; strong foundation in electronics, control systems, and signal processing.',
    },
  ],

  skills: [
    {
      category: 'Programming Languages',
      icon: 'code',
      items: ['C', 'C++', 'Python', 'Assembly', 'VHDL'],
    },
    {
      category: 'MCU / Hardware Platforms',
      icon: 'cpu',
      items: ['TI C2000', 'STM32 ARM', 'Infineon Aurix Tricore', 'Atmel AVR', 'MicroChip'],
    },
    {
      category: 'Communication Protocols',
      icon: 'radio',
      items: ['ARINC-429', 'CAN', 'UART', 'SPI', 'I2C', 'RS485', 'RS232', 'USB', 'TCP/IP', 'GSM/GPRS'],
    },
    {
      category: 'Aerospace & Safety Standards',
      icon: 'shield',
      items: ['DO-178C', 'DO-254', 'ARP4754', 'MIL-STD-704F', 'SAE AS50881', 'MISRA-C', 'EN-54'],
    },
    {
      category: 'Testing & Verification',
      icon: 'test',
      items: ['LDRA Static Analysis', 'LDRA Coverage Analysis', 'Gtest', 'WCET Analysis', 'SOI Reviews', 'Code/Model Reviews'],
    },
    {
      category: 'Tools & Platforms',
      icon: 'tool',
      items: ['IBM DOORS', 'MATLAB/Simulink', 'Magic Draw / Cameo', 'GIT', 'SVN', 'Jira', 'Jenkins', 'Doxygen', 'LT SPICE', 'Altium', 'Autodesk Eagle'],
    },
    {
      category: 'Embedded / RTOS',
      icon: 'layers',
      items: ['FreeRTOS', 'Bare-Metal', 'AUTOSAR Classic', 'Model-Based Development', 'SysML/UML'],
    },
  ],

  trainings: [
    {
      title: 'RTCA DO-178 Software Consideration in Airborne Systems and Equipment Certification',
      provider: 'Turkish Aerospace Industry',
      date: 'February 2022',
      tag: 'DO-178',
    },
    {
      title: 'RTCA DO-254 Design Assurance Guidance for Airborne Electronic Hardware',
      provider: 'Turkish Aerospace Industry',
      date: 'January 2022',
      tag: 'DO-254',
    },
    {
      title: 'Requirement Management with DOORS',
      provider: 'Turkish Aerospace Industry',
      date: 'July 2023',
      tag: 'DOORS',
    },
    {
      title: 'Introduction to Software Testing',
      provider: 'Turkish Aerospace Industry',
      date: 'June 2023',
      tag: 'Testing',
    },
    {
      title: 'Project Technical Management',
      provider: 'Turkish Aerospace Industry',
      date: 'August 2023',
      tag: 'Management',
    },
  ],

  languages: [
    { name: 'Turkish', level: 'Native' },
    { name: 'English', level: 'C1 — Proficient' },
  ],

  interests: ['Photography', 'Paragliding (P2)', 'Powerlifting', 'Travel'],
}
