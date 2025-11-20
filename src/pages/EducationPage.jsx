import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import './EducationPage.css';

export default function EducationPage() {
  const education = [
    {
      degree: "Higher National Diploma",
      field: "Pharmaceutical Technology",
      institution: "Moshood Abiola Polytechnic Abeokuta",
      grade: "Upper Credit",
      year: "2024",
      description: "Advanced studies in pharmaceutical technology with focus on quality control, analytical methods, and regulatory compliance."
    },
    {
      degree: "National Diploma",
      field: "Pharmaceutical Technology",
      institution: "Edo State Polytechnic Usen",
      grade: "Distinction",
      year: "2021",
      description: "Comprehensive foundation in pharmaceutical sciences, laboratory techniques, and pharmaceutical manufacturing processes."
    },
    {
      degree: "School Leaving Certificate",
      field: "WAEC",
      institution: "Pame Comprehensive College Senior",
      grade: "Passed",
      year: "2018",
      description: "Secondary education with strong performance in sciences and mathematics."
    }
  ];

  return (
    <PageLayout>
      <div className="education-page">
        <div className="education-container">
          <div className="page-header">
            <h1 className="page-title">Education</h1>
            <p className="page-subtitle">
              Academic background and qualifications
            </p>
          </div>

          <div className="education-timeline">
            {education.map((edu, index) => (
              <Card key={index} className="education-card">
                <CardHeader>
                  <div className="education-header">
                    <div className="education-main">
                      <h3 className="education-degree">{edu.degree}</h3>
                      <p className="education-field">{edu.field}</p>
                      <p className="education-institution">{edu.institution}</p>
                    </div>
                    <div className="education-meta">
                      <span className="education-year">{edu.year}</span>
                      <span className="education-grade">{edu.grade}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="education-description">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <Card className="additional-info-card">
            <CardContent>
              <h2 className="info-heading">How My Education Supports Data Analysis</h2>
              <div className="info-grid">
                <div className="info-item">
                  <div className="info-icon">🔬</div>
                  <h3>Analytical Thinking</h3>
                  <p>Pharmaceutical training developed strong analytical and critical thinking skills essential for data analysis.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">📊</div>
                  <h3>Quality Control</h3>
                  <p>Experience with quality assessment and validation translates directly to data quality and integrity.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">🎯</div>
                  <h3>Attention to Detail</h3>
                  <p>Pharmaceutical precision and accuracy requirements align perfectly with data analysis best practices.</p>
                </div>
                <div className="info-item">
                  <div className="info-icon">📈</div>
                  <h3>Research Methods</h3>
                  <p>Scientific research methodology provides a strong foundation for data-driven decision making.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageLayout>
  );
}

