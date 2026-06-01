import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Section.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always open to new opportunities and collaborations. Whether you have a project in mind, 
            a question, or just want to say hi — feel free to reach out!
          </p>
          
          <div className="contact-details">
            <a href="mailto:razimmuhammed8055@gmail.com" className="contact-detail-item">
              <Mail size={20} />
              <span>razimmuhammed8055@gmail.com</span>
            </a>
            <a href="tel:+919846683055" className="contact-detail-item">
              <Phone size={20} />
              <span>+91 9846683055</span>
            </a>
            <span className="contact-detail-item">
              <MapPin size={20} />
              <span>Kozhikode, Kerala, India</span>
            </span>
          </div>

          <a href="mailto:razimmuhammed8055@gmail.com" className="btn btn-primary contact-btn">
            <Mail size={18} className="mr-2" /> Say Hello
          </a>

          <div className="contact-socials">
            <a href="https://github.com/razim5476" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub"><FaGithub size={22} /></a>
            <a href="https://www.linkedin.com/in/razim-muhammed/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><FaLinkedin size={22} /></a>
            <a href="https://instagram.com/mrazim" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram"><FaInstagram size={22} /></a>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Muhammed Razim K.P. Built with React.</p>
      </footer>
    </section>
  );
};

export default Contact;
