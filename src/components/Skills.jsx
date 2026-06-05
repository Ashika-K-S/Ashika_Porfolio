import React, { useState } from 'react';

const Skills = () => {
  const [activeNode, setActiveNode] = useState('frontend');

  const nodes = {
    frontend: {
      title: "1. Client Browser (React & Redux)",
      icon: "fa-laptop-code",
      desc: "Architecting interactive, highly responsive client-side interfaces. Utilizing Context API and Redux Toolkit for clean state management.",
      tools: ["React.js", "Redux Toolkit", "Context API", "Tailwind CSS", "HTML5 & CSS3"]
    },
    protocols: {
      title: "2. Networking Protocols (Axios & WebSockets)",
      icon: "fa-network-wired",
      desc: "Establishing client-server pipelines. Utilizing Django Channels for real-time bi-directional WebSockets and Axios interceptors for automatic token refresh.",
      tools: ["Axios Interceptors", "WebSocket Protocol", "JWT Auth Headers", "Real-Time Leaderboards"]
    },
    routing: {
      title: "3. Gateway & Servers (AWS / Nginx)",
      icon: "fa-server",
      desc: "Configuring server gateways to handle incoming traffic, manage SSL configurations, compress payloads, and route assets safely.",
      tools: ["AWS EC2", "Nginx Gateways", "Gunicorn WSGI", "Production Configs"]
    },
    backend: {
      title: "4. Backend App (Django REST)",
      icon: "fa-gears",
      desc: "Engineering secure, scalable backend applications. Writing robust controllers, custom permission middleware, and structured serializations.",
      tools: ["Python", "Django REST Framework", "Django Channels", "SMTP/OTP Services"]
    },
    database: {
      title: "5. Storage & Caching (Postgres & Redis)",
      icon: "fa-database",
      desc: "Designing secure schemas and tuning queries. Utilizing Redis Pub/Sub for WebSocket synchronization and PostgreSQL for relational transactions.",
      tools: ["PostgreSQL Database", "Redis Caching", "Redis Pub/Sub Channels", "ORM Query Optimization"]
    }
  };

  return (
    <section id="skills" style={{
      padding: '100px 8% 80px',
      position: 'relative',
      background: 'var(--bg-secondary)',
      zIndex: 1
    }}>
      <div style={{
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '14px', color: 'var(--text-primary)' }}>
            Full-Stack <span className="gradient-text">Architecture Flow</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 50px', fontSize: '14.5px' }}>
            Click on any phase of the developer pipeline below to inspect my skill sets and implementation methodologies for that component.
          </p>
        </div>

        {/* Pipeline Layout */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '15px',
          background: 'var(--bg-primary)',
          border: '1.5px solid var(--card-border)',
          padding: '24px',
          borderRadius: '12px',
          marginBottom: '35px',
          flexWrap: 'wrap'
        }} className="arch-flow">
          {Object.keys(nodes).map((key, idx) => (
            <React.Fragment key={key}>
              <div 
                onClick={() => setActiveNode(key)}
                className="glass-panel"
                style={{
                  flex: 1,
                  minWidth: '150px',
                  padding: '20px 15px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  borderColor: activeNode === key ? 'var(--accent)' : 'var(--card-border)',
                  background: activeNode === key ? 'var(--card-bg)' : 'transparent',
                  boxShadow: activeNode === key ? 'var(--shadow-md)' : 'none',
                  transform: 'none',
                  borderRadius: '8px'
                }}
              >
                <i className={`fa-solid ${nodes[key].icon}`} style={{
                  fontSize: '22px',
                  color: activeNode === key ? 'var(--accent)' : 'var(--text-muted)',
                  marginBottom: '10px'
                }}></i>
                <div style={{
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: activeNode === key ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}>
                  {nodes[key].title.split(' ')[1]}
                </div>
              </div>
              {idx < Object.keys(nodes).length - 1 && (
                <div style={{
                  fontSize: '18px',
                  color: 'var(--text-muted)'
                }} className="flow-arrow">
                  ➔
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Node details */}
        <div className="glass-panel" style={{
          padding: '35px',
          borderRadius: '12px',
          borderLeft: '4px solid var(--accent)'
        }}>
          <h3 style={{
            fontSize: '20px',
            color: 'var(--text-primary)',
            marginBottom: '15px',
            fontFamily: 'var(--font-title)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <i className={`fa-solid ${nodes[activeNode].icon}`} style={{ color: 'var(--accent)' }}></i>
            {nodes[activeNode].title}
          </h3>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '15px',
            lineHeight: 1.6,
            marginBottom: '24px'
          }}>
            {nodes[activeNode].desc}
          </p>

          <h4 style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 700,
            letterSpacing: '1px',
            marginBottom: '15px'
          }}>
            Associated Technologies:
          </h4>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {nodes[activeNode].tools.map((tool, idx) => (
              <span 
                key={idx}
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-secondary)',
                  padding: '6px 14px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .arch-flow {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: stretch !important;
          }
          .flow-arrow {
            transform: rotate(90deg) !important;
            margin: 5px auto !important;
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
