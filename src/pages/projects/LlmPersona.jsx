import React from 'react';

export default function LlmPersona() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Building Interactive LLM-Persona
            </h1>
            <p className="text-muted mt-2">Research Apprenticeship · Summer 2024</p>
          </div>

          <img
            src="/Images/10_InteractivePersona.webp"
            className="img-fluid d-block mx-auto mb-4"
            alt="Interactive LLM-Persona"
            style={{ maxWidth: '600px', borderRadius: '16px' }}
          />

          <div className="d-flex justify-content-center mb-5">
            <a href="https://arxiv.org/html/2409.15604v1/" className="btn btn-dark btn-modern" target="_blank" rel="noreferrer">
              View Research Paper
            </a>
          </div>

          <div className="col-lg-8 mx-auto text-start">
            <h4 className="mb-3">The Background</h4>
            <p className="mb-4">
              I was awarded the opportunity to participate in the DREAM Project, a research apprenticeship by the Computing Research Association, during the summer of 2024. My project, "Building Interactive LLM-persona," is conducted at Northeastern University's Khoury College of Computer Sciences under the guidance of Mirjana Prpa. This research focuses on leveraging large language models (LLMs) to create interactive personas while addressing challenges such as bias and stereotyping. My role involves conducting literature reviews, developing and implementing LLM-based personas, and presenting our findings.
            </p>

            <h4 className="mb-3">Research Problem</h4>
            <p className="mb-4">
              Personas serve as powerful tools for understanding and communicating user goals and behaviors within specific contexts in human-centered design used by product designers, development teams, as well as stakeholders. Traditional personas typically include a narrative and a photo. The narrative incorporates important research findings along with some fictional situations. However, this static format relies on designers and development teams to empathize and role-play during the design phase. Traditional personas have remained static and often abstract, limiting their effectiveness in the design and decision-making phases. Creating interactive personas offers promising opportunities to provide real-time feedback based on user data and context throughout the design, development, and decision-making process.
            </p>
            <p className="mb-4">
              Persona creation has traditionally relied on qualitative methods such as interviews, observations, and survey data. More recent methods use large datasets, including statistical data, clickstreams, and social media data. However, these approaches often did not address the sensitive user groups where empirical data is restricted due to practical and ethical reasons and large datasets are not readily available.
            </p>

            <h4 className="mb-3">Motivation</h4>
            <p className="mb-4">
              The development of Large Language Models (LLMs) presents an opportunity to provide context in addition to the limited data available and create interactive personas to represent, engage, and empower sensitive user groups. Traditional and data-driven methods of persona creation often fall short for sensitive groups due to the lack of available data. This research aims to explore the use of LLMs to generate proxy personas for sensitive groups using limited data from online forums, where empirical data is restricted due to practical and ethical reasons.
            </p>
            <p className="mb-4">
              Understanding the inherent biases and stereotypes in LLMs, this research will also explore methods to detect, monitor, and correct these biases during the persona creation process. Additionally, engaging subject experts or users in the persona development process will be explored to enhance authenticity and accuracy.
            </p>

            <h4 className="mb-3">Research Gap</h4>
            <p className="mb-4">
              Previous studies have explored the generation of personas using LLMs through prompts and the creation of synthetic research data. However, limited research has investigated using LLM to expand available data for persona creation, particularly for sensitive user groups. Furthermore, while many studies have highlighted the presence of stereotypes and biases in LLM-generated content, there is insufficient research on how to detect and correct these biases during the persona creation process. In addition, there are limited studies on interactive personas that maintain live interaction, engagement, and communication throughout the design process.
            </p>

            <h4 className="mb-3">Research Questions</h4>
            <ol className="mb-4">
              <li className="mb-2">How can LLMs be utilized to create interactive personas for sensitive user groups when large datasets are not available?</li>
              <li className="mb-2">What methods can be used to detect, monitor, and correct stereotypes and biases in LLM-generated personas?</li>
              <li className="mb-2">How can subject experts or users be engaged in the persona creation process to ensure authenticity and validation?</li>
              <li className="mb-2">How do LLM-generated personas compare to traditional personas in terms of accuracy, inclusiveness, and usability?</li>
              <li className="mb-2">What metrics and methodologies can be used to evaluate the quality and effectiveness of interactive LLM-based personas?</li>
            </ol>

            <h4 className="mb-3">Purpose of Project</h4>
            <p className="mb-4">
              The goal of this project is to develop interactive LLM-personas specifically tailored for sensitive groups. Utilize LLMs to expand limited user data and create data-driven proxy personas. The project also aims to develop interactive personas to facilitate continuous engagement, communication, and feedback through HCD phases. Stereotypes and biases should be detected, monitored, and corrected in the LLM-persona creation process.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
