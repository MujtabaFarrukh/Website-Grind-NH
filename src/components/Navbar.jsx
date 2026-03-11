import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from '../images/grind-logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container glass-pill">
        <NavLink to="/" className="nav-logo" onClick={closeMobileMenu}>
          <img src={logoImg} alt="The Grind Logo" className="brand-logo" />
          <span>The Grind</span>
        </NavLink>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
          <NavLink to="/careers" onClick={closeMobileMenu}>Careers</NavLink>
          <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
        </div>

        <div className="nav-buttons">
          <a href="https://app.squareup.com/gift/ML4FKKB8H0ZD4/order?utm_source=hoobe&utm_medium=social" target="_blank" rel="noopener noreferrer" className="btn gift-card-btn" onClick={closeMobileMenu}>
            Gift Cards
          </a>
          <a href="https://tpgo.ca/bjfMhn" target="_blank" rel="noopener noreferrer" className="btn btn-primary order-btn" onClick={closeMobileMenu}>
            Order Now
          </a>
        </div>

        <div className="nav-actions">
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
