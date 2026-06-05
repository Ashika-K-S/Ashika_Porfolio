import React, { useEffect } from 'react';

const Lightbox = ({ images, activeIdx, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onClose]);

  if (!images || images.length === 0 || activeIdx === null) return null;

  const activeImg = images[activeIdx];

  return (
    <div 
      className="lightbox-backdrop"
      onClick={onClose}
    >
      <div 
        className="lightbox-content"
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '-45px',
            right: '0',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '30px',
            cursor: 'pointer',
            transition: 'color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--accent-cyan)'}
          onMouseOut={(e) => e.target.style.color = '#fff'}
        >
          &times;
        </button>

        {/* Previous Button */}
        <button 
          onClick={onPrev}
          style={{
            position: 'absolute',
            left: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 10
          }}
          className="lightbox-nav"
          onMouseOver={(e) => {
            e.target.style.borderColor = 'var(--accent-cyan)';
            e.target.style.background = 'rgba(0,242,254,0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
            e.target.style.background = 'rgba(255,255,255,0.05)';
          }}
        >
          &#10094;
        </button>

        {/* Current Image */}
        <img 
          src={activeImg.src} 
          alt={activeImg.title} 
          className="lightbox-image"
        />

        {/* Next Button */}
        <button 
          onClick={onNext}
          style={{
            position: 'absolute',
            right: '-60px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            fontSize: '20px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            zIndex: 10
          }}
          className="lightbox-nav"
          onMouseOver={(e) => {
            e.target.style.borderColor = 'var(--accent-cyan)';
            e.target.style.background = 'rgba(0,242,254,0.1)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
            e.target.style.background = 'rgba(255,255,255,0.05)';
          }}
        >
          &#10095;
        </button>

        {/* Image Title / Info */}
        <div style={{
          marginTop: '15px',
          color: 'var(--text-secondary)',
          textAlign: 'center',
          fontFamily: 'var(--font-title)'
        }}>
          <h4 style={{ color: '#fff', fontSize: '16px', marginBottom: '4px' }}>{activeImg.title}</h4>
          <span style={{ fontSize: '13px' }}>{activeIdx + 1} of {images.length}</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .lightbox-nav {
            top: auto !important;
            bottom: -60px !important;
            transform: none !important;
          }
          .lightbox-nav:first-of-type {
            left: 20% !important;
          }
          .lightbox-nav:last-of-type {
            right: 20% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Lightbox;
