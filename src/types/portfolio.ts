export type RoleCategory = 'all' | 'frontend' | 'backend' | 'database' | 'analytics';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  roleTags: ('frontend' | 'backend' | 'database' | 'analytics')[];
  categoryLabel: string;
  timeframe: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  interactiveType?: 'hospital' | 'analytics' | 'qr_food';
  metrics?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  roleType: 'frontend' | 'backend' | 'database' | 'analytics';
  highlights: string[];
  skillsGained: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string;
}

export interface SkillGroup {
  category: string;
  roleAssociation: 'frontend' | 'backend' | 'database' | 'analytics' | 'core';
  description: string;
  skills: {
    name: string;
    level: string;
    experienceContext: string;
  }[];
}

export interface Certification {
  title: string;
  issuer: string;
  status: string;
  highlight: string;
  category: 'analytics' | 'core' | 'frontend' | 'backend' | 'database';
}
