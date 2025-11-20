import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import './PortfolioPage.css';

export default function PortfolioPage() {
  const workExperience = [
    {
      company: "Deloitte",
      program: "Deloitte Data Analytics Virtual Internship",
      position: "Data Analyst Intern",
      date: "May 2025",
      details: [
        "Built interactive dashboard to present data audit insights",
        "Participated in simulated project on data governance and business analytics",
        "Gained exposure to professional consulting workflows and client reporting"
      ]
    },
    {
      company: "Accenture",
      program: "Accenture Data Analytics and Visualization Virtual Internship",
      position: "Data Analyst Intern",
      date: "April 2025",
      details: [
        "Analyzed client datasets to identify trends and actionable insights",
        "Created data visualizations to communicate findings to stakeholders",
        "Developed skills in data cleaning, modeling, and storytelling"
      ]
    },
    {
      company: "Forage",
      program: "Data for Health and Climate Africa Program",
      position: "Data Analyst Trainee",
      date: "March 2025",
      details: [
        "Worked on real-world datasets related to health and climate challenges",
        "Applied statistical methods and visualization techniques",
        "Collaborated with peers on data-driven solutions for social impact"
      ]
    }
  ];

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "Accenture & Forage Training Certificate",
    "Data for Health and Climate Africa Certificate",
    "Deloitte Internship Certificate",
    "Microsoft Excel Advanced Certification"
  ];

  const technicalSkills = [
    "Data Storytelling",
    "Data Cleaning & Wrangling",
    "Quality Assessment",
    "Data Visualization",
    "Exploratory Data Analysis (EDA)",
    "Financial Analysis",
    "Business Strategy",
    "KPI Tracking",
    "Plotly",
    "Google Colab",
    "MS Word & PowerPoint"
  ];

  return (
    <PageLayout>
      <div className="portfolio-page">
        <div className="portfolio-container">
          <div className="page-header">
            <h1 className="page-title">Portfolio</h1>
            <p className="page-subtitle">
              Professional experience, certifications, and technical expertise
            </p>
          </div>

          {/* Work Experience Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Work Experience</h2>
            <div className="experience-grid">
              {workExperience.map((exp, index) => (
                <Card key={index} className="experience-card">
                  <CardHeader>
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-position">{exp.position}</h3>
                        <p className="experience-company">{exp.company}</p>
                        <p className="experience-program">{exp.program}</p>
                      </div>
                      <span className="experience-date">{exp.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="experience-details">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Certifications</h2>
            <Card className="certifications-card">
              <CardContent>
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <span className="cert-icon">🏆</span>
                      <span className="cert-name">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Technical Skills Section */}
          <section className="portfolio-section">
            <h2 className="section-heading">Technical Skills & Competencies</h2>
            <Card className="skills-card">
              <CardContent>
                <div className="skills-tags">
                  {technicalSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

