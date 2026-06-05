import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 8% 60px',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-secondary)',
      zIndex: 1
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '60px',
        alignItems: 'center'
      }} className="hero-grid">
        
        {/* Hero Left Content */}
        <div>
          {/* Status Label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-primary)',
            border: '1.5px solid var(--card-border)',
            padding: '6px 14px',
            borderRadius: '4px',
            marginBottom: '24px'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 6px #10b981',
              display: 'inline-block'
            }} />
            <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>
              Full-Stack Web Architect
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            lineHeight: 1.15,
            fontWeight: 800,
            color: 'var(--text-primary)',
            marginBottom: '20px',
            letterSpacing: '-1.5px'
          }}>
            Hi, I'm <span className="gradient-text">Ashika K S</span>
          </h1>

          <h2 style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            marginBottom: '24px',
            lineHeight: 1.4
          }}>
            Python Full Stack Developer & React/Django Engineer
          </h2>

          <p style={{
            fontSize: '15.5px',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '560px',
            lineHeight: '1.7'
          }}>
            Specialized in designing, optimizing, and deploying production-grade web applications. Proficient in engineering real-time data syncs with WebSockets, structuring secure REST APIs, and configuring scalable cloud pipelines on AWS EC2.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              <i className="fa-solid fa-briefcase" style={{ marginRight: '6px' }}></i> View Projects
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* Hero Right Content: Clean Professional Portrait */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '320px',
            height: '380px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1.5px solid var(--card-border)',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <img 
              src={profileImg} 
              alt="Ashika K S Portrait" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 50px !important;
            text-align: center;
          }
          .hero-grid div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .hero-grid p {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
