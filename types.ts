
export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image: string;
}

export interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}
