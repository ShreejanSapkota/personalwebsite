
import React, { useState } from 'react';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import BlogPostCard from '../components/BlogPostCard';
import { PROJECTS, BLOG_POSTS } from '../constants';

type View = 'portfolio' | 'blog';

const WorkPage: React.FC = () => {
    const [activeView, setActiveView] = useState<View>('portfolio');
    
    const tabButtonClasses = "px-6 py-2 font-semibold rounded-full transition-all duration-300";
    const activeTabClasses = "bg-accent text-white shadow-md";
    const inactiveTabClasses = "bg-white text-primary hover:bg-gray-200";

    return (
        <div className="bg-neutral-light min-h-screen">
            <Section>
                <h1 className="text-5xl font-heading font-bold text-center mb-6">My Creations & Explorations</h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    A collection of my projects and a journal of my thoughts as I navigate the world of computer science.
                </p>

                {/* Tabs */}
                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        onClick={() => setActiveView('portfolio')}
                        className={`${tabButtonClasses} ${activeView === 'portfolio' ? activeTabClasses : inactiveTabClasses}`}
                    >
                        Portfolio
                    </button>
                    <button
                        onClick={() => setActiveView('blog')}
                        className={`${tabButtonClasses} ${activeView === 'blog' ? activeTabClasses : inactiveTabClasses}`}
                    >
                        Blog
                    </button>
                </div>

                {/* Content */}
                <div>
                    {activeView === 'portfolio' && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                            {PROJECTS.map(project => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </div>
                    )}

                    {activeView === 'blog' && (
                        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
                            {BLOG_POSTS.map(post => (
                                <BlogPostCard key={post.title} post={post} />
                            ))}
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
};

export default WorkPage;
