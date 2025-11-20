
import { Project, Experience, Skill, NavItem } from './types';

export const RESUME_URL = "/resume.pdf"; 

export type Language = 'en' | 'fr';

interface Content {
  nav: NavItem[];
  hero: {
    location: string;
    role: string;
    description: string;
    cta_work: string;
    cta_cv: string;
    core_stack: string;
    status: string;
    status_text: string;
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    hands_on_title: string;
    hands_on_desc: string;
    operator_title: string;
    operator_desc: string;
    education_title: string;
    edu_master_title: string;
    edu_master_desc: string;
    edu_bachelor_title: string;
    edu_bachelor_desc: string;
    languages_title: string;
    lang_arabic: string;
    lang_english: string;
    lang_french: string;
    native: string;
    fluent: string;
    pro: string;
  };
  experience: {
    title: string;
    subtitle: string;
    list: Experience[];
  };
  projects: {
    title: string;
    subtitle: string;
    disclaimer: string;
    github_btn: string;
    view_code: string;
    read_thesis: string;
    sw_only: string;
    list: Project[];
  };
  skills: {
    tech_title: string;
    soft_title: string;
    cert_title: string;
    lang_title: string;
    soft_list: { label: string; desc: string }[];
  };
  contact: {
    status: string;
    title_start: string;
    title_end: string;
    desc: string;
    btn_email: string;
    response_time: string;
  };
  footer: {
    desc: string;
    menu_title: string;
    connect_title: string;
    rights: string;
    engineered: string;
  };
}

const PROJECTS_EN: Project[] = [
  {
    title: 'Intermittent Motion VFFS System',
    subtitle: 'Commercial Product',
    category: 'Automation',
    status: 'In Progress (Commercial)',
    shortDescription: 'A complete commercial control architecture for a Vertical Form-Fill-Seal packaging machine, built on Siemens TIA Portal with S7-1500 & ISA-88.',
    fullDescription: 'Commercial Product Overview, software only. This project involves the complete software engineering for a commercial packaging machine. The focus is on modularity and "Industry 4.0" readiness, ensuring the machine is not just a mechanical tool but a data-generating asset.',
    tags: ['Siemens S7-1500', 'ISA-88', 'PackML', 'SCL'],
    specs: [
      { label: 'Machine Model', value: 'Vertical Form-Fill-Seal System' },
      { label: 'Control Platform', value: 'Siemens TIA Portal (S7-1500 PLC)' },
      { label: 'Standards', value: 'ISA-88 (Batch), PackML' },
      { label: 'Production Speed', value: 'Up to 50 bags/min (Adaptive)' }
    ],
    features: [
      {
        title: 'Industry 4.0 Features',
        items: [
          'Real-Time OEE Calculation (Availability, Performance, Quality)',
          'Shift-based production tracking with automated reporting',
          'Predictive reject timing using statistical pattern recognition'
        ]
      },
      {
        title: 'Predictive Maintenance System',
        items: [
          'I²t thermal modeling for motor protection',
          'Remaining Useful Life (RUL) estimation',
          'Dynamic maintenance scheduling'
        ]
      }
    ],
    architecture: [
      'Film Handling Unit',
      'Forming & Vertical Sealing Unit',
      'Product Dosing Unit',
      'Sealing & Discharge Unit',
      '+35 Control Module FBs/FCs with PackML integration'
    ]
  },
  {
    title: 'DOL Motor Control System',
    subtitle: 'Industry 4.0 Testbed',
    category: 'Research',
    status: 'Prototype',
    shortDescription: 'Direct-On-Line starter control system with advanced predictive maintenance and IIoT capabilities for TIA Portal.',
    fullDescription: 'In order to try and test IIoT techs, I built this testbed. It upgrades standard legacy hardware with advanced mathematical models directly on the PLC to predict failures before they happen.',
    tags: ['TIA Portal', 'Predictive Maint', 'IIoT', 'S7-1515'],
    specs: [
      { label: 'Controller', value: 'Siemens S7-1515-2 PN' },
      { label: 'Hardware', value: '3-phase DOL contactors, CTs, PT100' },
      { label: 'Sensors', value: 'Vibration, Temperature, Current' }
    ],
    features: [
      {
        title: 'Advanced Features',
        items: [
          'Condition monitoring (Voltage, Current, Temp, Vibration)',
          'Predictive maintenance algorithms (I²t, RUL)',
          'Statistical quality monitoring'
        ]
      }
    ],
    architecture: [
      '16 Control Module FBs (FB_2110-2540)',
      'PackML Phase 1 Utility Functions',
      'Edge device aggregation without full cloud dependency'
    ]
  },
  {
    title: 'Autonomous Surface Vessel',
    subtitle: 'Master\'s Thesis',
    category: 'Embedded',
    status: 'Completed',
    shortDescription: 'Designed a self-driving boat using an STM32F1 microcontroller. It fuses data from GPS, Ultrasonic sensors, and Sonar to navigate and avoid obstacles.',
    tags: ['STM32', 'C++', 'GPS', 'Sensor Fusion', 'PCB'],
    links: [
      { label: 'Read Thesis', url: '/thesis-asv.pdf', type: 'pdf' }
    ]
  },
  {
    title: 'Inductive vs Capacitive Sensors',
    subtitle: 'Bachelor\'s Thesis',
    category: 'Research',
    status: 'Completed',
    shortDescription: 'Comparative analysis of Inductive vs Capacitive proximity sensors, evaluating response times and environmental reliability.',
    tags: ['Sensors', 'Hardware Analysis', 'Academic'],
  },
  {
    title: 'Juice Bottle Filling Line',
    subtitle: 'Legacy Project',
    category: 'Automation',
    status: 'Abandoned',
    shortDescription: 'An automated filling and capping line project designed for juice production. Discontinued to focus on VFFS architecture.',
    tags: ['Bottling', 'Legacy', 'Filling Logic'],
  },
  {
    title: 'Pneumatic Cylinder ML Model',
    subtitle: 'TIA Portal Integration',
    category: 'Automation',
    status: 'Completed',
    shortDescription: 'Machine Learning model integration within TIA Portal to predict pneumatic cylinder anomalies.',
    tags: ['Machine Learning', 'TIA Portal', 'Python'],
    links: [
      { label: 'View Code', url: 'https://github.com', type: 'github' }
    ]
  }
];

const PROJECTS_FR: Project[] = [
  {
    title: 'Système VFFS à Mouvement Intermittent',
    subtitle: 'Produit Commercial',
    category: 'Automation',
    status: 'En Cours (Commercial)',
    shortDescription: 'Architecture de contrôle complète pour une machine d\'emballage verticale, construite sur Siemens TIA Portal avec S7-1500 & ISA-88.',
    fullDescription: 'Aperçu du produit commercial, logiciel uniquement. Ce projet implique l\'ingénierie logicielle complète pour une machine d\'emballage commerciale. L\'accent est mis sur la modularité et la préparation "Industrie 4.0", garantissant que la machine n\'est pas seulement un outil mécanique mais un actif générant des données.',
    tags: ['Siemens S7-1500', 'ISA-88', 'PackML', 'SCL'],
    specs: [
      { label: 'Modèle Machine', value: 'Système Vertical Form-Fill-Seal' },
      { label: 'Plateforme de Contrôle', value: 'Siemens TIA Portal (API S7-1500)' },
      { label: 'Standards', value: 'ISA-88 (Batch), PackML' },
      { label: 'Vitesse de Production', value: 'Jusqu\'à 50 sacs/min (Adaptatif)' }
    ],
    features: [
      {
        title: 'Fonctionnalités Industrie 4.0',
        items: [
          'Calcul TRS en temps réel (Disponibilité, Performance, Qualité)',
          'Suivi de production par équipe avec rapports automatisés',
          'Rejet prédictif utilisant la reconnaissance de motifs statistiques'
        ]
      },
      {
        title: 'Système de Maintenance Prédictive',
        items: [
          'Modélisation thermique I²t pour la protection moteur',
          'Estimation de la Durée de Vie Restante (RUL)',
          'Planification dynamique de la maintenance'
        ]
      }
    ],
    architecture: [
      'Unité de Gestion du Film',
      'Unité de Formation & Scellage Vertical',
      'Unité de Dosage Produit',
      'Unité de Scellage & Évacuation',
      '+35 FBs/FCs Modules de Contrôle avec intégration PackML'
    ]
  },
  {
    title: 'Contrôle Moteur DOL',
    subtitle: 'Banc d\'essai Industrie 4.0',
    category: 'Research',
    status: 'Prototype',
    shortDescription: 'Système de démarrage direct avec maintenance prédictive avancée et capacités IIoT pour TIA Portal.',
    fullDescription: 'Pour tester les technologies IIoT, j\'ai construit ce banc d\'essai. Il modernise le matériel standard avec des modèles mathématiques avancés directement sur l\'API pour prédire les pannes avant qu\'elles ne surviennent.',
    tags: ['TIA Portal', 'Maintenance Prédictive', 'IIoT', 'S7-1515'],
    specs: [
      { label: 'Contrôleur', value: 'Siemens S7-1515-2 PN' },
      { label: 'Matériel', value: 'Contacteurs DOL triphasés, TCs, PT100' },
      { label: 'Capteurs', value: 'Vibration, Température, Courant' }
    ],
    features: [
      {
        title: 'Fonctionnalités Avancées',
        items: [
          'Surveillance d\'état (Tension, Courant, Temp, Vibration)',
          'Algorithmes de maintenance prédictive (I²t, RUL)',
          'Surveillance statistique de la qualité'
        ]
      }
    ],
    architecture: [
      '16 FBs Module de Contrôle (FB_2110-2540)',
      'Fonctions Utilitaires PackML Phase 1',
      'Agrégation sur appareil Edge sans dépendance cloud totale'
    ]
  },
  {
    title: 'Navire de Surface Autonome',
    subtitle: 'Thèse de Master',
    category: 'Embedded',
    status: 'Terminé',
    shortDescription: 'Conception d\'un bateau autonome utilisant un microcontrôleur STM32F1. Fusion des données GPS, Ultrasons et Sonar pour la navigation et l\'évitement d\'obstacles.',
    tags: ['STM32', 'C++', 'GPS', 'Fusion de Capteurs', 'PCB'],
    links: [
      { label: 'Lire la Thèse', url: '/thesis-asv.pdf', type: 'pdf' }
    ]
  },
  {
    title: 'Capteurs Inductifs vs Capacitifs',
    subtitle: 'Thèse de Licence',
    category: 'Research',
    status: 'Terminé',
    shortDescription: 'Analyse comparative des capteurs de proximité inductifs et capacitifs, évaluant les temps de réponse et la fiabilité environnementale.',
    tags: ['Capteurs', 'Analyse Matérielle', 'Académique'],
  },
  {
    title: 'Ligne d\'Embouteillage de Jus',
    subtitle: 'Ancien Projet',
    category: 'Automation',
    status: 'Abandonné',
    shortDescription: 'Ligne automatisée de remplissage et de bouchage pour la production de jus. Arrêté pour se concentrer sur l\'architecture VFFS.',
    tags: ['Embouteillage', 'Legacy', 'Logique de Remplissage'],
  },
  {
    title: 'Modèle ML pour Vérin Pneumatique',
    subtitle: 'Intégration TIA Portal',
    category: 'Automation',
    status: 'Terminé',
    shortDescription: 'Intégration d\'un modèle de Machine Learning dans TIA Portal pour prédire les anomalies des vérins pneumatiques.',
    tags: ['Machine Learning', 'TIA Portal', 'Python'],
    links: [
      { label: 'Voir le Code', url: 'https://github.com', type: 'github' }
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'TIA Portal (SCL, ISA-88)', level: 95, category: 'Automation' },
  { name: 'STM32 / Embedded C++', level: 90, category: 'Embedded' },
  { name: 'IIoT & Node-RED (MQTT)', level: 85, category: 'IoT' },
  { name: 'SCADA / WinCC / HMI', level: 80, category: 'Automation' },
  { name: 'FPGA (VHDL)', level: 70, category: 'Embedded' },
  { name: 'Python (Analysis)', level: 75, category: 'Full-Stack' },
];

export const CERTIFICATES: string[] = [
  'ICS / SCADA Security Fundamentals',
  'Infosec Python Fundamentals',
  'EF SET English Certificate (C1/B2)'
];

export const TRANSLATIONS: Record<Language, Content> = {
  en: {
    nav: [
      { label: 'About Me', href: '#about' },
      { label: 'Featured Work', href: '#projects' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
    ],
    hero: {
      location: 'Based in Algeria. Open to work In & Outside Algeria.',
      role: 'Automation & Industrial Computing Engineer.',
      description: 'From commissioning VFDs to architecting PackML state machines—I bridge the gap between raw hardware and intelligent control software.',
      cta_work: 'See Technical Work',
      cta_cv: 'Download CV',
      core_stack: 'Core Stack',
      status: 'Status',
      status_text: 'AVAILABLE'
    },
    about: {
      badge: 'MY BACKGROUND',
      title: "I've worked as a machine operator, so I write better code.",
      p1: "Before I was designing control architectures, I was on the factory floor monitoring production lines. I know what it feels like when a machine stops and the error message is confusing.",
      p2: "My approach is simple: I write clean, structured code (mostly SCL) that is easy to troubleshoot and maintain.",
      hands_on_title: "Hands-On Experience",
      hands_on_desc: "Wiring cabinets, sensor calibration, and VFD commissioning.",
      operator_title: "Operator Mindset",
      operator_desc: "Designing HMIs and logic that make sense for the end-user.",
      education_title: "Education",
      edu_master_title: "Master in Industrial Computing",
      edu_master_desc: "Specialized in Embedded Systems and Automation.",
      edu_bachelor_title: "Bachelor in Automatics",
      edu_bachelor_desc: "Foundation in Control Theory and Electronics.",
      languages_title: "Languages",
      lang_arabic: "Arabic",
      lang_english: "English",
      lang_french: "French",
      native: "Native",
      fluent: "Fluent",
      pro: "Professional"
    },
    experience: {
      title: "Experience",
      subtitle: "Bridging theory with industrial reality.",
      list: [
        {
          role: "Independent Developer (VFFS System)",
          company: "Startup",
          period: "02/2025 – Present",
          location: "Algeria / Remote",
          description: [
             "Designed and developed complete industrial control system architecture for VFFS packaging machine (Siemens S7-1500).",
             "Modeled functional modules and implemented PackML state machines.",
             "Built HMI interfaces and comprehensive diagnostic systems."
          ],
          tech: ["S7-1500", "ISA-88", "PackML", "HMI Design"]
        },
        {
           role: "Machine Operator",
           company: "SAFPAL Idéal",
           period: "09/2024 – 11/2024",
           location: "Oran, Algeria",
           description: [
             "Monitored and adjusted machine parameters to maintain production flow.",
             "Achieved a 4% reduction in downtime through proactive parameter tuning."
           ],
           tech: ["Operations", "Process Optimization"]
        },
        {
           role: "Automation Engineer Intern",
           company: "TOP GLOVES LATEX INDUSTRIES",
           period: "07/2024",
           location: "Aïn Témouchent",
           description: [
             "Assisted with preventive maintenance (machine monitoring, sensor readings, diagnostics).",
             "Performed control panel wiring and sensor-actuator connections.",
             "Commissioned Variable Frequency Drives (VFDs)."
           ],
           tech: ["Preventive Maintenance", "Electrical Wiring", "VFDs"]
        },
        {
           role: "Automation Technician Intern",
           company: "EPE Algérienne des Cuirs et Dérivés (ACED)",
           period: "12/2021",
           location: "Aïn Témouchent",
           description: [
             "Immersed in industrial processes and safety standards.",
             "Studied workshop operational standards and workflow."
           ],
           tech: ["Industrial Process", "Safety Standards"]
        }
      ]
    },
    projects: {
      title: "Featured",
      subtitle: "Work",
      disclaimer: "Some commercial projects are protected by NDA. These case studies focus on the architectural and software challenges solved.",
      github_btn: "GitHub Profile",
      view_code: "View Code",
      read_thesis: "Read Thesis",
      sw_only: "Software Only",
      list: PROJECTS_EN
    },
    skills: {
      tech_title: "Technical Skills",
      soft_title: "Soft Skills",
      cert_title: "Certifications",
      lang_title: "Languages",
      soft_list: [
         { label: "Problem Solving", desc: "Diagnosing root causes in complex systems." },
         { label: "Adaptability", desc: "Quickly learning new vendor ecosystems." },
         { label: "Documentation", desc: "Writing clear functional descriptions." },
         { label: "Communication", desc: "Bridging the gap between OT and IT." }
      ]
    },
    contact: {
      status: "Open to Work",
      title_start: "Ready to",
      title_end: "Collaborate?",
      desc: "I am currently available for freelance projects or full-time roles. Whether you need a machine programmed or an embedded prototype built, let's talk.",
      btn_email: "Send Email",
      response_time: "I usually respond within 24 hours."
    },
    footer: {
      desc: "Designing the nervous systems of modern industry.",
      menu_title: "Menu",
      connect_title: "Connect",
      rights: "All rights reserved.",
      engineered: "Engineered with"
    }
  },
  fr: {
    nav: [
      { label: 'À Propos', href: '#about' },
      { label: 'Projets', href: '#projects' },
      { label: 'Expérience', href: '#experience' },
      { label: 'Compétences', href: '#skills' },
    ],
    hero: {
      location: 'Basé en Algérie. Disponible en Algérie et à l\'étranger.',
      role: 'Ingénieur en Automatisme & Informatique Industrielle.',
      description: 'De la mise en service de variateurs à l\'architecture de machines PackML—je comble le fossé entre le matériel brut et le logiciel de contrôle intelligent.',
      cta_work: 'Voir Projets',
      cta_cv: 'Télécharger CV',
      core_stack: 'Stack Technique',
      status: 'Statut',
      status_text: 'DISPONIBLE'
    },
    about: {
      badge: 'MON PARCOURS',
      title: "J'ai travaillé comme opérateur, donc je code mieux.",
      p1: "Avant de concevoir des architectures de contrôle, j'étais sur le terrain à surveiller les lignes de production. Je sais ce que c'est quand une machine s'arrête et que le message d'erreur est confus.",
      p2: "Mon approche est simple : j'écris un code propre et structuré (principalement SCL) facile à dépanner et à maintenir.",
      hands_on_title: "Expérience Terrain",
      hands_on_desc: "Câblage d'armoires, calibration de capteurs et mise en service.",
      operator_title: "Esprit Opérateur",
      operator_desc: "Conception d'IHM et de logique sensées pour l'utilisateur final.",
      education_title: "Formation",
      edu_master_title: "Master en Informatique Industrielle",
      edu_master_desc: "Spécialisé en Systèmes Embarqués et Automatisme.",
      edu_bachelor_title: "Licence en Automatique",
      edu_bachelor_desc: "Bases en Théorie du Contrôle et Électronique.",
      languages_title: "Langues",
      lang_arabic: "Arabe",
      lang_english: "Anglais",
      lang_french: "Français",
      native: "Natif",
      fluent: "Courant",
      pro: "Professionnel"
    },
    experience: {
      title: "Expérience",
      subtitle: "Allier théorie et réalité industrielle.",
      list: [
         {
          role: "Développeur Indépendant (Système VFFS)",
          company: "Startup",
          period: "02/2025 – Présent",
          location: "Algérie / À distance",
          description: [
             "Conception et développement de l'architecture complète du système de contrôle pour machine d'emballage VFFS (Siemens S7-1500).",
             "Modélisation des modules fonctionnels et implémentation de machines à états PackML.",
             "Création d'interfaces IHM et d'un système de diagnostic complet."
          ],
          tech: ["S7-1500", "ISA-88", "PackML", "Design IHM"]
        },
        {
           role: "Opérateur de Machine",
           company: "SAFPAL Idéal",
           period: "09/2024 – 11/2024",
           location: "Oran, Algérie",
           description: [
             "Surveillance et ajustement des paramètres machine pour maintenir le flux de production.",
             "Réduction de 4% des temps d'arrêt grâce à un réglage proactif des paramètres."
           ],
           tech: ["Opérations", "Optimisation Process"]
        },
        {
           role: "Stagiaire Ingénieur Automatisme",
           company: "TOP GLOVES LATEX INDUSTRIES",
           period: "07/2024",
           location: "Aïn Témouchent",
           description: [
             "Assistance à la maintenance préventive (surveillance machine, relevés capteurs, diagnostics).",
             "Câblage d'armoires de commande et raccordement capteurs-actionneurs.",
             "Mise en service de variateurs de fréquence (VFD)."
           ],
           tech: ["Maintenance Préventive", "Câblage Électrique", "VFDs"]
        },
        {
           role: "Stagiaire Technicien Automatisme",
           company: "EPE Algérienne des Cuirs et Dérivés (ACED)",
           period: "12/2021",
           location: "Aïn Témouchent",
           description: [
             "Immersion dans les processus industriels et normes de sécurité.",
             "Étude des standards opérationnels et flux de travail en atelier."
           ],
           tech: ["Process Industriel", "Normes de Sécurité"]
        }
      ]
    },
    projects: {
      title: "Projets",
      subtitle: "Phares",
      disclaimer: "Certains projets commerciaux sont sous NDA. Ces études de cas se concentrent sur les défis architecturaux et logiciels résolus.",
      github_btn: "Profil GitHub",
      view_code: "Voir le Code",
      read_thesis: "Lire la Thèse",
      sw_only: "Logiciel Uniquement",
      list: PROJECTS_FR
    },
    skills: {
      tech_title: "Compétences Techniques",
      soft_title: "Compétences Douces",
      cert_title: "Certifications",
      lang_title: "Langues",
      soft_list: [
         { label: "Résolution de Problèmes", desc: "Diagnostiquer les causes profondes." },
         { label: "Adaptabilité", desc: "Apprentissage rapide de nouveaux écosystèmes." },
         { label: "Documentation", desc: "Rédaction de descriptions fonctionnelles claires." },
         { label: "Communication", desc: "Faire le lien entre OT et IT." }
      ]
    },
    contact: {
      status: "À l'écoute",
      title_start: "Prêt à",
      title_end: "Collaborer ?",
      desc: "Je suis actuellement disponible pour des projets freelance ou des postes à temps plein. Que vous ayez besoin de programmer une machine ou de construire un prototype embarqué, discutons-en.",
      btn_email: "Envoyer Email",
      response_time: "Je réponds généralement sous 24h."
    },
    footer: {
      desc: "Concevoir les systèmes nerveux de l'industrie moderne.",
      menu_title: "Menu",
      connect_title: "Connecter",
      rights: "Tous droits réservés.",
      engineered: "Conçu avec"
    }
  }
};
