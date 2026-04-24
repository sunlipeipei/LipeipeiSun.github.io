import React from 'react';

function AboutMe() {
  return (
    <main style={{ minHeight: '100vh', paddingBottom: '80px' }}>
      <section id="feature" className="gradient-background border-bottom" style={{ paddingTop: '120px', paddingBottom: '3rem' }}>
        <div className="px-4 text-center">
          <img className="d-block mx-auto mb-4 profile-img shadow" src="/Images/PeipeiSun_small.jpg" alt="profile image" />
          <a href="/Images/Resume Lipeipei Sun.pdf" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-outline-dark btn-modern my-3 fs-5">View Resume</button>
          </a>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="col-lg-6 mx-auto container px-4">
          <div className="mx-auto text-start fs-5" style={{ lineHeight: '1.8' }}>
            <p className="mb-4">
              Hello! I'm <span className="fw-medium text-dark">Lipeipei Sun</span>, a current master's student in Computer Science at Northeastern University, embarking on an exciting journey that bridges the creative world of architecture with the innovative realm of technology.
            </p>
            <p className="mb-4">
              My story begins at the University of Washington, where I delved into the intricate art of architecture. There, I discovered the power of design in shaping our environments and impacting lives. As an architect, I was drawn to challenges, often finding myself at the forefront of pioneering designs. One of my notable projects included the innovative facade of the Health Science Education Building at the University of Washington. This project wasn't just about aesthetics; it was a complex puzzle of functionality, beauty, and innovation.
            </p>
            <p className="mb-4">
              However, as technology continued to revolutionize every aspect of our lives, I realized the vast potential of computer science in enhancing and transforming the field of design. This realization ignited my transition into tech. I saw an opportunity to blend my architectural expertise with cutting-edge technology to push the boundaries of design and creativity.
            </p>
            <p className="mb-4">
              At Northeastern University, through the Align Master's Program, I am diving into the depths of computer science. Here, I am not just learning to code; I am exploring how to innovate, how to transform abstract ideas into tangible solutions, and how to apply a user-centered approach to technology.
            </p>
            <p className="mb-4">
              My journey showcases the power of interdisciplinary learning and the magic that happens when you combine passion with technology. Join me as I explore this new frontier, where architecture meets computer science, and where imagination meets innovation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
