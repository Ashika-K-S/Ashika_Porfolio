import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Lightbox from './components/Lightbox';

function App() {
  const [theme, setTheme] = useState(() => {
    // Light mode is default, check localStorage first
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  
  const [lightboxImages, setLightboxImages] = useState([]);
  const [activeIdx, setActiveIdx] = useState(null);

  // Sync theme class to body element
  useEffect(() => {
    const body = document.body;
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenLightbox = (images, index) => {
    setLightboxImages(images);
    setActiveIdx(index);
  };

  const handleCloseLightbox = () => {
    setLightboxImages([]);
    setActiveIdx(null);
  };

  const handlePrevLightbox = () => {
    if (lightboxImages.length === 0) return;
    setActiveIdx((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const handleNextLightbox = () => {
    if (lightboxImages.length === 0) return;
    setActiveIdx((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: 'relative', overflowX: 'hidden' }}>
      {/* Navbar with theme switcher */}
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />

      {/* Main sections */}
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects onOpenLightbox={handleOpenLightbox} />
      <Contact />

      {/* Footer */}
      <footer style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--card-border)',
        padding: '40px 8%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: 'var(--max-width)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }} className="footer-container">
          <div style={{
            fontFamily: 'var(--font-title)',
            fontWeight: 800,
            fontSize: '18px',
            color: 'var(--text-primary)',
            letterSpacing: '-0.5px'
          }}>
            ASHIKA K S
          </div>
          <p style={{
            fontSize: '13.5px',
            color: 'var(--text-muted)'
          }}>
            &copy; {new Date().getFullYear()} Ashika K S. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '15px'
          }}>
            <a 
              href="https://github.com/ashika-k-s" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13.5px', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/ashika-ks" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13.5px', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <Lightbox 
        images={lightboxImages}
        activeIdx={activeIdx}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />

      <style>{`
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column !important;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
