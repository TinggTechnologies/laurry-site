// src/pages/Intro.jsx
import { useNavigate } from 'react-router-dom';
import useHover from '../hooks/useHover';

import { BackgroundBlobs, Button, Logo, MainText, Particles, SocialIcons, SubText, Text } from './index';

import '../assets/images/style.css';

function Intro() {
  const navigate = useNavigate();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  return (
    <div className="intro-container">
      <BackgroundBlobs />
      <Particles />

      <div className="content-wrapper">
        <div className="content-container">
          {/* Logo */}
          <div className="logo-section fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="logo-wrapper">
              <Logo />
            </div>
          </div>

          {/* Content Card */}
          <div
            className={`content-card ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="name-section slide-up" style={{ animationDelay: '0.4s' }}>
              <MainText text="LAURETTA OGBENNA" />
            </div>

            <div className="title-section slide-up" style={{ animationDelay: '0.6s' }}>
              <SubText text="Data Analyst | Data Visualization" />
            </div>

            <div className="description-section slide-up" style={{ animationDelay: '0.8s' }}>
              <Text text="Let's dive into data. From dashboards to deep insights, explore my work, connect with me, and stay updated across all platforms." />
            </div>

            <div className="button-section slide-up" style={{ animationDelay: '1s' }}>
              <div className="button-wrapper">
                <Button text="My Portfolio" click={handlePortfolioClick} />
              </div>
            </div>

            <SocialIcons />
          </div>

          {isHovered && <div className="hover-glow"></div>}
        </div>
      </div>

      <div className="bottom-fade"></div>
    </div>
  );
}

export default Intro;
