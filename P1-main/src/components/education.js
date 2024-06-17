import React from 'react';
import './Education.css'; // Make sure to create this CSS file

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Educational Journey</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="education-content">
              <h3 className="institution">Institute of Engineering & Management, Kolkata</h3>
              <p className="degree">B.Tech, Computer Science</p>
              <p className="year">Expected Graduation: 2025</p>
              <p className="grade">GPA: 9.01</p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-content">
              <h3 className="institution">Delhi Public School, Ruby Park, Kolkata</h3>
              <p className="degree">CBSE XII, Computer Science</p>
              <p className="year">Graduated: 2021</p>
              <p className="grade">Score: 87%</p>
            </div>
          </div>
          <div className="education-item">
            <div className="education-content">
              <h3 className="institution">St. James' School, Kolkata</h3>
              <p className="degree">ICSE X, Science</p>
              <p className="year">Graduated: 2019</p>
              <p className="grade">Score: 89%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}