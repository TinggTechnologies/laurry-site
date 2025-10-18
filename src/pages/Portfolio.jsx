import { useNavigate, useHover, BackgroundBlobs, Button, Logo, MainText, Particles, Text, MenuBar, WorkExperience } from './index';

function Portfolio() {
  const navigate = useNavigate();
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  const handleBackClick = () => navigate(-1);

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

            <div className="name-section slide-up" style={{ animationDelay: '1.2s' }}>
              <MainText text="Skills" />
            </div>

            <div className="description-section slide-up" style={{ animationDelay: '1.6s' }}>
              {['Excel', 'Power BI', 'SQL', 'Python', 'Tableau', 'Google Sheets'].map((skill, i) => (
                <Text key={i} text={`${i + 1}. ${skill}`} />
              ))}
            </div>

            <div className="description-section slide-up" style={{ animationDelay: '2.0s' }}>
              <WorkExperience />
            </div>

            <div className="button-section slide-up" style={{ animationDelay: '2.4s' }}>
              <div className="button-wrapper">
                <Button text="Go Back" click={handleBackClick} />
              </div>
            </div>
          </div>

          {isHovered && <div className="hover-glow"></div>}
        </div>
      </div>

      <div className="bottom-fade"></div>
    </div>
  );
}

export default Portfolio;
