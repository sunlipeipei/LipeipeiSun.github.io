import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Code from './pages/Code';
import Design from './pages/Design';
import DeepWork from './pages/projects/DeepWork';
import LlmPersona from './pages/projects/LlmPersona';
import SantaGame from './pages/projects/SantaGame';
import PanelLayout from './pages/projects/PanelLayout';
import UwHseb from './pages/projects/UwHseb';
import LivingUponHistory from './pages/projects/LivingUponHistory';
import NeverGoneNeverHome from './pages/projects/NeverGoneNeverHome';
import UofADistrict from './pages/projects/UofADistrict';
import Photography from './pages/projects/Photography';

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
            <Route path="/projects/deepwork" element={<DeepWork />} />
            <Route path="/projects/llm-persona" element={<LlmPersona />} />
            <Route path="/projects/santa-game" element={<SantaGame />} />
            <Route path="/projects/panel-layout" element={<PanelLayout />} />
            <Route path="/projects/uw-hseb" element={<UwHseb />} />
            <Route path="/projects/living-upon-history" element={<LivingUponHistory />} />
            <Route path="/projects/never-gone-never-home" element={<NeverGoneNeverHome />} />
            <Route path="/projects/uofa-district" element={<UofADistrict />} />
            <Route path="/projects/photography" element={<Photography />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
