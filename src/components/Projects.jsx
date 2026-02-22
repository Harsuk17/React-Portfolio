import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'E-commerce Platform',
            desc: 'A full-featured online store with payment integration and admin dashboard.',
            tech: ['React', 'NodeJS', 'MongoDB'],
            link: '#',
            github: '#'
        },
        {
            title: 'Real-time Chat App',
            desc: 'Secure messaging application with private rooms and file sharing.',
            tech: ['Socket.io', 'Express', 'React'],
            link: '#',
            github: '#'
        },
        {
            title: 'Portoflio Website',
            desc: 'Modern, high-performance portfolio for tech professionals.',
            tech: ['Vite', 'React', 'Framer Motion'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="projects">
            <h2 className="gradient-text">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="glass-card"
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ height: '200px', background: 'var(--gradient)', opacity: 0.2 }}></div>
                        <div style={{ padding: '25px' }}>
                            <h3 style={{ marginBottom: '10px' }}>{p.title}</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', marginBottom: '20px' }}>{p.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.tech.map(t => (
                                    <span key={t} style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 600 }}>#{t}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a href={p.github} style={{ color: 'white' }}><Github size={20} /></a>
                                <a href={p.link} style={{ color: 'white' }}><ExternalLink size={20} /></a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
