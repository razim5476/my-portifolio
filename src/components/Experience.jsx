import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import './Section.css';

const Experience = () => {
  const workExperience = [
    {
      title: 'Junior Python Developer',
      company: 'NEXCREST IT',
      period: 'April 2025 — Present',
      highlights: [
        'Developed and maintained scalable web applications using Python and Django',
        'Built REST APIs using Django REST Framework for frontend and third-party integrations',
        'Designed and implemented ERP and business management software solutions',
        'Optimized database performance through efficient query design and data modeling',
        'Performed debugging, testing, and issue resolution across development and production environments',
        'Managed application deployments, Nginx configuration, and Linux server administration',
        'Collaborated with stakeholders to analyze requirements and deliver software enhancements',
        'Utilized Git for version control and participated in code reviews and team activities',
        'Ensured application security, performance, and reliability through continuous monitoring'
      ]
    },
    {
      title: 'Python Django Intern',
      company: 'One Team Solutions',
      period: 'May 2024 — November 2024',
      highlights: [
        'Developed web application features using Python and Django',
        'Created responsive frontend interfaces using HTML, CSS, JavaScript, and Bootstrap',
        'Built REST APIs and assisted in backend development using Django REST Framework',
        'Worked with MySQL databases for data storage and retrieval',
        'Debugged and fixed application issues under senior developer guidance',
        'Collaborated with team members using Git and GitHub',
        'Assisted in application deployment, testing, and maintenance',
        'Participated in Agile development processes and project discussions'
      ]
    }
  ];

  const education = {
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'National College of Arts and Science — Puliyavu',
    university: 'Calicut University',
    period: 'June 2021 — March 2024'
  };

  return (
    <section className="section bg-secondary" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="timeline">
          {workExperience.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={18} />
              </div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-title">{job.title}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">
                    <Calendar size={14} /> {job.period}
                  </span>
                </div>
                <ul className="timeline-highlights">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title" style={{ marginTop: '4rem' }}>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <GraduationCap size={18} />
            </div>
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-title">{education.degree}</h3>
                  <p className="timeline-company">{education.institution}</p>
                  <p className="timeline-university">{education.university}</p>
                </div>
                <span className="timeline-period">
                  <Calendar size={14} /> {education.period}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
