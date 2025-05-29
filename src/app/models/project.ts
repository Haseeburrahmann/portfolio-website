// src/app/models/project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    technologies: string[];
    features: string[];
    imageUrl?: string;
    images?: string[];
    githubUrl?: string;
    liveUrl?: string;
    category: 'web' | 'mobile' | 'desktop' | 'ml' | 'other';
    status: 'completed' | 'in-progress' | 'planned';
    startDate: Date;
    endDate?: Date;
    highlights?: string[];
  }
  
 
  
 