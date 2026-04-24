import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function UofADistrict() {
  const slides = Array.from({ length: 15 }, (_, i) => {
    const num = String(i + 2).padStart(2, '0');
    return `/Images/07_UofA/${num}.jpeg`;
  });

  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              University of Arizona Student Success District
            </h1>
            <p className="text-muted mt-2">Architecture · Campus Design</p>
          </div>

          <Carousel className="project-carousel">
            {slides.map((src, i) => (
              <Carousel.Item key={i}>
                <img src={src} alt={`UofA District slide ${i + 1}`} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}
