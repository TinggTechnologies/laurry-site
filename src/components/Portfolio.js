// Portfolio.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/image';
import MainText from '../components/mainText';
import SubText from './subText';
import Text from './text';
import Button from '../components/button';
import IconButton from '../components/iconButton';
import { BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import '../assets/images/style.css';

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
              <MainText text="LAURETTA OGBENNA" />
            </div>

            {/* Title */}
            <div className="title-section slide-up" style={{ animationDelay: '0.6s' }}>
              <SubText text="Data Analyst | Data Visualization" />
            </div>

            {/* Description */}
            <div className="description-section slide-up" style={{ animationDelay: '0.8s' }}>
              <Text text="Let's dive into data. From dashboards to deep insights, explore my work, connect with me, and stay updated across all platforms." />
            </div>

            {/* Portfolio button - Updated click handler */}
            <div className="button-section slide-up" style={{ animationDelay: '1s' }}>
              <div className="button-wrapper">
                <Button text="Go Back" click={handleBackClick} />
              </div>
            </div>

            {/* Social icons */}
            <div className="social-section fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="icon-wrapper">
                <IconButton Icon={BsInstagram} />
              </div>
              <div className="icon-wrapper" style={{ transitionDelay: '0.1s' }}>
                <IconButton Icon={BsLinkedin} />
              </div>
              <div className="icon-wrapper" style={{ transitionDelay: '0.2s' }}>
                <IconButton Icon={BsTwitterX} />
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