import React from 'react';
import graduationImg from '../assets/graduation.jpg';
import bridgeonImg from '../assets/presentation_bridgeon.jpg';
import pres1Img from '../assets/presentation_1.jpg';
import pres2Img from '../assets/presentation_2.jpg';
import pres3Img from '../assets/presentation_3.jpg';

const About = () => {
  const photos = [
    { src: bridgeonImg, caption: "Speaking at Bridgeon" },
    { src: pres1Img, caption: "Leading Team Tech Meeting" },
    { src: pres2Img, caption: "Technical Knowledge Sharing" },
    { src: pres3Img, caption: "Collaborative Code Review Session" },
  ];

  return (
    <section id="about" style={{
      padding: '100px 8% 80px',
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
            About <span className="gradient-text">Me</span>
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
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '60px'
        }} className="about-grid-main">
          
          {/* Left Side: Summary & Objectives */}
          <div>
            <h3 style={{ fontSize: '22px', color: 'var(--accent)', marginBottom: '20px', fontFamily: 'var(--font-title)' }}>
              Professional Statement
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '15px', lineHeight: '1.7' }}>
              I am a results-driven Python Full Stack Developer with hands-on experience designing, building, and deploying production-grade web applications. Proficient in frontend frameworks and backend service integrations, I write clean, modular, and optimized code that aligns with industrial standards.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '15px', lineHeight: '1.7' }}>
              Through my web development internship at <strong>Bridgen Solutions</strong>, I have worked in agile team setups, implemented secure JWT token validation and role-based permissions, and significantly reduced backend serialization overheads.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '15px', lineHeight: '1.7' }}>
              My education (Bachelor of Computer Applications) has helped me establish high standards for query tuning, structural schemas, and database normalization rules.
            </p>
            
            {/* Core Pillars */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '15px',
              marginTop: '30px'
            }} className="about-pillars">
              <div className="glass-panel" style={{ padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                <i className="fa-solid fa-server" style={{ color: 'var(--accent)', fontSize: '18px', marginBottom: '8px' }}></i>
                <h5 style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '4px' }}>Backend</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Django & REST APIs</p>
              </div>
              <div className="glass-panel" style={{ padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                <i className="fa-solid fa-cubes" style={{ color: 'var(--accent)', fontSize: '18px', marginBottom: '8px' }}></i>
                <h5 style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '4px' }}>Frontend</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>React & State Management</p>
              </div>
              <div className="glass-panel" style={{ padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
                <i className="fa-solid fa-bolt" style={{ color: 'var(--accent)', fontSize: '18px', marginBottom: '8px' }}></i>
                <h5 style={{ fontSize: '13.5px', color: 'var(--text-primary)', marginBottom: '4px' }}>Real-Time</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '11px' }}>WebSockets & Redis</p>
              </div>
            </div>
          </div>

          {/* Right Side: Graduation Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="glass-panel" style={{
              padding: '12px',
              maxWidth: '420px',
              width: '100%',
              borderRadius: '12px'
            }}>
              <div style={{ overflow: 'hidden', borderRadius: '6px', height: '280px' }}>
                <img 
                  src={graduationImg} 
                  alt="Graduation Ceremony" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div style={{ padding: '16px 8px 8px' }}>
                <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '4px' }}>Graduation Day</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px' }}>Don Bosco Arts & Science College, Kannur University</p>
              </div>
            </div>
          </div>

        </div>

        {/* Presentations Gallery */}
        <div style={{ marginTop: '80px' }}>
          <h3 style={{ fontSize: '22px', textAlign: 'center', marginBottom: '35px', color: 'var(--text-primary)', fontFamily: 'var(--font-title)' }}>
            Presentations & Agile Collaboration
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px'
          }}>
            {photos.map((item, idx) => (
              <div key={idx} className="glass-panel" style={{
                padding: '10px',
                borderRadius: '8px'
              }}>
                <div style={{
                  height: '160px',
                  borderRadius: '6px',
                  overflow: 'hidden',
                  marginBottom: '10px'
                }}>
                  <img 
                    src={item.src} 
                    alt={item.caption} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  textAlign: 'center',
                  fontWeight: 500
                }}>
                  {item.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 850px) {
          .about-grid-main {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 480px) {
          .about-pillars {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
