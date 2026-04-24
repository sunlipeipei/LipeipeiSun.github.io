import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, category, description, imageUrl, videoUrl, primaryLink, primaryLinkText, secondaryLink, secondaryLinkText, reverse }) {
  const contentOrder = reverse ? "order-md-2" : "";
  const mediaOrder = reverse ? "order-md-1" : "";

  return (
    <div className="row featurette py-4 my-2 featurette-card">
      <div className={`col-md-7 pt-3 d-flex flex-column justify-content-center ${contentOrder}`}>
        <h2 className="featurette-heading fw-bold lh-1 mb-3">
          {title} <span className="text-body-secondary fs-4 fw-normal">| {category}</span>
        </h2>
        <p className="lead mb-4 text-muted">{description}</p>
        <div className="d-grid gap-3 d-md-flex justify-content-md-start">
          {primaryLink && (
            (primaryLink.startsWith('http') || primaryLink.endsWith('.html')) ? (
              <a href={primaryLink} target={primaryLink.startsWith('http') ? "_blank" : "_self"} rel={primaryLink.startsWith('http') ? "noopener noreferrer" : ""} className="btn btn-dark btn-modern">
                {primaryLinkText || "View Project"}
              </a>
            ) : (
              <Link to={primaryLink} className="btn btn-dark btn-modern">
                {primaryLinkText || "View Project"}
              </Link>
            )
          )}
          
          {secondaryLink && (
            (secondaryLink.startsWith('http') || secondaryLink.endsWith('.html')) ? (
              <a href={secondaryLink} target={secondaryLink.startsWith('http') ? "_blank" : "_self"} rel={secondaryLink.startsWith('http') ? "noopener noreferrer" : ""} className="btn btn-outline-dark btn-modern">
                {secondaryLinkText || "GitHub"}
              </a>
            ) : (
              <Link to={secondaryLink} className="btn btn-outline-dark btn-modern">
                {secondaryLinkText || "GitHub"}
              </Link>
            )
          )}
        </div>
      </div>
      <div className={`col-md-5 ${mediaOrder} d-flex align-items-center`}>
        {videoUrl ? (
          <video className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-sm" width="500" height="500" autoPlay loop muted playsInline>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto shadow-sm" src={imageUrl} width="500" alt={`${title} preview`} />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
