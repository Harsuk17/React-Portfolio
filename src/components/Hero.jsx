import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
    return (
        <section id="home" className="flex items-center justify-between py-20 md:flex-row flex-col-reverse gap-8" style={{ minHeight: '90vh', paddingTop: '120px' }}>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
            >
                <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Welcome to my world</span>
                <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontWeight: 800, lineHeight: 1.1, marginTop: '10px' }}>
                    Hi, I am <br />
                    <span className="gradient-text">Harsh Kurmi</span>
                </h1>
                <div className="mt-6">
                    <p style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: 600, marginBottom: '15px' }}>
                        Tech Supporter & Full Stack Developer
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', maxWidth: '500px', lineHeight: '1.6' }}>
                        I build high-performance web applications and provide top-tier technical solutions.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                    <a href="#contact" className="btn-primary">Get in Touch</a>
                    <a href="/resume.pdf" download className="glass-card flex items-center gap-2" style={{ padding: '12px 24px', textDecoration: 'none', color: 'white', fontWeight: 600, border: '1px solid var(--accent-primary)' }}>
                        Download CV <Download size={18} />
                    </a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <div className="relative" style={{ width: '100%', maxWidth: '450px', aspectRatio: '1/1' }}>
                    {/* Decorative shapes */}
                    <div className="absolute" style={{
                        top: '-20px', right: '-20px', width: '100%', height: '100%',
                        border: '2px solid var(--accent-primary)', borderRadius: '30px', zIndex: -1
                    }}></div>
                    <div className="absolute" style={{
                        bottom: '-20px', left: '-20px', width: '100%', height: '100%',
                        background: 'var(--gradient)', opacity: 0.1, borderRadius: '30px', zIndex: -1
                    }}></div>

                    <img
                        src={profileImg}
                        alt="Harsh Kurmi"
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover', borderRadius: '30px',
                            border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}
                    />
                </div>
            </motion.div>
            <style>{`
        .flex { display: flex; }
        .flex-wrap { flex-wrap: wrap; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
      `}</style>
        </section>
    );
};

export default Hero;
