import { useState } from 'react';
import { useNavigate, useHover, BackgroundBlobs, Button, Logo, MainText, Particles, Text, MenuBar, WorkExperience } from './index';

function Portfolio() {
  const navigate = useNavigate();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const handleBackClick = () => navigate(-1);

  // ---------------- Pagination Logic ----------------
  const techSkills = [
    'Data Storytelling',
    'Data Cleaning',
    'Quality Assessment',
    'Data Wrangling',
    'MS Word',
    'MS Power-point',
    'Data Visualization',
    'Google Data Analytics',
    'Professional Certificate',
    'Accenture & Forage Training',
    'Exploratory Data Analysis',
    'Financial Analysis',
    'Business Strategy',
    'Communication',
    'Team Collaboration',
    'KPI Tracking',
    'Plotly',
    'Google Colab',
    'Data for Health and Climate Africa Certificate',
    'Deloitte Internship Certificate',
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(techSkills.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentItems = techSkills.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  // --------------------------------------------------

  return (
    <div className="intro-container">
      <BackgroundBlobs />
      <Particles />
      <MenuBar />

      {/* Main content */}
      <div className="content-wrapper">
        <div className="content-container">
          {/* Logo */}
          <div className="logo-section fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="logo-wrapper">
              <Logo />
            </div>
          </div>

          {/* Main card */}
          <div
            className={`content-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >

            {/* SKILLS */}
            <div className="name-section slide-up" style={{ animationDelay: '1.2s' }}>
              <MainText text="Skills" />
            </div>

            <div className="description-section slide-up" style={{ animationDelay: '1.6s' }}>
              {['Excel', 'Power BI', 'SQL', 'Python', 'Tableau', 'Google Sheets'].map((skill, i) => (
                <Text key={i} text={`${i + 1}. ${skill}`} />
              ))}
            </div>

            {/* WORK EXPERIENCE */}
            <div className="description-section slide-up" style={{ animationDelay: '2.0s' }}>
              <WorkExperience />
            </div>

            {/* TECHNOLOGIES */}
            <div className="name-section slide-up" style={{ animationDelay: '2.4s' }}>
              <MainText text="Technologies, Certificates and Skills" />
            </div>

            <div className="description-section slide-up" style={{ animationDelay: '2.8s' }}>
              {currentItems.map((skill, i) => (
                <Text key={i} text={`${startIndex + i + 1}. ${skill}`} />
              ))}

              {/* Pagination buttons */}
              <div className="pagination-buttons">
                <Button
                  text="Previous"
                  click={handlePrev}
                  disabled={currentPage === 0}
                />
                <span style={{ color: '#ccc', margin: '0 1rem' }}>
                  Page {currentPage + 1} of {totalPages}
                </span>
                <Button
                  text="Next"
                  click={handleNext}
                  disabled={currentPage === totalPages - 1}
                />
              </div>
            </div>

            {/* BACK BUTTON */}
            <div className="button-section slide-up" style={{ animationDelay: '3.0s' }}>
              <div className="button-wrapper">
                <Button text="Go Back" click={handleBackClick} />
              </div>
            </div>
          </div>

          {/* Glow effect */}
          {isHovered && <div className="hover-glow"></div>}
        </div>
      </div>

      <div className="bottom-fade"></div>
    </div>
  );
}

export default Portfolio;
