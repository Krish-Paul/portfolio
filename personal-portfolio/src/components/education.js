import React from 'react';

export const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-details">
          <div className="education-item">
            <h3>Institute of Engineering & Management,Kolkata</h3>
            <p>B.Tech, Computer Science</p>
            <p>Year of Graduation: 2025</p>
            <p>GPA: 9.01</p>
          </div>
          <div className="education-item">
            <h3>Delhi Public School,Ruby Park,Kolkata</h3>
            <p>CBSE XII, Computer Science</p>
            <p>Year of Graduation: 2021</p>
            <p>Marks: 87%</p>
          </div>
          <div className="education-item">
            <h3>St. James' School,Kolkata</h3>
            <p>ICSE X, Science</p>
            <p>Year of Graduation: 2019</p>
            <p>Marks: 89%</p>
          </div>
          {/* Add more education items as needed */}
        </div>
      </div>
    </section>
  );
}
