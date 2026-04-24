import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Home() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <section id="feature" className="py-5">
        <div className="container px-4 text-center">
          <h1 className="display-4 fw-bold text-dark mb-4" style={{ letterSpacing: '-1px' }}>Hello & welcome!</h1>
          <img className="d-block mx-auto mb-5 profile-img mt-3" src="/Images/PeipeiSun_small.jpg" alt="Lipeipei Sun profile" />
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4 fs-4 text-muted" style={{ fontWeight: 300 }}>
              I'm <span className="fw-medium text-dark">Lipeipei Sun</span>, a current master's student in Computer Science at Northeastern University, embarking on an exciting journey that bridges the creative world of architecture with the innovative realm of technology.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="pb-5">
        <div className="container marketing">
          <ProjectCard 
            title="Building DeepWork: How We Used AI as a Full-Stack Engineering Pipeline"
            category="Full-Stack Development & AI Engineering"
            description="DeepWork is a full-stack Pomodoro focus timer built with Next.js 16, MongoDB, and Tailwind CSS. It focuses on non-coercive transitions and a structured engineering pipeline using TDD."
            imageUrl="/Images/12_DeepWork.png"
            primaryLink="/12_page_DeepWork.html"
          />

          <ProjectCard 
            title="Building Interactive LLM-persona"
            category="Research Apprenticeship"
            description="This research project focuses on the application of large language models (LLMs) to building interactive Persona."
            imageUrl="/Images/10_InteractivePersona.webp"
            primaryLink="/10_page_research_LLMPersona.html"
            reverse={true}
          />

          <ProjectCard 
            title="Catch the Ghost"
            category="Game"
            description="A Halloween game inspired by minesweeper, developed using React, JavaScript, and hosted on Render."
            videoUrl="/Images/11_CathTheGhosts_trimmed.mov"
            primaryLink="https://catchtheghost-game.onrender.com/"
            primaryLinkText="Play"
            secondaryLink="https://github.com/sunlipeipei/lipeipei-sun-project2.git"
          />

          <ProjectCard 
            title="Santa cross the street"
            category="A fun festival game"
            description="A simple game created with Python and pyglet for the holiday season."
            imageUrl="/Images/01_Santa_Game.gif"
            primaryLink="/02_page_santa_game.html"
            reverse={true}
          />

          <ProjectCard 
            title="building exterior"
            category="Layouts and optimization"
            description="The objective of this project is to analyze and optimize the layout of wall panels and windows on a building facade, incorporating both performance requirements and aesthetic preferences. The project employed discrete mathematics, with a focus on combinatorics and probability, to systematically explore layout options."
            imageUrl="/Images/02_Pattern Studies feature image.png"
            primaryLink="/03_page_panel_layout.html"
          />

          <ProjectCard 
            title="UW Health Sciences Education Building"
            category="Architecture"
            description="The Health Sciences Education Building provides learning spaces to foster interaction, collaboration, and creativity. I have focused on designing and developing technical documents for building exterior envelopes as well as flexible, open learning spaces."
            imageUrl="/Images/03_UW HSEB.jpg"
            primaryLink="/04_page_uw_hseb.html"
            reverse={true}
          />

          <ProjectCard 
            title="University of Arizona Student Success District"
            category="Architecture"
            description="Through modernizing three existing buildings, and constructing an entirely new one, this project transforms this cluster of buildings into a unified and cohesive District that provides a centralized point of support for the entire student body."
            imageUrl="/Images/07_UofA.jpeg"
            primaryLink="/07_page_uofa_libraries.html"
          />

          <ProjectCard 
            title="living upon the history"
            category="Creative storytelling"
            description="Our lives are built upon the accumulated history of places we’ve lived in. Each layer of time tells a story, and informs the future."
            imageUrl="/Images/04_LUH.jpeg"
            primaryLink="/05_page_luh.html"
            reverse={true}
          />

          <ProjectCard 
            title="never gone, never home"
            category="Creative storytelling"
            description="This project explores the juxtaposition of two distinct worlds: the futuristic, uniform Cube City suspended above Earth to escape relentless earthquakes, and a vibrant, close-knit community on Earth's surface, emphasizing themes of memory, identity, and the human connection to place."
            imageUrl="/Images/05_Never Gone Never Home.jpg"
            primaryLink="/06_page_fairy_tale.html"
          />

          <ProjectCard 
            title="recording through the lens"
            category="Photography"
            description="Explore the art of capturing everything from the intricate details of architecture to the boundless beauty of landscapes through my lens. Each image invites you on a visual journey, showcasing the remarkable diversity of our world and evoking a deeper appreciation for the spaces we inhabit."
            imageUrl="/Images/08_Photo.jpeg"
            reverse={true}
          />

          <ProjectCard 
            title="doodles"
            category="Illustration"
            description="Delve into the whimsical world of multi-media creations, where each piece blends traditional techniques with digital innovation. This collection embodies the joy of exploration, showcasing a vibrant tapestry of ideas that dance across the canvas in a celebration of color, texture, and imagination."
            imageUrl="/Images/09_Doodles.JPG"
          />

        </div>
      </section>
    </main>
  );
}

export default Home;
