import React from 'react';
import './Section.css';

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a Python Django Developer based in Kozhikode, Kerala, with a strong passion for building 
              robust web applications and scalable backend systems. I hold a Bachelor's degree in Computer 
              Application from National College of Arts and Science, Calicut University.
            </p>
            <p>
              With hands-on experience in Django, Django REST Framework, and PostgreSQL, I specialize in 
              designing and implementing ERP and business management software solutions. I'm experienced in 
              building RESTful APIs, optimizing database performance, and managing production deployments 
              with Linux, Nginx, and server configuration.
            </p>
            <p>
              I thrive on writing clean, efficient code and continuously improving system performance 
              and reliability. Whether it's troubleshooting complex issues or architecting new features, 
              I bring a problem-solving mindset to every project I work on.
            </p>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image-placeholder">
              <span>MR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
