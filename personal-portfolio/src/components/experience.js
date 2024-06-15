import React from 'react';

export const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-details">
          <div className="experience-item">
            <h3>Giga Youth Continuum</h3>
            <p>Data Intern</p>
            <p>April 2023 - July 2023</p>
            <p>• Leveraged web scraping frameworks like BeautifulSoup and Selenium using Python, substantially boosting data collection
efficiency upto 10%.</p>
<p>• Utilized Chrome Web driver to automate data retrieval processes, significantly minimizing manual effort.</p>
<p>• Harnessed the lxml parser for HTML Parsing, enhancing data accuracy by 20%.</p>
          </div>
          <div className="experience-item">
            <h3>RecruitNXT</h3>
            <p>Subject Matter Intern</p>
            <p>June 2023 - October 2023</p>
            <p>Designed Skill-Assessment Questions to effectively evaluate users’ programming skills and conceptual understanding.</p>
            <p>Enhanced Evaluation Frameworks by creating targeted questions that accurately measure knowledge and proficiency.</p>
            <p>Contributed to a higher level of user interaction by crafting relevant and challenging questions that encourage active
            participation and learning.</p>
          </div>
          <div className="experience-item">
            <h3>Freelancing</h3>
            <p></p>
            <p>January 2024 - present</p>
            <p>Capitalized on expertise in analyzing and interpreting data, delivering invaluable insights to clients.</p>
            <p>Conducted Reliability Analysis, ensuring a consistency and accuracy of more than 0.9, of the collected data.</p>
            <p>Implemented Factor Analysis, unveiling underlying patterns and structures, offering a comprehensive understanding of
            data dynamics.</p>
            
          </div>
          
          {/* Add more experience items as needed */}
        </div>
      </div>
    </section>
  );
}