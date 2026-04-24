import React from 'react';

export default function SantaGame() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Santa Cross the Street
            </h1>
            <p className="text-muted mt-2">A Fun Festival Game · Python & Pyglet</p>
          </div>

          <img
            src="/Images/01_Santa Game/Game_logo.png"
            className="d-block mx-auto mb-3"
            alt="Santa Game logo"
            style={{ width: '120px' }}
          />
          <img
            src="/Images/01_Santa_Game.gif"
            className="img-fluid d-block mx-auto mb-4"
            alt="Santa Game gameplay"
            style={{ maxWidth: '600px', borderRadius: '16px' }}
          />

          <div className="d-flex justify-content-center mb-5">
            <a href="https://github.com/sunlipeipei/Santa-Game.git" className="btn btn-dark btn-modern" target="_blank" rel="noreferrer">
              Source Code
            </a>
          </div>

          <div className="col-lg-8 mx-auto text-start">
            <p className="mb-4">
              Welcome to "Santa Cross the Street", a delightful and festive game. This game stands as a testament to my commitment to creating user-friendly and engaging experiences, inviting players to assist Santa in navigating busy streets to deliver a Christmas gift to a little boy. Developed using Pyglet and enhanced with a highly intuitive Tkinter GUI, this project not only demonstrates my proficiency in object-oriented programming, error handling, and GUI development but also my dedication to ensuring a seamless and enjoyable user experience.
            </p>
            <p className="mb-4">
              With its eye-catching Scandinavian-style graphics, each element of the game has been thoughtfully selected and adapted to contribute to the overall cheerful theme. The user-friendly interface allows players to effortlessly select difficulty levels and manage settings, which are conveniently saved to a JSON file for a tailored gaming experience. Tackling the challenges of fine-tuning game mechanics and implementing effective unit testing has been both an educational and enjoyable journey.
            </p>
            <p className="mb-4">
              "Santa Cross the Street" is rich in interactive features, including dynamic characters and vehicles, a snow effect toggle, and a pause function for capturing memorable moments. In enhancing the original project, special attention was given to refining Santa's movement mechanics and more deeply integrating the game with the Tkinter GUI, elevating the user-friendliness to new heights.
            </p>
            <p className="mb-4">
              This project is not just a display of technical skills but a journey of creativity, fun, and user-centered design. I invite you to delve into "Santa Cross the Street" and enjoy the harmonious blend of fun gameplay and a user-centric interface, making for a truly joyful and accessible gaming experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
