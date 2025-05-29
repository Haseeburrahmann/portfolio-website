// src/app/models/education.ts - All Education & Contact Related Interfaces

export interface Education {
    id: string;
    institution: string;
    degree: string;
    field: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    current: boolean;
    gpa?: number;
    maxGpa?: number;
    honors?: string[];
    relevantCoursework?: string[];
    projects?: string[];
    activities?: string[];
    description?: string;
    institutionUrl?: string;
    logoUrl?: string;
  }
  
  export interface ContactInfo {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website?: string;
    twitter?: string;
    instagram?: string;
  }
  
  export interface ContactMessage {
    name: string;
    email: string;
    subject: string;
    message: string;
    timestamp: Date;
  }
  
  export interface Testimonial {
    id: string;
    name: string;
    position: string;
    company: string;
    message: string;
    rating: 1 | 2 | 3 | 4 | 5;
    date: Date;
    avatarUrl?: string;
    linkedinUrl?: string;
  }
  
  export interface Certification {
    id: string;
    name: string;
    issuer: string;
    issueDate: Date;
    expiryDate?: Date;
    credentialId?: string;
    credentialUrl?: string;
    badgeUrl?: string;
    description?: string;
    skills?: string[];
  }
  
  export interface SocialLink {
    platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'phone' | 'website' | 'instagram';
    url: string;
    iconClass: string;
    label: string;
    color?: string;
  }
  
  export interface Theme {
    name: 'light' | 'dark';
    label: string;
    icon: string;
  }
  
  export interface NavigationItem {
    id: string;
    label: string;
    href: string;
    icon?: string;
    order: number;
    visible: boolean;
  }