
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkClasses = "px-4 py-2 rounded-md transition-colors duration-300 hover:text-accent";
    const activeNavLinkClasses = "text-accent";

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary-light shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-heading font-bold text-white">
                    Shreejan Sapkota
                </NavLink>
                <nav className="hidden md:flex items-center space-x-4 text-white">
                    <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} >Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} >About</NavLink>
                    <NavLink to="/work" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} >Work</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} >Contact</NavLink>
                </nav>
                 {/* Mobile menu could be added here */}
            </div>
        </header>
    );
};

export default Header;
