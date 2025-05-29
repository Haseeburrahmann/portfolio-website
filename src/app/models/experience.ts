// src/app/models/experience.ts
export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: Date;
    endDate?: Date;
    current: boolean;
    description: string;
    responsibilities: string[];
    achievements: string[];
    technologies: string[];
    type: 'full-time' | 'part-time' | 'internship' | 'contract' | 'freelance';
    companyUrl?: string;
    companyLogo?: string;
  }