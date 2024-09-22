import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

const Contact = () => {
    const formRef = useRef();

    const serviceKey = import.meta.env.VITE_SERVICE_KEY;
    const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        console.log('Service Key:', serviceKey);
        console.log('Template Key:', templateKey);
        console.log('Public Key:', publicKey);

        try {

             await emailjs.send(
                serviceKey,
                templateKey,
                {
                    from_name: form.name,
                    to_name: 'Musharaf',
                    from_email: form.email,
                    to_email: 'mushi.ashraf38@gmail.com',
                    message: form.message,
                },publicKey)

                setLoading(false);
                alert('Your message has been sent!');

                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
        } catch (error) {
            setLoading(false);
            console.log(error);
        }

    }

    return (
        <section className='c-space my-20' id='contact'>

            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background"
                    className='absolute inset-0  min-h-screen ' />
                <div className='contact-container'>

                    <h3 className='head-text mt-10 sm:mt-0'>Let&apos;s talk</h3>
                    <p className='text-lg text-white-600'>Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&apos;m here to help.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>

                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            required
                            className='field-input'
                            placeholder='Name...' />

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="example@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Share your thoughts or inquiries..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>

                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact
