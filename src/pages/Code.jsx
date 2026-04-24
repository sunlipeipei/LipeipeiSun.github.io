import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Code() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <section id="projects" className="py-5">
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
            description="A Halloween-themed game inspired by Minesweeper, developed using React and JavaScript, and hosted on Render."
            imageUrl="/Images/11_CatchTheGhosts.png"
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

        </div>
      </section>
    </main>
  );
}

export default Code;
