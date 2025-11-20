
export interface ProjectLink {
  label: string;
  url: string;
  type: 'github' | 'pdf' | 'demo' | 'external';
}

export interface Project {
  title: string;
  subtitle?: string; // For things like "Bachelor Thesis"
  category: 'Automation' | 'Embedded' | 'Full-Stack' | 'IoT' | 'Research';
  shortDescription: string; // Displayed on the card
  fullDescription?: string; // Displayed in modal
  tags: string[];
  status: string;
  
  // Deep Dive Data
  specs?: { label: string; value: string }[];
  features?: { title: string; items: string[] }[]; // e.g. "Industry 4.0 Features"
  architecture?: string[]; // List of modules/units
  links?: ProjectLink[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}
