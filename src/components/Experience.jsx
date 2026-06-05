import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Bridgen Solutions, Calicut",
      period: "Jan 2025 - Present",
      type: "Professional Experience",
      color: "var(--accent)",
      points: [
        "Collaborating in an agile team environment to build full-stack web applications using React.js and Django REST Framework.",
        "Designed and implemented 15+ secure REST API endpoints with JWT authentication, custom credentials, and role-based access control.",
        "Optimized PostgreSQL queries, serializer routines, and database lookups to reduce server response times.",
        "Built responsive frontend features with React.js, Tailwind CSS, and Context API."
      ]
    },
    {
      role: "Bachelor of Computer Applications (BCA)",
      company: "Don Bosco Arts and Science College, Kannur",
      period: "2022 - 2025",
      type: "Education",
      color: "var(--accent-secondary)",
      points: [
        "Completed a structured curriculum covering software architecture, relational database management, and object-oriented programming.",
        "Participated in developer seminars, technical presentations, and collaborative software projects.",
        "Graduated from Kannur University's first NAAC-accredited college."
      ]
    }
  ];

  return (
    <section id="experience" style={{
      padding: '100px 8% 80px',
      position: 'relative',
      background: 'var(--bg-primary)',
      zIndex: 1
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--text-primary)' }}>
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'var(--accent-gradient)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        {/* Timeline Layout */}
        <div style={{
          position: 'relative',
          paddingLeft: '30px',
          borderLeft: '2px dashed var(--card-border)'
        }} className="timeline-container">
          
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              className="glass-panel"
              style={{
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '40px',
                position: 'relative'
              }}
            >
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '-41px',
                top: '32px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: exp.color,
                boxShadow: `0 0 8px ${exp.color}`,
                border: '4px solid var(--bg-primary)'
              }} />

              {/* Tag type */}
              <span style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: exp.color,
                letterSpacing: '1px',
                background: 'var(--bg-primary)',
                padding: '4px 10px',
                borderRadius: '4px',
                border: '1px solid var(--card-border)',
                display: 'inline-block',
                marginBottom: '12px'
              }}>
                {exp.type}
              </span>

              <h3 style={{ fontSize: '18px', color: 'var(--text-primary)', marginBottom: '4px' }}>{exp.role}</h3>
              <h4 style={{ fontSize: '14.5px', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '4px' }}>
                {exp.company}
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', fontWeight: 600 }}>
                {exp.period}
              </p>

              <ul style={{
                listStyleType: 'none',
                paddingLeft: 0
              }}>
                {exp.points.map((pt, pIdx) => (
                  <li 
                    key={pIdx}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                      marginBottom: '8px',
                      position: 'relative',
                      paddingLeft: '18px'
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: 0,
                      color: exp.color
                    }}>▹</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
