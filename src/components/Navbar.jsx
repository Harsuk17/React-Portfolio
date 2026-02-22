import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, MessageCircle } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <Github size={20} />, href: 'https://github.com/Harsuk17', name: 'GitHub' },
        { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/harshpatel07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', name: 'LinkedIn' },
        { icon: <MessageCircle size={20} />, href: 'https://wa.me/919301885654', name: 'WhatsApp' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex justify-center ${scrolled ? 'bg-scrolled' : 'bg-transparent'}`}
            style={{
                paddingTop: scrolled ? '15px' : '25px',
                paddingBottom: scrolled ? '15px' : '25px',
                backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="max-w-7xl px-6 flex justify-between items-center w-full">
                <a href="#home" className="gradient-text" style={{ fontSize: '1.8rem', fontWeight: 800, textDecoration: 'none' }}>HK.</a>

                {/* Desktop Menu */}
                <div className="desktop-menu flex items-center gap-8">
                    <div className="flex gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="nav-link"
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: 'color 0.2s'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 ml-4" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'white', opacity: 0.8, transition: '0.2s' }}
                                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div
                    className="mobile-menu absolute top-full left-0 w-full flex flex-col gap-6"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                        backdropFilter: 'blur(20px)',
                        padding: '30px',
                        borderBottom: '1px solid var(--glass-border)'
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{ textDecoration: 'none', color: 'white', fontSize: '1.2rem', fontWeight: 600 }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex gap-6 mt-4">
                        {socialLinks.map((social) => (
                            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-8 { gap: 2rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-4 { gap: 1rem; }
        .ml-4 { margin-left: 1rem; }
        .nav-link:hover { color: #3b82f6 !important; }
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
