import React from 'react';
import Card from '../ui/Card';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Data Analysis Tools',
      icon: '📊',
      skills: [
        { name: 'Excel', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'SQL', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'Tableau', level: 80 },
        { name: 'Google Sheets', level: 90 }
      ]
    },
    {
      title: 'Core Competencies',
      icon: '🎯',
      skills: [
        { name: 'Data Storytelling', level: 90 },
        { name: 'Data Cleaning', level: 95 },
        { name: 'Data Visualization', level: 88 },
        { name: 'Exploratory Data Analysis', level: 85 },
        { name: 'Financial Analysis', level: 80 },
        { name: 'KPI Tracking', level: 85 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: '💡',
      skills: [
        { name: 'Communication', level: 92 },
        { name: 'Team Collaboration', level: 88 },
        { name: 'Problem Solving', level: 90 },
        { name: 'Business Strategy', level: 82 }
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-description">
            Comprehensive skill set in data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <Card key={index} className="skill-category-card">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

