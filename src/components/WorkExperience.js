import React from 'react';
import MainText from './mainText';
import SubText from './subText';
import Text from './text';
import '../assets/images/style.css'; // make sure this is imported for styles

export default function WorkExperience() {
  const experiences = [
    {
      company: "Deloitte",
      program: "Deloitte Data Analytics Virtual Internship",
      position: "Data Analyst Intern",
      date: "(May 2025)",
      details: [
        "Built interactive dashboard to present data audit insights.",
        "Participated in a simulated project on data governance and business analytics.",
        "Gained exposure to professional consulting workflows and client reporting."
      ]
    },
    {
      company: "Freelance",
      program: "Netflix Data Analytics (Remote)",
      position: "Data Analyst Intern",
      date: "(April 2025)",
      details: [
        "Built a dynamic dashboard with filters and visualizations to explore global content trends.",
        "Used ipywidgets and plotly in python to provide user-interactive storytelling.",
        "Filtered and visualized data by genre, release year, country and ratings to analyze trends.",
        "Hosted it on a local server and documented it with markdown and PDF."
      ]
    },
    {
      company: "Freelance",
      program: "Business Sales and HR Project (Remote)",
      position: "Data Analyst Intern",
      date: "(April 2025)",
      details: [
        "Cleaned and analyzed HR data using Excel functions, pivot tables and charts.",
        "Investigated employee trends (tenure, salary, department distribution) and reported findings.",
        "Automated data transformation using Power Query for reusability and efficiency."
      ]
    },
    {
      company: "Freelance",
      program: "Personal Finance KPI Project (Remote)",
      position: "Data Analyst Intern",
      date: "(April 2025)",
      details: [
        "Designed a dynamic Power BI dashboard using DAX measures for tracking savings, expenses and investments.",
        "Created KPIs like budget %, expense-income ratio.",
        "Enabled automated filtering by month and category aiding better budgeting decisions."
      ]
    },
    {
      company: "HNG Internship Program",
      program: "Tech Solutions",
      position: "Data Analyst Intern",
      date: "(March 2025)",
      details: [
        "Worked in a fast-paced, team-based environment to complete data analytics tasks.",
        "Used tools like Excel and SQL to clean and manipulate datasets.",
        "Participated in weekly evaluations and completed real-life business case studies.",
        "Presented findings in dashboards and reports to mentors and peers."
      ]
    },
    {
      company: "CognifyZ Technologies",
      program: "Tech Solutions",
      position: "Data Analyst Intern",
      date: "(Dec 2024)",
      details: [
        "Analyzed large datasets using Excel and Power Query, improving operational efficiency.",
        "Created visualizations and reports to simplify complex business insights.",
        "Analyzed financial and sales data to identify key business metrics and trends.",
        "Built visualizations with Power BI to communicate results effectively."
      ]
    }
  ];

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', paddingBottom: '1rem' }}>
        <MainText text="Work Experience" />
      </div>

      <div className="experience-scroll-container">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-header">
              <div>
                <SubText text={exp.program} />
                <SubText text={exp.position} />
                <Text text={exp.company} />
              </div>
              <div>
                <Text text={exp.date} />
              </div>
            </div>

            <div>
              {exp.details.map((item, i) => (
                <Text key={i} text={`• ${item}`} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint animation */}
      <div className="scroll-hint">
        <div className="scroll-arrow"></div>
        <p>Slide →</p>
      </div>
    </div>
  );
}
