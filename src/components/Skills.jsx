import React from 'react';
import { Database, Layout, Server, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'Frontend', icon: <Layout />, tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
        { name: 'Backend', icon: <Server />, tech: ['Node.js', 'Express', 'Python', 'Go'] },
        { name: 'Database', icon: <Database />, tech: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'] },
        { name: 'Tools', icon: <Settings />, tech: ['Git', 'Docker', 'AWS', 'Vercel'] },
    ];

    return (
        <section id="skills">
            <h2 className="gradient-text">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        whileHover={{ y: -10 }}
                        className="glass-card"
                        style={{ padding: '30px', textAlign: 'center' }}
                    >
                        <div style={{
                            width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--accent-primary)', margin: '0 auto 20px'
                        }}>
                            {skill.icon}
                        </div>
                        <h3 style={{ marginBottom: '15px' }}>{skill.name}</h3>
                        <div className="flex flex-wrap justify-center gap-2" style={{ flexWrap: 'wrap' }}>
                            {skill.tech.map(t => (
                                <span key={t} style={{
                                    padding: '4px 10px', background: 'rgba(255,255,255,0.05)',
                                    borderRadius: '6px', fontSize: '0.85rem'
                                }}>{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <style>{`
        @media (min-width: 1024px) {
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>
        </section>
    );
};

export default Skills;
