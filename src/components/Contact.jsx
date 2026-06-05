import React, { useState } from 'react';

// Developer Config: Paste Web3Forms access key here to enable working email deliveries.
// Get a free key at: https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // 'success', 'error', 'sending', 'key_needed'

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');

    // If access key is placeholder, simulate submission but prompt user to insert their key
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      setTimeout(() => {
        setStatus('key_needed');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form Message",
          message: formData.message
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { label: "Email Address", val: "ashikaksedu@gmail.com", href: "mailto:ashikaksedu@gmail.com" },
    { label: "GitHub Profile", val: "github.com/ashika-k-s", href: "https://github.com/ashika-k-s" },
    { label: "LinkedIn Connection", val: "linkedin.com/in/ashika-ks", href: "https://linkedin.com/in/ashika-ks" },
    { label: "Current Location", val: "Kerala, India", href: null },
    { label: "Phone Number", val: "+91 9778249462", href: "tel:+919778249462" }
  ];

  return (
    <section id="contact" style={{
      padding: '100px 8% 100px',
      position: 'relative',
      background: 'var(--bg-primary)',
      zIndex: 1
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--text-primary)' }}>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'var(--accent-gradient)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '0.96fr 1.04fr',
          gap: '60px',
          alignItems: 'start'
        }} className="contact-grid">

          {/* Left Side: Contact Information */}
          <div>
            <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '16px', fontFamily: 'var(--font-title)' }}>
              Let's build something together
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '35px', fontSize: '15px', lineHeight: 1.6 }}>
              I am open to full-time developer roles, internships, and collaborative projects. Reach out via email, phone, or fill in the message form directly.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contactInfo.map((info, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '1px' }}>
                    {info.label}
                  </span>
                  {info.href ? (
                    <a 
                      href={info.href} 
                      target={info.href.startsWith('http') ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '15.5px',
                        color: 'var(--accent)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        marginTop: '4px',
                        display: 'inline-block'
                      }}
                    >
                      {info.val}
                    </a>
                  ) : (
                    <span style={{ fontSize: '15.5px', color: 'var(--text-primary)', fontWeight: 600, marginTop: '4px' }}>
                      {info.val}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="glass-panel" style={{ padding: '40px', borderRadius: '12px' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row-2">
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="name" style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1.5px solid var(--card-border)',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="email" style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      background: 'var(--bg-primary)',
                      border: '1.5px solid var(--card-border)',
                      borderRadius: '4px',
                      padding: '12px 16px',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
                <label htmlFor="subject" style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1.5px solid var(--card-border)',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px' }}>
                <label htmlFor="message" style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px', fontWeight: 500 }}>Your Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1.5px solid var(--card-border)',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                />
              </div>

              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', borderRadius: '4px' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending Message...' : 'Send Message'}
              </button>

              {/* Status notifications */}
              {status === 'success' && (
                <div style={{
                  marginTop: '20px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid #10b981',
                  color: '#10b981',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight: 600
                }}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {status === 'key_needed' && (
                <div style={{
                  marginTop: '20px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid #3b82f6',
                  color: '#3b82f6',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight: 600
                }}>
                  Form submitted! To receive real emails, set your Web3Forms access key in Contact.jsx.
                </div>
              )}

              {status === 'error' && (
                <div style={{
                  marginTop: '20px',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid #ef4444',
                  color: '#ef4444',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  textAlign: 'center',
                  fontWeight: 600
                }}>
                  Please fill in all the required fields.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
export { WEB3FORMS_ACCESS_KEY };
