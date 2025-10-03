
import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
            <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map(tech => (
                        <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tech}</span>
                    ))}
                </div>
                {project.link && <a href={project.link} className="font-semibold text-accent hover:underline">View Project &rarr;</a>}
            </div>
        </div>
    );
};

export default ProjectCard;
