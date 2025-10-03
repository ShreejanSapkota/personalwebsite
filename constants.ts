
import type { Project, BlogPost, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    title: "My First Python Script",
    description: "A simple command-line tool built in Python to automate a daily task. This was my first foray into practical scripting.",
    technologies: ["Python", "CLI"],
    link: "#",
    image: "https://picsum.photos/seed/project1/600/400"
  },
  {
    title: "Basic Calculator App Idea",
    description: "Conceptual design and UI mockup for a sleek, user-friendly mobile calculator app, focusing on UX principles.",
    technologies: ["UI/UX Design", "Figma"],
    image: "https://picsum.photos/seed/project2/600/400"
  },
  {
    title: "Portfolio Website",
    description: "This very website, built with React, TypeScript, and Tailwind CSS to showcase my skills and projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    image: "https://picsum.photos/seed/project3/600/400"
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "My First Week in CSIT: What I Learned",
    date: "October 2023",
    excerpt: "Diving headfirst into the world of Computer Science. A reflection on the initial challenges, the excitement of learning, and the path ahead.",
    link: "#",
  },
  {
    title: "Why I Want to Be an App Developer",
    date: "November 2023",
    excerpt: "Exploring the motivation behind my career choice. It's more than just coding; it's about creating solutions and impactful experiences.",
    link: "#",
  },
  {
    title: "Exploring Basic UI/UX Principles",
    date: "December 2023",
    excerpt: "Good design is invisible. A summary of my initial research into the fundamental principles of user interface and user experience design.",
    link: "#",
  },
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 60 },
  { name: "C++", level: 50 },
  { name: "HTML & CSS", level: 70 },
  { name: "JavaScript", level: 45 },
  { name: "React", level: 40 },
  { name: "UI/UX Principles", level: 55 },
];
