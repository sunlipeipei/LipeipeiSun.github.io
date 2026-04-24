import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer mt-auto py-4 bg-transparent border-top mt-5">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <div className="col-md-4 d-flex align-items-center">
          <span className="text-secondary fw-medium">© {new Date().getFullYear()} Lipeipei Sun. All rights reserved.</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mb-0">
          <li className="ms-3">
            <a className="text-secondary hover-text-dark transition" href="https://github.com/sunlipeipei" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
          </li>
          <li className="ms-3">
            <a className="text-secondary hover-text-dark transition" href="https://www.linkedin.com/in/lipeipei-peipei-sun-84661642/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
