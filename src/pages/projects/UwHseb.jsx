import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function UwHseb() {
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
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/1.jpg" alt="UW HSEB photo 1" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/2.jpeg" alt="UW HSEB photo 2" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/3.jpeg" alt="UW HSEB photo 3" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/4.jpeg" alt="UW HSEB photo 4" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/5.jpeg" alt="UW HSEB photo 5" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/6.jpeg" alt="UW HSEB photo 6" className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="/Images/03_UW HSEB/7.jpeg" alt="UW HSEB photo 7" className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </main>
  );
}
