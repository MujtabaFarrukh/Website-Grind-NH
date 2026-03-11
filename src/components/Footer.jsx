import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import logoImg from '../images/grind-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoImg} alt="The Grind Logo" style={{ width: '80px', height: 'auto', marginRight: '16px', filter: 'brightness(0) invert(1)' }} />
            <span>The Grind</span>
          </div>
          <p className="footer-desc">
            Your neighborhood coffee obsession. Specialty coffee, handcrafted drinks, and cozy vibes in New Hampshire.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/thegrindnh/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
            <a href="https://www.tiktok.com/@grindnh" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/thegrindnh/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">Our Story</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="https://tpgo.ca/bjfMhn" target="_blank" rel="noopener noreferrer">Order Online</a></li>
            <li><a href="https://app.squareup.com/gift/ML4FKKB8H0ZD4/order?utm_source=hoobe&utm_medium=social" target="_blank" rel="noopener noreferrer">Gift Cards</a></li>
          </ul>
        </div>

        <div className="footer-locations">
          <h3>Locations</h3>
          <a href="https://maps.google.com/?q=5+W+Broadway+Derry+NH" target="_blank" rel="noopener noreferrer" className="location-item" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
            <MapPin size={18} className="icon" style={{marginRight: '12px'}} />
            <div>
              <strong>Derry</strong>
              <p>5 W Broadway, Derry NH 03038</p>
            </div>
          </a>
          <a href="https://maps.google.com/?q=8+Jenkins+Court+Durham+NH" target="_blank" rel="noopener noreferrer" className="location-item" style={{textDecoration: 'none', color: 'inherit', display: 'flex'}}>
            <MapPin size={18} className="icon" style={{marginRight: '12px'}} />
            <div>
              <strong>Durham</strong>
              <p>8 Jenkins Court Suite 103, Durham NH 03824</p>
            </div>
          </a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <Phone size={18} className="icon" />
            <a href="tel:6034046250">603-404-6250</a>
          </div>
          <div className="contact-item">
            <Mail size={18} className="icon" />
            <a href="mailto:hello@nhgrind.com">hello@nhgrind.com</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} The Grind Coffee Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
