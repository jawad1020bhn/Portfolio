
import { Project, Experience, Skill, NavItem } from './types';

export const RESUME_URL_EN = "https://drive.google.com/file/d/1RnwGYbGDn65ABFtUz_G93a6rcrcG2zUd/view?usp=drive_link"; 
export const RESUME_URL_FR = "https://drive.google.com/file/d/1bFrePWWmCBG55RvEDKIjcbFloc6YXjYY/view?usp=drive_link";

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
    subtitle: 'IIoT Research Testbed',
    category: 'Research',
    status: 'Research Prototype',
    shortDescription: 'An experimental testbed using vibration and thermal sensors to implement predictive maintenance on a standard DOL motor.',
    fullDescription: 'THE VISION\nI took the simplest actuator in the industry—the DOL Motor—and decided to treat it like a critical IIoT asset. The purpose is to test advanced capabilities by implementing full condition monitoring using Vibration and Thermal sensors.\n\nTHE ENGINEERING\nThis goes beyond simple logic. I am building Mathematical Models to interpret sensor data directly in SCL. It involves deriving algorithms for vibration analysis and heat dissipation to detect anomalies before they become failures.\n\nSTATUS\nThis is an active research project, not a final product. It serves as my personal testbed for experimenting with new predictive maintenance theories and sensor fusion techniques.',
    tags: ['IIoT', 'Predictive Maintenance', 'Sensors', 'Math Models'],
    specs: [
      { label: 'Asset Type', value: 'Direct-On-Line (DOL) Motor' },
      { label: 'Sensors', value: 'Vibration (Accel), Thermal (RTD)' },
      { label: 'Focus Area', value: 'Mathematical Modeling & Anomaly Detection' },
      { label: 'Platform', value: 'Siemens S7-1500 / Edge' }
    ],
    features: [
      {
        title: 'Research Focus',
        items: [
          'Vibration Analysis: Developing algorithms to detect mechanical wear patterns.',
          'Thermal Modeling: Correlating current draw with temperature rise (I²t) vs actual sensor data.',
          'Sensor Fusion: Combining multiple data points to reduce false positives.'
        ]
      }
    ],
    architecture: [
      'Sensor Data Acquisition Layer',
      'Mathematical Modeling Block (SCL)',
      'Predictive Logic Engine',
      'Dashboard / Monitoring Interface'
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
    subtitle: 'Banc d\'essai Recherche IIoT',
    category: 'Research',
    status: 'Prototype de Recherche',
    shortDescription: 'Un banc d\'essai expérimental utilisant des capteurs de vibration et thermiques pour implémenter la maintenance prédictive sur un moteur DOL.',
    fullDescription: 'LA VISION\nJ\'ai pris l\'actionneur le plus simple de l\'industrie — le moteur DOL — pour le traiter comme un actif IIoT critique. L\'objectif est de tester des capacités avancées en implémentant une surveillance complète via des capteurs de vibration et thermiques.\n\nL\'INGÉNIERIE\nCela va au-delà de la simple logique. Je construis des modèles mathématiques pour interpréter les données des capteurs directement en SCL. Cela implique de dériver des algorithmes pour l\'analyse vibratoire et la dissipation thermique afin de détecter les anomalies avant qu\'elles ne deviennent des pannes.\n\nSTATUT\nCeci est un projet de recherche actif, pas un produit final. Il me sert de banc d\'essai personnel pour expérimenter de nouvelles théories de maintenance prédictive et des techniques de fusion de capteurs.',
    tags: ['IIoT', 'Maintenance Prédictive', 'Capteurs', 'Modèles Math'],
    specs: [
      { label: 'Type d\'Actif', value: 'Moteur Démarrage Direct (DOL)' },
      { label: 'Capteurs', value: 'Vibration (Accéléro), Thermique (RTD)' },
      { label: 'Domaine', value: 'Modélisation Math & Détection Anomalies' },
      { label: 'Plateforme', value: 'Siemens S7-1500 / Edge' }
    ],
    features: [
      {
        title: 'Axes de Recherche',
        items: [
          'Analyse Vibratoire : Développement d\'algorithmes pour détecter l\'usure mécanique.',
          'Modélisation Thermique : Corrélation courant/chauffe (I²t) vs données réelles capteurs.',
          'Fusion de Capteurs : Combinaison de multiples points de données pour réduire les faux positifs.'
        ]
      }
    ],
    architecture: [
      'Couche Acquisition Données Capteurs',
      'Bloc Modélisation Mathématique (SCL)',
      'Moteur Logique Prédictive',
      'Tableau de Bord / Interface Surveillance'
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
  { name: 'S7-1500 / ISA-88 / PackML', level: 95, category: 'Automation' },
  { name: 'STM32 / C++ / Embedded', level: 90, category: 'Embedded' },
  { name: 'Node-RED / MQTT / IIoT', level: 85, category: 'IoT' },
  { name: 'WinCC / SCADA / HMI Design', level: 85, category: 'Automation' },
  { name: 'PID / LQR / Process Control', level: 80, category: 'Research' },
  { name: 'FPGA (VHDL)', level: 70, category: 'Embedded' },
];

export const CERTIFICATES: string[] = [
  'ICS / SCADA Security Fundamentals',
  'Infosec Python Fundamentals',
  'Introduction to Computer Networks',
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
      description: 'Automation Engineer bridging the gap between raw hardware and reliable software. Specialized in S7-1500, STM32, and Process Optimization.',
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
             "Modeled functional modules, implemented state machines (ISA-88/PackML), HMI interface and diagnostic system."
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
      disclaimer: "These projects and case studies focus on the architectural and software challenges solved.",
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
      title_start: "Career",
      title_end: "Opportunities",
      desc: "I am seeking a full-time engineering role where I can apply my dual expertise in *Industrial Automation* and *Embedded Systems*. Combining *academic rigor* with *hands-on operational experience* (S7-1500, SCADA, Maintenance), I am prepared to tackle complex technical challenges. Ready to integrate into your team and drive *operational excellence*.",
      btn_email: "Send Email",
      response_time: "Responses typically within 24 hours."
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
      description: 'Ingénieur en automatisme comblant le fossé entre le matériel brut et le logiciel fiable. Spécialisé en S7-1500, STM32 & Optimisation de Processus.',
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
             "Modélisation des modules fonctionnels, implémentation machines à états PackML, IHM et système de diagnostic."
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
      disclaimer: "Ces projets et études de cas se concentrent sur les défis architecturaux et logiciels résolus.",
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
      title_start: "Opportunités",
      title_end: "de Carrière",
      desc: "Je recherche un poste d'ingénieur à temps plein pour appliquer ma double expertise en *Automatisme Industriel* et *Systèmes Embarqués*. Alliant *rigueur académique* et *expérience opérationnelle terrain* (S7-1500, SCADA, Maintenance), je suis prêt à relever des défis techniques complexes. Prêt à intégrer votre équipe et piloter l'*excellence opérationnelle*.",
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
