import React from 'react';
import './Loader.css';

export default function Loader() {
  const name = "LAURETTA OGBENNA";
  const letters = name.split('');

  return (
    <div className="loader-overlay">
      <div className="loader-content">
        <div className="loader-name">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`loader-letter ${letter === ' ' ? 'space' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        <div className="loader-subtitle">Data Analyst</div>
        <div className="loader-spinner">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
        </div>
      </div>
    </div>
  );
}

