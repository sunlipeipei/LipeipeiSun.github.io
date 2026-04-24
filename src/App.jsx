import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Code from './pages/Code';
import Design from './pages/Design';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 position-relative">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/code" element={<Code />} />
            <Route path="/design" element={<Design />} />
            {/* Fallback route for all individual project pages to open existing HTML if needed, or simply render Home. We can expand this later. */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
