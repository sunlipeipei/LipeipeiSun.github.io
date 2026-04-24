import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "link-dark fw-bold" : "link-secondary";
  };

  return (
    <header className="p-3 fixed-top navbar-glass">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none me-lg-auto fw-bold fs-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Lipeipei Sun
          </Link>
          <ul className="nav col-12 col-lg-auto mb-2 justify-content-center align-items-center mb-md-0">
            <li><Link to="/" className={`nav-link px-3 ${isActive('/')}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link px-3 ${isActive('/about')}`}>About Me</Link></li>
            <li><Link to="/code" className={`nav-link px-3 ${isActive('/code')}`}>Code</Link></li>
            <li><Link to="/design" className={`nav-link px-3 ${isActive('/design')}`}>Design</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
