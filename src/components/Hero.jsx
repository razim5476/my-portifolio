import React from 'react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name text-gradient">Muhammed Razim K.P.</h1>
          <h2 className="hero-role">Python Django Developer</h2>
          <p className="hero-description">
            Python Django Developer with 1 year of professional experience in designing, developing, 
            debugging, and deploying web applications. Skilled in building scalable backend systems, 
            RESTful APIs, and ERP solutions.
          </p>
          <div className="hero-meta">
            <span className="hero-meta-item"><MapPin size={16} /> Kozhikode, Kerala</span>
            <span className="hero-meta-item"><Phone size={16} /> +91 9846683055</span>
          </div>
          
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get In Touch <ArrowRight size={18} className="ml-2" />
            </a>
            <div className="hero-socials">
              <a href="https://github.com/razim5476" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FaGithub size={22} /></a>
              <a href="https://www.linkedin.com/in/razim-muhammed/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
              <a href="https://instagram.com/mrazim" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FaInstagram size={22} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
