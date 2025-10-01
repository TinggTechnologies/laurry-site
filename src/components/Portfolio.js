// Portfolio.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/image';
import MainText from '../components/mainText';
import Text from './text';
import Button from '../components/button';
import '../assets/images/style.css';
import WorkExperience from './WorkExperience';

function Portfolio() {
   const [isHovered, setIsHovered] = useState(false); 
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

 

  return (
    <div className="intro-container">
      {/* Animated background elements */}
      <div className="background-overlay">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      {/* Floating particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div className="content-wrapper">
        <div className="content-container">
          {/* Logo section */}
          <div className="logo-section fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="logo-wrapper">
              <Logo />
            </div>
          </div>

          {/* Main content card */}
          <div 
            className={`content-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Name */}
            <div className="name-section slide-up" style={{ animationDelay: '0.4s' }}>
              <MainText text="Professional Summary" />
            </div>

            {/* Description */}
            <div className="description-section slide-up" style={{ animationDelay: '0.8s' }}>
              <Text text="Detail-oriented and results-driven Data Analyst with a strong background in
pharmaceutical technology and a passion for deriving insights that inform business
strategy and financial literacy." />
<Text text="Experienced in leveraging Excel, SQL, Power BI, and
Python to analyze data, design dashboards, and drive data-backed decisions. Strong
communicator with a multi-disciplinary edge, spanning business operations, content
creation, and community engagement." />
            </div>

              {/* Name */}
              <div className="name-section slide-up" style={{ animationDelay: '1.2s' }}>
              <MainText text="Skills" />
            </div>

            {/* Description */}
            <div className="description-section slide-up" style={{ animationDelay: '0.8s' }}>
              <Text text="1. Excel" />
              <Text text="2. Power BI" />
              <Text text="3. SQL" />
              <Text text="4. Python" />
              <Text text="5. Tableau" />
              <Text text="6. Google Sheets" />
            </div>

            <WorkExperience />

            <div className="button-section slide-up" style={{ animationDelay: '1s' }}>
              <div className="button-wrapper">
                <Button text="Go Back" click={handleBackClick} />
              </div>
            </div>

          </div>

          {/* Decorative glow effect on hover */}
          {isHovered && <div className="hover-glow"></div>}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="bottom-fade"></div>
    </div>
  );
}

export default Portfolio;