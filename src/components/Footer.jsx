import React from 'react';
import { Github, Linkedin, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: <Github size={22} />, href: 'https://github.com/Harsuk17', name: 'GitHub' },
        { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/harshpatel07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', name: 'LinkedIn' },
        { icon: <MessageCircle size={22} />, href: 'https://wa.me/919301885654', name: 'WhatsApp' },
        { icon: <Mail size={22} />, href: 'mailto:patelharsh8335@gmail.com', name: 'Email' },
    ];

    return (
        <footer style={{ padding: '80px 20px 40px', borderTop: '1px solid var(--glass-border)', marginTop: '80px', background: 'rgba(0,0,0,0.2)' }}>
            <div className="max-w-7xl flex flex-col items-center gap-8">
                <div className="flex flex-col items-center gap-3">
                    <p className="gradient-text font-bold" style={{ fontSize: '2rem' }}>HK.</p>
                    <p style={{ color: 'var(--text-dim)', textAlign: 'center', maxWidth: '400px' }}>
                        Innovating through code and providing exceptional tech support. Let's build something amazing together.
                    </p>
                </div>

                <div className="flex gap-6">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-icon"
                            style={{
                                color: 'white',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '12px',
                                borderRadius: '50%',
                                transition: '0.3s'
                            }}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.05)', margin: '20px 0' }}></div>

                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Harsh Kurmi. All rights reserved.
                </p>
            </div>

            <style>{`
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .items-center { align-items: center; }
        .gap-8 { gap: 2rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-3 { gap: 0.75rem; }
        .footer-social-icon:hover { 
          background: var(--accent-primary) !important;
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }
      `}</style>
        </footer>
    );
};

export default Footer;
