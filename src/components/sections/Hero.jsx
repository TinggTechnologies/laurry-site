import { BsArrowRight, BsDownload } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const handleDownloadResume = () => {
    // Open the resume PDF in a new tab
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for Opportunities
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Lauretta Ogbenna</span>
          </h1>

          <h2 className="hero-subtitle">
            Data Analyst | Transforming Data into Actionable Insights
          </h2>

          <p className="hero-description">
            Detail-oriented and results-driven Data Analyst with expertise in Excel, SQL, 
            Power BI, and Python. I specialize in analyzing complex datasets, designing 
            interactive dashboards, and driving data-backed business decisions.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Tools Mastered</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Commitment</div>
            </div>
          </div>

          <div className="hero-actions">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => navigate('/portfolio')}
              icon={<BsArrowRight />}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="large"
              onClick={handleDownloadResume}
              icon={<BsDownload />}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <img 
              src={require('../../assets/images/user.png')} 
              alt="Lauretta Ogbenna" 
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

