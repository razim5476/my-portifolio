import React from 'react';
import './Section.css';

const Skills = () => {
  const skills = [
    'Python', 'Django', 'Django REST Framework', 'JavaScript',
    'HTML5 / CSS3', 'Bootstrap', 'PostgreSQL', 'REST APIs',
    'Git / GitHub', 'Linux', 'Nginx', 'Server Configuration',
    'Deployment & Hosting', 'ERP Development', 'Database Design',
    'Database Optimization', 'Debugging', 'Software Testing'
  ];

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-icon">⚡</span>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
