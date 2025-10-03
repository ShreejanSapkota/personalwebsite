
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
    const [ref, animationClasses] = useScrollAnimation<HTMLDivElement>();

    return (
        <section
            ref={ref}
            id={id}
            className={`py-16 md:py-24 transition-all duration-1000 ease-out ${animationClasses} ${className}`}
        >
            <div className="container mx-auto px-6">
                {children}
            </div>
        </section>
    );
};

export default Section;
