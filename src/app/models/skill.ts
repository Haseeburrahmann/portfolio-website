// src/app/models/skill.ts - All Skill Related Interfaces

export interface Skill {
    id: string;
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'cloud' | 'devops' | 'tools' | 'languages';
    proficiency: 1 | 2 | 3 | 4 | 5; // 1 = Beginner, 5 = Expert
    yearsOfExperience: number;
    iconClass?: string; // Font Awesome or custom CSS class
    color?: string;
    description?: string;
    certifications?: string[];
    projects?: string[]; // Project IDs where this skill was used
  }