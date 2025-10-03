
import React from 'react';
import Section from '../components/Section';
import { SKILLS } from '../constants';
import type { Skill } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillBar: React.FC<{ skill: Skill; isVisible: boolean }> = ({ skill, isVisible }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="font-semibold text-primary">{skill.name}</span>
                <span className="text-sm font-semibold text-accent">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                    className="bg-accent h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

const AboutPage: React.FC = () => {
    const [skillsRef, skillsAnimationClasses] = useScrollAnimation<HTMLDivElement>();
    const isSkillsVisible = skillsAnimationClasses.includes('opacity-100');

    return (
        <div className="bg-white">
            <Section>
                <h1 className="text-5xl font-heading font-bold text-center mb-12">About Me: The Journey So Far</h1>
                <div className="grid md:grid-cols-5 gap-12 items-center">
                    <div className="md:col-span-2">
                        <img 
                            src="https://picsum.photos/seed/shreejan/400/500" 
                            alt="Shreejan Sapkota" 
                            className="rounded-lg shadow-2xl w-full h-auto object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    <div className="md:col-span-3">
                        <h2 className="text-3xl font-heading font-semibold mb-4 text-primary">Hello! I'm Shreejan Sapkota</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            A passionate 1st-year BSc CSIT student with a fervent ambition to become an app developer. My journey in the vast landscape of computer science began with a curiosity for how things work, and it quickly evolved into a drive to build and innovate.
                        </p>
                        <p className="text-lg text-gray-600 mb-4">
                            I'm excited by the challenge of creating applications that are not only functional but also intuitive and beautiful. My dream is to build apps that solve real-world problems and make a positive impact. Through my studies, I'm building a strong foundation in programming, data structures, and software engineering principles.
                        </p>
                        <p className="text-lg text-gray-600">
                             My vision is to contribute to the tech community by developing innovative applications and continuously learning and adapting to new technologies.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="bg-neutral-light">
                <div
                    ref={skillsRef}
                    className={`transition-all duration-1000 ease-out ${skillsAnimationClasses}`}
                >
                    <h2 className="text-4xl font-heading font-bold text-center mb-12">My Growing Skillset</h2>
                    <div className="max-w-4xl mx-auto">
                        {SKILLS.map(skill => (
                            <SkillBar key={skill.name} skill={skill} isVisible={isSkillsVisible} />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default AboutPage;
