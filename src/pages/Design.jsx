import React from 'react';
import ProjectCard from '../components/ProjectCard';

function Design() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <section id="projects" className="py-5">
        <div className="container marketing">
          
          <ProjectCard 
            title="UW Health Sciences Education Building"
            category="Architecture"
            description="The Health Sciences Education Building provides learning spaces to foster interaction, collaboration, and creativity. I have focused on designing and developing technical documents for building exterior envelopes as well as flexible, open learning spaces."
            imageUrl="/Images/03_UW HSEB.jpg"
            primaryLink="/projects/uw-hseb"
          />

          <ProjectCard 
            title="University of Arizona Student Success District"
            category="Architecture"
            description="Through modernizing three existing buildings, and constructing an entirely new one, this project transforms this cluster of buildings into a unified and cohesive District that provides a centralized point of support for the entire student body."
            imageUrl="/Images/07_UofA.jpeg"
            primaryLink="/projects/uofa-district"
            reverse={true}
          />

          <ProjectCard 
            title="living upon the history"
            category="Creative storytelling"
            description="Our lives are built upon the accumulated history of places we’ve lived in. Each layer of time tells a story, and informs the future."
            imageUrl="/Images/04_LUH.jpeg"
            primaryLink="/projects/living-upon-history"
          />

          <ProjectCard 
            title="never gone, never home"
            category="Creative storytelling"
            description="This project explores the juxtaposition of two distinct worlds: the futuristic, uniform Cube City suspended above Earth to escape relentless earthquakes, and a vibrant, close-knit community on Earth's surface, emphasizing themes of memory, identity, and the human connection to place."
            imageUrl="/Images/05_Never Gone Never Home.jpg"
            primaryLink="/projects/never-gone-never-home"
            reverse={true}
          />

          <ProjectCard
            title="recording through the lens"
            category="Photography"
            description="Explore the art of capturing everything from the intricate details of architecture to the boundless beauty of landscapes through my lens. Each image invites you on a visual journey, showcasing the remarkable diversity of our world and evoking a deeper appreciation for the spaces we inhabit."
            imageUrl="/Images/08_Photo.jpeg"
            primaryLink="/projects/photography"
          />

          <ProjectCard 
            title="doodles"
            category="Illustration"
            description="Delve into the whimsical world of multi-media creations, where each piece blends traditional techniques with digital innovation. This collection embodies the joy of exploration, showcasing a vibrant tapestry of ideas that dance across the canvas in a celebration of color, texture, and imagination."
            imageUrl="/Images/09_Doodles.JPG"
            reverse={true}
          />

        </div>
      </section>
    </main>
  );
}

export default Design;
