import { BsEnvelope, BsLinkedin } from 'react-icons/bs';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <BsLinkedin />,
      url: 'https://linkedin.com/in/lauretta-ogbenna',
      label: 'LinkedIn'
    },
    {
      icon: <BsEnvelope />,
      url: 'mailto:izedonwenogbennalauretta@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="professional-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Lauretta Ogbenna</h3>
            <p>Data Analyst | Turning Data into Insights</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Lauretta Ogbenna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

