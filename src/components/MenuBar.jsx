import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/images/style.css'; // or wherever your CSS lives

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="hamburger-container">
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {menuOpen && (
        <div className="menu-dropdown fade-in">
          <p onClick={() => handleNavigation('/')}>🏠 Home</p>
          <p onClick={() => handleNavigation('../projects')}>💼 Projects</p>
          <p onClick={() => handleNavigation('../portfolio')}>📊 Portfolio</p>
          <p onClick={() => handleNavigation('../contact')}>📩 Contact</p>
          <p onClick={() => handleNavigation('../about')}>👤 About</p>
          <p onClick={() => handleNavigation('../language')}>🌍 Language </p>
          <p onClick={() => handleNavigation('../education')}>🎓 Education </p>
        </div>
      )}
    </div>
  );
}
