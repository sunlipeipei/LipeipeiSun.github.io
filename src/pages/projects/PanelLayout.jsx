import React from 'react';

export default function PanelLayout() {
  return (
    <main className="gradient-background pt-5 mt-5" style={{ minHeight: '100vh' }}>
      <div className="container py-5 px-4">
        <div className="featurette-card mb-5">
          <div className="text-center mb-4">
            <h1 className="display-4 fw-bold text-dark" style={{ letterSpacing: '-1px' }}>
              Building Facade & Optimization
            </h1>
            <p className="text-muted mt-2">Layouts and Optimization · Discrete Mathematics</p>
          </div>

          <img
            src="/Images/02_Panel Layout/Picture01.jpg"
            className="img-fluid d-block mx-auto mb-4"
            alt="Building facade feature"
            style={{ maxWidth: '700px', borderRadius: '16px' }}
          />

          <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
            <a
              href="https://northeastern-my.sharepoint.com/:b:/r/personal/sun_lipe_northeastern_edu/Documents/CS%205002%20Discrete%20Structure/Final%20Project/CS5002_Final_Project_Report_Lipeipei%20Sun/CS5002_Final_Project_Report_Lipeipei%20Sun_Appendix%20A.pdf?csf=1&web=1&e=lZyoTh"
              className="btn btn-dark btn-modern"
              target="_blank"
              rel="noreferrer"
            >
              Presentation Slides
            </a>
            <a
              href="https://github.com/sunlipeipei/Building-Facade-Layouts-and-Optimization"
              className="btn btn-outline-dark btn-modern"
              target="_blank"
              rel="noreferrer"
            >
              Source Code
            </a>
            <a
              href="https://northeastern-my.sharepoint.com/:v:/r/personal/sun_lipe_northeastern_edu/Documents/CS%205002%20Discrete%20Structure/Final%20Project/5002%20-%20Diecrete%20Structure%20-%20Final%20Presentation%20-%20with%20all%20videos.mp4?csf=1&web=1&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=jT5bx9"
              className="btn btn-outline-dark btn-modern"
              target="_blank"
              rel="noreferrer"
            >
              Presentation Video
            </a>
          </div>

          <div className="col-lg-8 mx-auto text-start">
            <h3 className="mb-3">The Question and Objective</h3>
            <p className="mb-4">
              This project's objective is to analyze and optimize the layout of wall panels and windows on a building facade, incorporating both performance requirements and aesthetic preferences. The project will employ discrete mathematics, with a focus on combinatorics and probability, to systematically explore layout options. The guiding question of this project is:
            </p>
            <p className="mb-4 fst-italic">
              "What are the optimized building façade layout options based on the building information provided below?"
            </p>

            <h4 className="mb-3">Basic Building Façade Requirements</h4>
            <ul className="mb-4">
              <li>Building Facade Dimensions:
                <ul>
                  <li>Width: 140 feet (42 vertical bays)</li>
                  <li>Height: 54 feet</li>
                </ul>
              </li>
              <li>Building Stories:
                <ul>
                  <li>Story height: 15 feet at Level 1, 18 feet at Level 2 and 3, and 3 feet at the parapet</li>
                  <li>Total stories: 3</li>
                </ul>
              </li>
              <li>Panel Sizes:
                <ul>
                  <li>Heights: 3, 6, or 9 feet</li>
                  <li>Width: 40 inches (10/3 feet)</li>
                </ul>
              </li>
              <li>Window Specifications:
                <ul>
                  <li>Height: 12 feet at level 1 and 15 feet at level 2 and 3</li>
                  <li>Located at floor level with elevations at 0, 18, and 36 feet</li>
                </ul>
              </li>
            </ul>

            <h4 className="mb-3">Performance Requirements</h4>
            <ul className="mb-4">
              <li>The total glazing (window area) should be between 35% to 40% of the total facade area for each level.</li>
              <li>Windows to be evenly distributed.</li>
            </ul>

            <h4 className="mb-3">Aesthetic Preferences</h4>
            <ul className="mb-5">
              <li>Preference for 6 feet and 9 feet panels. The 3 feet panel should be used only between two windows.</li>
              <li>No more than two windows should be adjacent to each other to maintain the building's aesthetic integrity.</li>
            </ul>

            <h3 className="mb-3">Analysis</h3>
            <p className="mb-4">
              The scope of this project involves two main stages: analyzing combinations per vertical bay and then applying these findings to the entire wall area.
            </p>

            <h4 className="mb-3">Step 1. Total Combination for Vertical Bay</h4>
            <p className="mb-4">
              The initial step involved calculating the number of wall panel layout combinations available per vertical bay, considering panel heights of 3, 6, and 9 feet, along with 12- and 15-foot windows. Based on the 3, 6, 9 feet solid panels, 12- and 15-feet windows, and a 54 feet total building height, 141 combinations were identified. This calculation uses Module 5 Combination knowledge from discrete math class.
            </p>
            <img src="/Images/02_Panel Layout/Picture02.png" alt="Matplotlib graph showing building façade panel layout" className="project-content-img" />
            <p className="mb-4 text-muted fst-italic text-center">Matplotlib graph showing building façade panel layout – vertical bay options</p>

            <p className="mb-4">
              Upon determining the total combinations, the next step was to refine these options. Although there were 141 options for vertical bays, many did not align with aesthetic preferences favoring 6-foot and 9-foot panels with a maximum of two 3' panels between windows. Additionally, options with more than 3 windows in a vertical bay exceeded the maximum allowable windows. Consequently, options not meeting these criteria were eliminated.
            </p>
            <p className="mb-4">
              After this elimination, there were 15 valid options. The next stage involved arranging each vertical bay layout using Module 5 permutation knowledge. This involved looping through each vertical bay and performing permutation calculations to generate different arrangements. During this process, we ensured that the window heights were shown at the correct elevations of 0, 15, and 33 feet and filtered out invalid options.
            </p>
            <p className="mb-4">As a result, from the 15 combination options, 113 valid options were generated for the vertical bays.</p>
            <img src="/Images/02_Panel Layout/Picture03.png" alt="Matplotlib graph showing the 15 combination and 113 vertical bay options" className="project-content-img" />
            <p className="mb-5 text-muted fst-italic text-center">Matplotlib graph showing the 15 combination and 113 vertical bay options</p>

            <h4 className="mb-3">Step 2. Combination at Full Building Extent</h4>
            <p className="mb-4">
              Now with the valid vertical bay options, I worked on combining the vertical bays to create the full building layouts. The evaluation of these layouts was guided by performance requirements, particularly the window-to-wall ratio. If this ratio falls outside the 35%–40% range, those options were disregarded.
            </p>
            <p className="mb-4">
              However, as I started my analysis, I realized that arranging 113 vertical bay options into a 42-bay building facade is a very complex task. The permutations for this scenario were extraordinarily high (113^42 if each bay can be used more than once, or 113! / (113-42)! if each bay can be used only once). It seemed infeasible to generate and evaluate all permutations.
            </p>
            <p className="mb-4">
              After knowing that generating all the options was not practical, to move forward with the analysis, instead of providing all the possible combinations, I used a few methods to provide directions for further analysis.
            </p>

            <h5 className="mb-3">Method 1 – Simplifying the Combination Analysis & Finding Patterns</h5>
            <p className="mb-4">
              For this method, I started by reviewing the glazing requirements and identifying how many windows were required at each level. To simplify the analysis, I chose to start with the highest window quality for each level, which would provide the best daylight for the interior space.
            </p>
            <p className="mb-4">
              First, the 113 valid options were divided into two categories, one with windows and one without. Then the options with windows were further broken down into seven categories:
            </p>
            <img src="/Images/02_Panel Layout/Picture04.png" alt="Categories of vertical bays with windows" className="project-content-img" />
            <p className="mb-4 text-muted fst-italic text-center">Categories of vertical bays with windows</p>

            <p className="mb-4">
              Option A involved alternating bays with 3 windows at each level and bays with all solid panels. Option B incorporated three types of window bays for window placement across levels. Option C aimed for layout variation using all window bay types.
            </p>
            <img src="/Images/02_Panel Layout/Picture05.png" alt="Matplotlib graph showing samples from Option B" className="project-content-img" />
            <p className="mb-4 text-muted fst-italic text-center">Matplotlib graph showing samples from Option B</p>
            <img src="/Images/02_Panel Layout/Picture06.png" alt="Matplotlib graph showing samples from Option C" className="project-content-img" />
            <p className="mb-5 text-muted fst-italic text-center">Matplotlib graph showing samples from Option C</p>

            <h5 className="mb-3">Method 2 – Incremental Analysis</h5>
            <p className="mb-4">
              The second method involved breaking the façade into smaller, more manageable modules for analysis and then building up the full façade. With 42 bays, we could break it down into a few options: two 21-bay modules, three 14-bay modules, six 7-bay modules, seven 6-bay modules, fourteen 3-bay modules and twenty-one 2-bay modules.
            </p>
            <p className="mb-4">
              Option E introduced variations in the 2-bay module, contributing to more interesting layouts. Instead of using the same 2-bay module, we could add some variations by mixing four different 2-bay models. See image below for some samples from Option E.
            </p>
            <img src="/Images/02_Panel Layout/Picture07.png" alt="Matplotlib graph showing samples from Option E" className="project-content-img" />
            <p className="mb-5 text-muted fst-italic text-center">Matplotlib graph showing samples from Option E</p>

            <h3 className="mb-3">Conclusion</h3>
            <p className="mb-4">
              The objective of this project is to determine optimized building façade layout options, incorporating performance requirements and aesthetic preferences. Through the analysis and the application of discrete mathematics, specifically combinations and probabilities, several valid layout options were explored and identified.
            </p>

            <h4 className="mb-3">Weakness, Limitations, Future Exploration</h4>
            <p className="mb-4">
              One of the major limitations encountered in this project was the computational feasibility of evaluating all possible combinations of façade layouts. Transitioning from 113 valid vertical options to a 42-bay façade layout, the sheer volume of permutations made it impractical to evaluate every option. In addition, the methods utilized provided valid directions but due to time constraint they do not cover all possible options.
            </p>
            <p className="mb-4">
              In addition, I began this project by dividing the building façade into vertical bays. However, another approach worth exploring would be to start the analysis by determining the window locations based on the requirements and then assigning different panels to the solid portions of the wall.
            </p>
            <p className="mb-4">
              In the future, I would like to learn more about computational methods or algorithms that can more efficiently generate, evaluate, and optimize large-scale options. The potential application of AI and machine learning could provide more innovative approaches to architectural design problems.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
