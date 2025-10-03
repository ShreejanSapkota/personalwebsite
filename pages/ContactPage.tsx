
import React, { useState } from 'react';
import Section from '../components/Section';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // In a real app, you would send this to a backend service
        console.log("Form submitted:", formData);
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <div className="bg-white">
            <Section>
                <h1 className="text-5xl font-heading font-bold text-center mb-6">Let's Connect & Collaborate</h1>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Have a project idea? Want to chat about app development? Or just say hello? Feel free to reach out!
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-neutral-light p-8 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">Subject</label>
                                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
                                Send Message
                            </button>
                            {status === 'success' && <p className="text-green-600 mt-4 text-center">Thank you for your message! I'll get back to you soon.</p>}
                        </form>
                    </div>

                    {/* Direct Contact Info */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            <h3 className="text-2xl font-heading font-semibold mb-2">Email Me</h3>
                            <a href="mailto:sapkotashreejan49@gmail.com" className="text-lg text-accent hover:underline">sapkotashreejan49@gmail.com</a>
                        </div>
                        <div>
                            <h3 className="text-2xl font-heading font-semibold mb-2">Call Me</h3>
                            <p className="text-lg text-gray-700">+977 9761412460</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default ContactPage;
