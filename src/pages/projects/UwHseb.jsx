import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { imgUrl } from '../../utils/assetUrl';

export default function UwHseb() {
  const slides = ['1.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'];

  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              UW Health Sciences Education Building
            </h1>
            <p className="text-muted mt-2">Architecture · Building Envelope & Learning Spaces</p>
          </div>

          <Carousel className="project-carousel">
            {slides.map((file, i) => (
              <Carousel.Item key={i}>
                <img src={imgUrl(`/Images/03_UW HSEB/${file}`)} alt={`UW HSEB photo ${i + 1}`} className="d-block w-100" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </main>
  );
}
