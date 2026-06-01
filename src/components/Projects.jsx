import React from 'react';
import { ExternalLink, Server, Shield, CreditCard, Settings } from 'lucide-react';
import './Section.css';

const Projects = () => {
  const projects = [
    {
      title: 'Magnus Care ERP',
      company: 'Client Project — NEXCREST IT',
      description: 'A comprehensive ERP solution for business management with multiple integrated modules built using Django and Django REST Framework.',
      highlights: [
        'Implemented Loyalty Points system for customer retention and rewards tracking',
        'Built Warranty & Privileged Card system for product and service guarantees',
        'Developed Accounting module for financial management and reporting',
        'Created Service Transfer module for seamless inter-branch operations'
      ],
      tags: ['Python', 'Django', 'DRF', 'PostgreSQL', 'ERP']
    },
    {
      title: 'NEXERA ERP',
      company: 'Product — NEXCREST IT',
      description: 'NEXCREST\'s flagship ERP product — maintained, enhanced, and extended with new features to meet evolving customer requirements.',
      highlights: [
        'Maintained and improved the core ERP platform based on customer feedback',
        'Fixed bugs and implemented feature changes tailored to client needs',
        'Built subscription system for SaaS-based licensing and access control',
        'Integrated Razorpay payment gateway for seamless online payments',
        'Developed batch-wise inventory system with detailed reporting'
      ],
      tags: ['Python', 'Django', 'DRF', 'Razorpay', 'PostgreSQL']
    },
    {
      title: 'Hosting & DevOps',
      company: 'Infrastructure — NEXCREST IT',
      description: 'End-to-end deployment, server configuration, and CI/CD pipeline setup for production applications.',
      highlights: [
        'Deployed and hosted web applications on Linux servers',
        'Configured Nginx as reverse proxy for production environments',
        'Set up CI/CD pipelines using Jenkins for automated deployments',
        'Managed server administration, SSL certificates, and domain configuration'
      ],
      tags: ['Linux', 'Nginx', 'Jenkins', 'CI/CD', 'Deployment']
    }
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-company-label">{project.company}</p>
                <p className="project-description">{project.description}</p>
                <ul className="project-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
