// src/components/SocialIcons.jsx
import IconButton from '../components/iconButton';
import { socialLinks } from '../Data/socialLinks';

export default function SocialIcons() {
  return (
    <div className="social-section fade-in" style={{ animationDelay: '1.2s' }}>
      {socialLinks.map(({ id, Icon, url }, index) => (
        <div key={id} className="icon-wrapper" style={{ transitionDelay: `${index * 0.1}s` }}>
          <IconButton Icon={Icon} url={url} />
        </div>
      ))}
    </div>
  );
}
