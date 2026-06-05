import React, { useState, useEffect } from 'react';

const Navbar = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: 'var(--header-height)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 8%',
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'var(--header-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--card-border)' : 'none',
      boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
    }}>
      <div style={{
        fontFamily: 'var(--font-title)',
        fontSize: '20px',
        fontWeight: 800,
        color: 'var(--text-primary)',
        letterSpacing: '-0.5px',
        cursor: 'pointer'
      }} onClick={() => window.scrollTo(0, 0)}>
        ASHIKA K S
      </div>

      {/* Navigation and Actions Wrapper */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="nav-desktop">
        <ul style={{
          display: 'flex',
          listStyle: 'none',
          gap: '24px',
          alignItems: 'center'
        }}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '14.5px',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--accent)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ width: '1px', height: '20px', background: 'var(--card-border)' }} />

        {/* Theme Toggle Button */}
        <button 
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {theme === 'light' ? (
            <i className="fa-solid fa-moon" style={{ color: 'var(--text-secondary)' }} />
          ) : (
            <i className="fa-solid fa-sun" style={{ color: '#fbbf24' }} />
          )}
        </button>

        <a href="#contact" className="btn-primary" style={{ padding: '8px 20px', fontSize: '13.5px', borderRadius: '4px' }}>
          Hire Me
        </a>
      </div>

      {/* Mobile Actions Container */}
      <div style={{ display: 'none', gap: '15px', alignItems: 'center' }} className="nav-mobile-container">
        <button 
          onClick={onToggleTheme}
          aria-label="Toggle Theme"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            fontSize: '18px',
            cursor: 'pointer'
          }}
        >
          {theme === 'light' ? (
            <i className="fa-solid fa-moon" style={{ color: 'var(--text-secondary)' }} />
          ) : (
            <i className="fa-solid fa-sun" style={{ color: '#fbbf24' }} />
          )}
        </button>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
          }}
        >
          <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)' }} />
          <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)' }} />
          <span style={{ width: '22px', height: '2px', background: 'var(--text-primary)' }} />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'var(--header-height)',
          left: 0,
          width: '100%',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--card-border)',
          boxShadow: 'var(--shadow-lg)',
          padding: '20px 8%',
          zIndex: 90
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: 500,
                    display: 'block'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li style={{ paddingTop: '10px' }}>
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="btn-primary" 
                style={{ display: 'block', textAlign: 'center', borderRadius: '4px' }}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-mobile-container {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
