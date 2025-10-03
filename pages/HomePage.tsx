
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import BlogPostCard from '../components/BlogPostCard';
import { PROJECTS, BLOG_POSTS } from '../constants';

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typing);
            }
        }, 100);
        return () => clearInterval(typing);
    }, [text]);

    return <h1 className="text-5xl md:text-7xl font-bold font-heading text-white tracking-tight">{displayText}<span className="animate-ping">|</span></h1>;
}

const HomePage: React.FC = () => {
    const featuredProjects = PROJECTS.slice(0, 2);
    const featuredBlogPosts = BLOG_POSTS.slice(0, 2);

    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-screen flex items-center justify-center text-center bg-primary overflow-hidden">
                <AnimatedBackground />
                <div className="relative z-10 p-6">
                    <Typewriter text="Hi, I'm Shreejan Sapkota." />
                    <p className="mt-4 text-lg md:text-2xl text-neutral-dark max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '2s' }}>
                        1st-Year CSIT Student | Aspiring App Developer | Innovator & Explorer.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
                        <Link to="/work" className="bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
                            View My Work
                        </Link>
                        <Link to="/contact" className="bg-primary-light hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105">
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <Section className="bg-white">
                <h2 className="text-4xl font-heading font-bold text-center mb-4">Welcome!</h2>
                <p className="max-w-3xl mx-auto text-center text-lg text-gray-600">
                    Welcome to my corner of the internet! Here, I share my journey in the world of computer science, showcase my projects, and pen down my thoughts. Join me as I innovate, create, and explore the endless possibilities of technology.
                </p>
            </Section>

            {/* Featured Projects Section */}
            <Section className="bg-neutral-light">
                 <h2 className="text-4xl font-heading font-bold text-center mb-12">Featured Projects</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map(project => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                 </div>
                 <div className="text-center mt-12">
                     <Link to="/work" className="text-accent hover:underline font-semibold">View All Projects &rarr;</Link>
                 </div>
            </Section>

             {/* Latest Blog Posts Section */}
            <Section className="bg-white">
                 <h2 className="text-4xl font-heading font-bold text-center mb-12">Latest Thoughts</h2>
                 <div className="grid md:grid-cols-2 gap-8">
                     {featuredBlogPosts.map(post => (
                        <BlogPostCard key={post.title} post={post} />
                    ))}
                 </div>
                 <div className="text-center mt-12">
                     <Link to="/work" className="text-accent hover:underline font-semibold">Read More on the Blog &rarr;</Link>
                 </div>
            </Section>
        </div>
    );
};

export default HomePage;
