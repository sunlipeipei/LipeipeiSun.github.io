import React from 'react';
import { imgUrl } from '../../utils/assetUrl';

const photos = [
  '/Images/08_Photo.jpeg',
  '/Images/08.jpeg',
  '/Images/08_Photography/14_MillerHull_PikePlaceMarketFront_PS_300dpi.jpg',
  '/Images/08_Photography/16_MillerHull_PikePlaceMarketFront_PS_300dpi_(1).jpg',
];

export default function Photography() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Recording through the lens
            </h1>
            <p className="text-muted mt-2">Photography · Architecture & Landscapes</p>
          </div>

          <div className="photo-grid">
            {photos.map((path, i) => (
              <img key={i} src={imgUrl(path)} alt={`Photography ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
