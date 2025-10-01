// Portfolio.js
import { useNavigate } from 'react-router-dom';

function Portfolio() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <p>Welcome to my portfolio page!</p>
      <p>Here you can showcase your data analysis projects, visualizations, and case studies.</p>
      
      {/* Add your portfolio content here */}
      <div className="projects-grid">
        {/* Your projects will go here */}
      </div>
      
      <button onClick={handleBackClick} className="back-button">
        Back to Home
      </button>
    </div>
  );
}

export default Portfolio;