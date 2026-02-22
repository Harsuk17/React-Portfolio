import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
    const handleGmailRedirect = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:patelharsh8335@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact">
            <h2 className="gradient-text">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 style={{ marginBottom: '20px' }}>Contact Information</h3>
                    <p style={{ color: 'var(--text-dim)', marginBottom: '30px' }}>
                        I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <div style={{ padding: '12px', background: 'rgba(59,130,246,0.1)', borderRadius: '12px', color: 'var(--accent-primary)' }}>
                                <Mail size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Email</p>
                                <p>patelharsh8335@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div style={{ padding: '12px', background: 'rgba(139,92,246,0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                                <Phone size={24} />
                            </div>
                            <div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Phone</p>
                                <p>+91 9301885654</p>
                            </div>
                        </div>

                        <a href="https://wa.me/919301885654" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="flex items-center gap-4">
                                <div style={{ padding: '12px', background: 'rgba(37, 211, 102, 0.1)', borderRadius: '12px', color: '#25D366' }}>
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>WhatsApp</p>
                                    <p>Chat with me</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <form className="glass-card" style={{ padding: '30px' }} onSubmit={handleGmailRedirect}>
                    <div className="flex flex-col gap-4">
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Name</label>
                            <input name="name" type="text" required style={{
                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'white'
                            }} placeholder="Your Name" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Email</label>
                            <input name="email" type="email" required style={{
                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'white'
                            }} placeholder="Your Email" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>Message</label>
                            <textarea name="message" required style={{
                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)', borderRadius: '10px', color: 'white', minHeight: '120px'
                            }} placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="btn-primary mt-4 flex items-center justify-center gap-2">
                            Send via Gmail <Send size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
