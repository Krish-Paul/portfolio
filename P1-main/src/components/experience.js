import React from 'react';
import './Experience.css'; // Make sure to create this CSS file

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-content">
              <h3 className="company">Freelancing</h3>
              <p className="position">Project Facilitator</p>
              <p className="duration">January 2024 - Present</p>
              <ul className="responsibilities">
  <li>
    <p>
      As a Project Facilitator, I assist in completing projects, ensuring timely and quality delivery. I provide guidance and support to achieve project goals efficiently.
    </p>
  </li>
  <li>Services I offer:</li>
  <ul>
    <li>AI/ML project development and support</li>
    <li>Data analysis and analytical reporting</li>
    <li>Completion of college assignments and projects</li>
  </ul>
</ul>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-content">
              <h3 className="company">RecruitNXT</h3>
              <p className="position">Subject Matter Intern</p>
              <p className="duration">June 2023 - October 2023</p>
              <ul className="responsibilities">
                <li>Designed Skill-Assessment Questions to effectively evaluate users' programming skills and conceptual understanding.</li>
                <li>Enhanced Evaluation Frameworks by creating targeted questions that accurately measure knowledge and proficiency.</li>
                <li>Contributed to a higher level of user interaction by crafting relevant and challenging questions that encourage active participation and learning.</li>
              </ul>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-content">
              <h3 className="company">Giga Youth Continuum</h3>
              <p className="position">Data Intern</p>
              <p className="duration">April 2023 - July 2023</p>
              <ul className="responsibilities">
                <li>Leveraged web scraping frameworks like BeautifulSoup and Selenium using Python, substantially boosting data collection efficiency up to 10%.</li>
                <li>Utilized Chrome Web driver to automate data retrieval processes, significantly minimizing manual effort.</li>
                <li>Harnessed the lxml parser for HTML Parsing, enhancing data accuracy by 20%.</li>
                <li><a href="https://drive.google.com/file/d/1TK7gwFXwB4T7OT7w98x0LvvU-JTvi14Y/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="lor-link">Letter of Recommendation</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}