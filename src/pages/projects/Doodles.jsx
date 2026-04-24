import React, { useState, useEffect, useRef } from 'react';
import { imgUrl } from '../../utils/assetUrl';

const doodles = [
  '/Images/Doodles/0.jpeg',
  '/Images/Doodles/01.jpeg',
  '/Images/Doodles/02.jpeg',
  '/Images/Doodles/03.jpeg',
  '/Images/Doodles/04.jpeg',
  '/Images/Doodles/05.jpeg',
  '/Images/Doodles/06.jpeg',
  '/Images/Doodles/07.jpeg',
  '/Images/Doodles/08.jpeg',
  '/Images/Doodles/09.jpeg',
  '/Images/Doodles/10.jpeg',
  '/Images/Doodles/11.jpeg',
  '/Images/Doodles/12.jpeg',
  '/Images/Doodles/13.jpeg',
  '/Images/Doodles/14.jpeg',
  '/Images/Doodles/15.jpeg',
  '/Images/Doodles/16.jpeg',
  '/Images/Doodles/17.jpeg',
  '/Images/Doodles/19.jpeg',
  '/Images/Doodles/20.jpeg',
  '/Images/Doodles/21.jpeg',
  '/Images/Doodles/22.jpeg',
  '/Images/Doodles/23.jpeg',
  '/Images/Doodles/24.jpeg',
  '/Images/Doodles/25.jpeg',
  '/Images/Doodles/26.jpeg',
  '/Images/Doodles/27.GIF',
].sort((a, b) => {
  const numA = parseInt(a.split('/').pop());
  const numB = parseInt(b.split('/').pop());
  return numB - numA;
});

export default function Doodles() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const touchStartX = useRef(null);

  const prev = () => setSelectedIndex((i) => (i - 1 + doodles.length) % doodles.length);
  const next = () => setSelectedIndex((i) => (i + 1) % doodles.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedIndex]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) next();
    else if (delta > 50) prev();
    touchStartX.current = null;
  };

  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Doodles
            </h1>
            <p className="text-muted mt-2">Illustration · Mixed Media</p>
          </div>

          <div className="photo-grid">
            {doodles.map((path, i) => (
              <img
                key={i}
                src={imgUrl(path)}
                alt={`Doodle ${i + 1}`}
                onClick={() => setSelectedIndex(i)}
                style={{ cursor: 'zoom-in' }}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.88)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={imgUrl(doodles[selectedIndex])}
            alt="Enlarged doodle"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '80vw', maxHeight: '90vh',
              objectFit: 'contain', borderRadius: '8px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
            }}
          />

          <button onClick={(e) => { e.stopPropagation(); prev(); }} style={navBtnStyle('left')}>‹</button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} style={navBtnStyle('right')}>›</button>

          <button
            onClick={() => setSelectedIndex(null)}
            style={{
              position: 'absolute', top: 16, right: 24,
              background: 'none', border: 'none',
              color: '#fff', fontSize: '2.5rem',
              cursor: 'pointer', lineHeight: 1, opacity: 0.8,
            }}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}

function navBtnStyle(side) {
  return {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    [side]: 16,
    background: 'rgba(255,255,255,0.15)', border: 'none',
    color: '#fff', fontSize: '3rem', lineHeight: 1,
    width: 56, height: 56, borderRadius: '50%',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  };
}
