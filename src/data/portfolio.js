/**
 * ============================================================
 *  PORTFOLIO DATA: RIFQIA FARHAN GIFRAN
 * ============================================================
 * All portfolio content is managed centrally in this file.
 * Optional fields that are not yet available are stored as empty strings ('')
 * or empty arrays ([]) and are hidden from visitors.
 */

export const portfolio = {
  /* ---------- Profile & Identity ---------- */
  profile: {
    name: 'Rifqia Farhan Gifran',
    initials: 'RFG',
    role: 'Informatics Student · UI/UX Design · Web & App Development',
    tagline: 'Informatics Student | UI/UX Design, Web & App Development',
    intro:
      'I am a 7th-semester Informatics student at Universitas Ahmad Dahlan who is passionate about transforming ideas into intuitive digital experiences through UI/UX design, web engineering, and mobile app development. Currently interning at Dinas Kominfo Wonosobo to gain practical, hands-on industry experience.',
    photo: '/images/profile.jpg',
    photoAlt: 'Profile photo of Rifqia Farhan Gifran',
    availability: 'Open for freelance projects and team collaborations.',
    cvUrl: 'https://drive.google.com/file/d/1xW4t_t9DewACO5TDGnFlQ9Y3v32jBx93/view?usp=sharing',
  },

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      'I am an Informatics student at Universitas Ahmad Dahlan with a keen interest in leveraging technology to solve real-world problems. Throughout my academic journey, I have built several projects, including a recipe-sharing platform, a dynamic news portal, a vehicle wash reservation system, and an automotive repair workshop reservation app.',
      'These experiences have honed my technical proficiencies while strengthening my appreciation for creativity, user-centric communication, and teamwork. Currently, I am interning at Dinas Kominfo Wonosobo and developing the SIMETRI IoT monitoring application, while expanding my expertise in cross-platform mobile development with Flutter.',
    ],
    summary: [
      { label: 'Location', value: 'Indonesia' },
      { label: 'Institution', value: 'Universitas Ahmad Dahlan' },
      { label: 'Major', value: 'Informatics' },
      { label: 'Status', value: '7th Semester Student' },
      { label: 'Interests', value: 'UI/UX Design, Web Development, and Mobile App Development' },
    ],
  },

  /* ---------- Skills ---------- */
  skills: [
    {
      icon: 'code',
      title: 'Programming & Development',
      description: 'Technologies, languages, and frameworks used in building modern web and mobile applications.',
      items: [
        'HTML',
        'CSS',
        'PHP',
        'Java',
        'JavaScript',
        'SQL',
        'Flutter',
        'Android Studio',
        'Web Development',
        'Application Development',
      ],
    },
    {
      icon: 'design',
      title: 'UI/UX & Design',
      description: 'User interface and user experience design, wireframing, and user flow prototyping.',
      items: ['Figma', 'UI Design', 'UX Design', 'Wireframing'],
    },
    {
      icon: 'tools',
      title: 'Productivity Tools',
      description: 'Tools utilized for documentation, data handling, and presentation preparation.',
      items: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
    },
    {
      icon: 'people',
      title: 'Soft Skills',
      description: 'Core professional attributes supporting effective problem-solving and cross-functional team collaboration.',
      items: ['Problem Solving', 'Teamwork', 'Communication', 'Project Collaboration'],
    },
  ],

  /* ---------- Projects ---------- */
  projects: {
    intro:
      'A curated selection of projects developed through coursework and self-directed learning, spanning web applications, Android development, and IoT-based energy monitoring.',
    items: [
      {
        id: 'crystalwash',
        category: 'Web Application · Reservation & Service Management System',
        name: 'CrystalWash',
        summary:
          'A web-based platform for booking vehicle wash services, managing queue allocations, payments, and transaction records within an integrated dashboard.',
        description:
          'CrystalWash is a web application tailored for automotive wash service operations (cars and motorcycles). The booking flow guides customers through inputting details, registering vehicles, selecting tailored service packages, and picking payment methods. The system generates sequential queue numbers with estimated wait times computed from active queue loads.\n\nThe administrative dashboard empowers managers to configure service offerings, update order statuses in real-time, and monitor revenue records. The codebase includes QRIS payment integration via the Midtrans API, automated invoices, and customer reviews/ratings. The user interface supports Indonesian and English localization along with light/dark themes.',
        goal: 'To consolidate customer records, vehicle registrations, reservation schedules, queue monitoring, and transactions into a unified web application.',
        role: 'Developed the database schema, core booking workflows, and Midtrans payment gateway integration.',
        features: [
          'Automated booking flow for cars and motorcycles.',
          'Customer and vehicle registration management.',
          'Sequential queue assignment categorized by vehicle type.',
          'Dynamic estimated wait time calculation.',
          'Cash payment handling and QRIS integration via Midtrans API.',
          'Digital invoice generation and transaction history logs.',
          'Administrative dashboard and service catalog management.',
          'Customer rating and feedback review system.',
          'Bilingual support and customizable UI themes.',
        ],
        tech: ['PHP', 'PostgreSQL', 'Tailwind CSS 3', 'JavaScript', 'Prisma', 'API Midtrans'],
        outcome:
          'Successfully deployed a booking lifecycle interconnecting customer profiles, vehicles, wash packages, dynamic queues, and payment transactions.',
        image: '/images/crystalwash.jpg',
        imageAlt: 'CrystalWash web application user interface preview screenshot',
        demoUrl: '',
        repoUrl: '',
      },
      {
        id: 'yummycraft',
        category: 'Web Application · Recipe Sharing Platform',
        name: 'YummyCraft',
        summary:
          'A collaborative culinary platform featuring keyword search, category browsing, user recipe management, and bookmarking favorite recipes.',
        description:
          'YummyCraft is an interactive web platform designed for discovering and sharing culinary recipes. Visitors can browse recipe categories, perform quick keyword searches, and inspect detailed ingredients alongside step-by-step cooking instructions.\n\nRegistered users can create and publish new recipes with photo uploads, modify or delete their own submissions, and bookmark favorite recipes to their private collection. The app also features an activity dashboard and customizable user profile settings.',
        goal: 'To provide a centralized platform for documenting, discovering, and sharing culinary recipes filtered by category and creator.',
        role: 'Engineered the recipe management module, user authentication system, and relational database architecture.',
        features: [
          'User registration and secure authentication.',
          'Real-time search and category-based filtering.',
          'Comprehensive ingredient lists and step-by-step guides.',
          'Recipe authoring with image uploads.',
          'CRUD capabilities for author-owned recipes.',
          'Favorite recipe bookmarking.',
          'Direct recipe link sharing.',
          'User activity dashboard and profile customization.',
        ],
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Fetch API', 'Font Awesome'],
        outcome:
          'Delivered a dynamic content-driven recipe platform with robust user contributions, robust search, and personalized collections.',
        image: '/images/yummycraft.jpg',
        imageAlt: 'YummyCraft recipe sharing web platform interface preview screenshot',
        demoUrl: '',
        repoUrl: '',
      },
      {
        id: 'car-workshop',
        category: 'Android Application · Automotive Service Reservation',
        name: 'Car Workshop',
        summary:
          'An Android prototype enabling multi-service selection, appointment scheduling, automatic cost calculation, and Firebase cloud data synchronization.',
        description:
          'Car Workshop is a native Android project built to facilitate vehicle repair and maintenance reservations. Users can select multiple service packages—such as oil changes, minor tune-ups, scheduled periodic maintenance, or brake servicing. The application calculates aggregate costs and lets customers book tailored appointment dates and time slots.\n\nThe codebase incorporates real-time booking and vehicle data persistence via Firebase Realtime Database. Local user states and profiles are managed using Android Architecture Components (ViewModel, LiveData, and SharedPreferences). In addition, maintenance reminders are scheduled through AlarmManager with native Android broadcast notifications.',
        goal: 'To deliver an intuitive Android reservation workflow, from multi-service selection through to persistent cloud reservation records.',
        role: 'Implemented the end-to-end booking flow, Firebase cloud integration, vehicle profile management, and notification services.',
        features: [
          'Multi-service selection support.',
          'Automated total cost calculation.',
          'Interactive date and time slot picker.',
          'Booking confirmation screen with custom notes.',
          'Cloud-backed reservation storage and history viewing.',
          'Vehicle profile registration and inspection.',
          'Local preference management via SharedPreferences.',
          'Automated appointment reminder notifications using AlarmManager.',
        ],
        tech: [
          'Kotlin',
          'Android SDK',
          'XML Layout',
          'Material Components',
          'Firebase Realtime Database',
          'ViewModel',
          'LiveData',
          'RecyclerView',
          'View Binding',
          'SharedPreferences',
          'AlarmManager',
        ],
        outcome:
          'Engineered a functional Android service booking prototype seamlessly integrating services, pricing logic, scheduling, and Firebase storage.',
        image: '/images/car-workshop.jpg',
        imageAlt: 'Car Workshop Android service reservation application interface preview screenshot',
        demoUrl: '',
        repoUrl: '',
      },
      {
        id: 'portal-berita-dinamis',
        category: 'Web Application · Content Management System',
        name: 'Portal Berita Dinamis',
        summary:
          'A dynamic news portal equipped with full-text search, category filters, article reading views, and a dedicated admin publishing dashboard.',
        description:
          'Portal Berita Dinamis is a database-driven news publishing website built with PHP and MySQL. The public homepage arranges published articles chronologically, enhanced with featured images, topical categories, summaries, and direct article links. Readers can quickly find content via headline search or category sorting.\n\nThe administrative portal provides protected login access to compose, edit, publish, and delete news articles. Content editors can upload visual assets and generate print-ready reports directly from the browser. The system also tracks reader engagement with an automated article view counter.',
        goal: 'To clearly decouple administrative content curation from public reader presentation within a clean publishing system.',
        role: 'Developed the public reading interface, administrative CMS dashboard, database schema, and content workflows.',
        features: [
          'Chronological news feed based on publication timestamps.',
          'Headline keyword search and category filtering.',
          'Full article reading views with engagement metrics.',
          'Automated article view counter.',
          'Protected administrative login and publishing dashboard.',
          'Complete CRUD capabilities for news articles.',
          'Direct image asset uploads.',
          'Browser-based report generation and printing.',
        ],
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap 5', 'Bootstrap Icons', 'JavaScript'],
        outcome:
          'Implemented a complete news portal featuring reader discovery pages and a streamlined CRUD-based management dashboard.',
        image: '/images/portal-berita-dinamis.jpg',
        imageAlt: 'Portal Berita Dinamis web application interface preview screenshot',
        demoUrl: '',
        repoUrl: '',
      },
      {
        id: 'simetri',
        category: 'Mobile Application · Internet of Things · Energy Monitoring',
        name: 'SIMETRI, Smart Electricity Monitoring',
        status: 'In Development',
        summary:
          'A Flutter and IoT-powered electricity monitoring app featuring realtime electrical telemetry, energy consumption charts, and cost estimation via ESP32 and Firebase.',
        description:
          'SIMETRI is a cross-platform mobile application developed with Flutter and Dart for real-time electrical energy monitoring. The system connects mobile clients with ESP32 microcontrollers and PZEM-004T v3.0 sensors through Firebase Realtime Database. The main dashboard displays electrical parameters including voltage, current, active power, total energy, frequency, and power factor from live telemetry.\n\nThe app provides daily and monthly energy consumption charts, customizable kWh tariff rate configurations, tariff history logs, monthly budget caps, and projected electricity bills. Features also include device pairing via unique Device IDs, PIN and biometric authentication for sensitive actions, and an interactive simulation mode for offline exploration.',
        goal: 'To deliver transparent electrical consumption analytics and actionable cost projections tailored to individual user utility tariffs.',
        role: 'UI/UX Designer & Flutter Developer. Responsible for end-to-end user interface design and Flutter application implementation, including client navigation, monitoring dashboards, energy visualization graphs, tariff configuration, and cost estimation engines.',
        features: [
          'Real-time electrical telemetry dashboard (voltage, current, power, energy, frequency, power factor).',
          'Cloud-synchronized data streams via Firebase Realtime Database.',
          'Unique Device ID pairing and management.',
          'Interactive daily and monthly energy consumption charts.',
          'Customizable utility tariff configurations and rate history logs.',
          'Real-time cost calculations and monthly bill projections.',
          'Monthly energy budget cap and warning thresholds.',
          'PIN and biometric security verification via local_auth.',
          'Built-in sensor telemetry simulation mode.',
          'Modern dark-mode user interface.',
        ],
        tech: [
          'Flutter',
          'Dart',
          'Material 3',
          'Firebase Realtime Database',
          'fl_chart',
          'SharedPreferences',
          'Flutter Secure Storage',
          'local_auth',
          'ESP32',
          'PZEM-004T v3.0',
          'Arduino C++',
        ],
        outcome:
          'Engineered an IoT energy monitoring mobile prototype featuring live telemetry dashboards, analytical charts, utility tariff algorithms, and Firebase device integration.',
        image: '/images/simetri.jpg',
        imageAlt: 'SIMETRI smart electricity monitoring IoT application dashboard preview screenshot',
        demoUrl: '',
        repoUrl: '',
      },
    ],
  },

  /* ---------- Experience ---------- */
  experience: [
    {
      period: '',
      position: 'Intern',
      organization: 'Dinas Kominfo Wonosobo',
      description:
        'Currently undertaking an internship to acquire practical industry exposure, refine technical capabilities, and gain direct professional workplace experience.',
      points: [],
    },
  ],

  /* ---------- Education ---------- */
  education: [
    {
      institution: 'Universitas Ahmad Dahlan',
      program: 'Informatics',
      period: '2023 – Present',
      note: '7th Semester Student',
      nim: '2300018303',
      gpa: '',
      courses: [],
      awards: [],
    },
  ],

  /* ---------- Currently ---------- */
  currently: [
    {
      icon: 'build',
      label: 'Currently building',
      value: 'SIMETRI application for IoT-based electrical energy monitoring with Flutter',
    },
    {
      icon: 'learn',
      label: 'Currently learning',
      value: 'Cross-platform mobile application engineering with Flutter & Dart',
    },
    {
      icon: 'grow',
      label: 'Currently developing',
      value: 'Full-stack web engineering skills with HTML, CSS, PHP, JavaScript, and SQL',
    },
    {
      icon: 'open',
      label: 'Open for',
      value: 'Freelance projects and collaborative team opportunities',
    },
  ],

  /* ---------- Professional English Class ---------- */
  englishAssignments: [
    {
      id: 'tugas-1',
      title: 'SELF INTRODUCTION',
      description:
        'A concise video presentation introducing myself in professional English: my background, university education, and technical interests.',
      type: 'Video',
      meeting: 'ASSIGNMENT 1',
      date: '',
      url: 'https://drive.google.com/file/d/13gG_jv9uTZ2r_rf3I-AkgBoSBiTcniku/view?usp=sharing',
      buttonText: 'OPEN IN GOOGLE DRIVE',
    },
    {
      id: 'tugas-2',
      title: 'PROFESSIONAL WRITING FOR ONLINE SHOPPING',
      description:
        'An official formal complaint letter addressing discrepancies in an online delivery, supplemented with professional direct messages based on personal e-commerce orders.',
      type: 'PDF',
      meeting: 'SECOND MEETING',
      date: '',
      url: 'https://drive.google.com/file/d/1nBR4fA3gCgKMH2Ph1xynshdYoVQvs8vd/view?usp=sharing',
      buttonText: 'OPEN IN GOOGLE DRIVE',
    },
    {
      id: 'tugas-3',
      title: 'THESIS BACKGROUND & ENGLISH ACADEMIC JOURNAL',
      description:
        'An analytical explanation of my thesis background alongside English academic journal reference reviews, demonstrating academic reading and summarization competencies.',
      type: 'Video',
      meeting: 'THIRD MEETING',
      date: '',
      url: 'https://drive.google.com/file/d/1Wy5xdufxZ5DBqK0u6SCS5mmE6OCIpYH1/view?usp=sharing',
      buttonText: 'OPEN IN GOOGLE DRIVE',
    },
    {
      id: 'tugas-4',
      title: 'PROFESSIONAL CV',
      description:
        'A comprehensive professional curriculum vitae (CV) written in English, covering academic credentials, work experience, technical skills, and achievements.',
      type: 'PDF',
      meeting: 'ASSIGNMENT 4',
      date: '',
      url: 'https://drive.google.com/file/d/1xW4t_t9DewACO5TDGnFlQ9Y3v32jBx93/view?usp=sharing',
      buttonText: 'OPEN IN GOOGLE DRIVE',
    },
  ],

  /* ---------- Contact ---------- */
  contact: {
    intro:
      'I am always open to discussing freelance projects, collaborative opportunities, or team ventures in UI/UX design, web engineering, and mobile app development. Feel free to connect via any of the channels below.',
    email: 'farhangifran10@gmail.com',
    linkedin: 'https://www.linkedin.com/in/farhan-gifran-383455387',
    github: 'https://github.com/Gifran19',
    instagram: 'https://instagram.com/rifqiafarhan',
  },
}
