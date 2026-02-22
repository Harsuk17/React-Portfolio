import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about">
            <h2 className="gradient-text">About Me</h2>
            <div className="glass-card" style={{ padding: '40px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)', marginBottom: '20px' }}>
                    I'm Harsh Kurmi, a passionate Full Stack Developer and dedicated Tech Supporter based in India.
                    With a strong foundation in both frontend and backend technologies, I love creating efficient,
                    scalable, and user-friendly web applications.
                </p>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-dim)' }}>
                    As a Tech Supporter, I bring a unique perspective to development—focusing on reliability,
                    customer satisfaction, and rapid problem-solving. Whether it's debugging complex issues or
                    architecting a new feature, I strive for excellence in every task.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h3 style={{ marginBottom: '10px', color: 'var(--accent-primary)' }}>Full Stack Development</h3>
                        <p style={{ color: 'var(--text-dim)' }}>Specializing in modern web technologies to build robust and responsive applications from scratch.</p>
                    </div>
                    <div>
                        <h3 style={{ marginBottom: '10px', color: 'var(--accent-secondary)' }}>Tech Support</h3>
                        <p style={{ color: 'var(--text-dim)' }}>Expertise in troubleshooting, system maintenance, and providing technical guidance to users and clients.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
