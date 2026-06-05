import React, { useState } from 'react';

// Import images
import focusAdminImg from '../assets/focus_admin_dashboard.png';
import focusLobbyImg from '../assets/focus_lobby.png';
import focusEditorImg from '../assets/focus_editor.png';
import focusConcludedImg from '../assets/focus_concluded.png';
import focusAiImg from '../assets/focus_ai_analysis.png';
import focusSubmissionsImg from '../assets/focus_submissions.png';

import loreezProductsImg from '../assets/loreez_products.png';
import loreezDetailsImg from '../assets/loreez_details.png';
import loreezWishlistImg from '../assets/loreez_wishlist.png';

const projectList = [
  {
    id: 'focusarena',
    title: 'FocusArena',
    subtitle: 'Real-Time Competitive Coding Platform',
    category: 'fullstack',
    tags: ['React.js', 'Django REST Framework', 'WebSockets', 'Redis', 'PostgreSQL', 'AWS EC2'],
    description: 'A low-latency coding competition arena featuring synchronized multiplayer lobbies, automated scoring metrics, anti-cheat tab checking mechanisms, and real-time student submission tracking.',
    images: [
      { src: focusEditorImg, title: "Battle Arena Workspace" },
      { src: focusLobbyImg, title: "Match Lobbies wait screen" },
      { src: focusAiImg, title: "AI Contest Performance Feedback" },
      { src: focusConcludedImg, title: "Battle Concluded rankings" },
      { src: focusAdminImg, title: "Admin Control Center metrics" },
      { src: focusSubmissionsImg, title: "Submissions Log & verdicts" },
    ]
  },
  {
    id: 'loreez',
    title: 'Loreez',
    subtitle: 'Full-Stack E-Commerce Platform',
    category: 'fullstack',
    tags: ['React.js', 'Redux', 'Django REST Framework', 'PostgreSQL', 'Axios Interceptors'],
    description: 'A modern e-commerce jewelry store catalog featuring detailed configuration menus, cart registries, user wishlist storage, and session token refreshing with Axios interceptors.',
    images: [
      { src: loreezProductsImg, title: "Product Catalog Grid" },
      { src: loreezDetailsImg, title: "Product Details Configurator" },
      { src: loreezWishlistImg, title: "Wishlist Storage Center" },
    ]
  }
];

const Projects = ({ onOpenLightbox }) => {
  const [filter, setFilter] = useState('all');
  
  // Track active slide index for each project card locally
  const [activeSlides, setActiveSlides] = useState({
    focusarena: 0,
    loreez: 0
  });

  const handleSlideNav = (projectId, direction, total) => {
    setActiveSlides((prev) => {
      const current = prev[projectId];
      let next = current;
      if (direction === 'next') {
        next = current === total - 1 ? 0 : current + 1;
      } else {
        next = current === 0 ? total - 1 : current - 1;
      }
      return { ...prev, [projectId]: next };
    });
  };

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter(proj => proj.category === filter);

  return (
    <section id="projects" style={{
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div style={{
            width: '50px',
            height: '4px',
            background: 'var(--accent-gradient)',
            margin: '0 auto',
            borderRadius: '2px'
          }} />
        </div>

        {/* Filter Controls */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '50px'
        }}>
          {['all', 'fullstack'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              style={{
                background: filter === tab ? 'var(--accent-gradient)' : 'var(--bg-primary)',
                color: filter === tab ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--card-border)',
                padding: '8px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'var(--font-title)',
                fontWeight: 600,
                fontSize: '13.5px',
                boxShadow: filter === tab ? 'var(--shadow-sm)' : 'none'
              }}
            >
              {tab === 'all' ? 'All Projects' : 'Full Stack (React & Django)'}
            </button>
          ))}
        </div>

        {/* Project Cards List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '50px'
        }}>
          {filteredProjects.map((project) => {
            const activeIdx = activeSlides[project.id];
            const activeImg = project.images[activeIdx];

            return (
              <div 
                key={project.id}
                className="glass-panel"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.05fr 0.95fr',
                  gap: '50px',
                  padding: '40px',
                  borderRadius: '12px',
                  alignItems: 'center'
                }}
                className="project-grid-row"
              >
                {/* Project Left Side: Professional Slideshow Carousel */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{
                    position: 'relative',
                    height: '280px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid var(--card-border)',
                    boxShadow: 'var(--shadow-sm)',
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenLightbox(project.images, activeIdx)}
                  >
                    <img 
                      src={activeImg.src} 
                      alt={activeImg.title} 
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    
                    {/* Navigation Arrow Left */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSlideNav(project.id, 'prev', project.images.length);
                      }}
                      style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(15, 23, 42, 0.75)',
                        border: 'none',
                        color: '#fff',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        transition: 'opacity 0.2s',
                        zIndex: 2
                      }}
                      onMouseOver={(e) => e.target.style.background = 'var(--accent)'}
                      onMouseOut={(e) => e.target.style.background = 'rgba(15, 23, 42, 0.75)'}
                    >
                      &#10094;
                    </button>

                    {/* Navigation Arrow Right */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSlideNav(project.id, 'next', project.images.length);
                      }}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'rgba(15, 23, 42, 0.75)',
                        border: 'none',
                        color: '#fff',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        transition: 'opacity 0.2s',
                        zIndex: 2
                      }}
                      onMouseOver={(e) => e.target.style.background = 'var(--accent)'}
                      onMouseOut={(e) => e.target.style.background = 'rgba(15, 23, 42, 0.75)'}
                    >
                      &#10095;
                    </button>

                    {/* Caption Overlay */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      background: 'linear-gradient(transparent, rgba(15, 23, 42, 0.9))',
                      color: '#fff',
                      padding: '20px 16px 12px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      zIndex: 1
                    }}>
                      {activeImg.title}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    overflowX: 'auto',
                    paddingBottom: '4px'
                  }}>
                    {project.images.map((img, idx) => (
                      <div 
                        key={idx}
                        onClick={() => setActiveSlides((prev) => ({ ...prev, [project.id]: idx }))}
                        style={{
                          flexShrink: 0,
                          width: '56px',
                          height: '40px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          border: activeIdx === idx ? '2px solid var(--accent)' : '1px solid var(--card-border)',
                          opacity: activeIdx === idx ? 1 : 0.6,
                          transition: 'all 0.2s'
                        }}
                      >
                        <img 
                          src={img.src} 
                          alt={img.title} 
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Right Side: Details */}
                <div>
                  <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {project.title}
                  </h3>
                  <h4 style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '20px' }}>
                    {project.subtitle}
                  </h4>
                  
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginBottom: '24px', lineHeight: '1.6' }}>
                    {project.description}
                  </p>

                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '30px'
                  }}>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          background: 'var(--bg-primary)',
                          border: '1.5px solid var(--card-border)',
                          color: 'var(--text-secondary)',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: 600
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '15px' }}>
                    <button 
                      onClick={() => onOpenLightbox(project.images, activeIdx)}
                      className="btn-primary"
                      style={{ padding: '10px 24px', fontSize: '13.5px', borderRadius: '4px' }}
                    >
                      <i className="fa-solid fa-expand" style={{ marginRight: '6px' }}></i> Expand Fullscreen
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-grid-row {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
            padding: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
export { projectList }; // export for reuse if needed
