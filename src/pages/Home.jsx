import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../images/hero.png';
import gallery1 from '../images/gallery1.png';
import gallery2 from '../images/gallery2.png';
import gallery3 from '../images/gallery3.png';
import gallery4 from '../images/gallery4.png';
import gallery5 from '../images/gallery5.png';
import gallery6 from '../images/gallery6.png';
import gallery7 from '../images/gallery7.jpg';
import gallery8 from '../images/gallery8.jpg';
import logoImg from '../images/grind-logo.png';
import './Home.css';

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8
];

const drinks = [
  { name: 'NH Latte', desc: 'Maple & Salted Caramel Latte', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Churro Latte', desc: 'Caramel Latte with Vanilla & Cinnamon Bun Cold Foam', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800' },
  { name: 'Cookie Crush', desc: 'White Chocolate & Cookie Butter Latte', img: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&q=80&w=800' },
  { name: 'Beach Day', desc: 'Refreshing iced latte with coconut and vanilla', img: 'https://images.unsplash.com/photo-1461023058943-07cb1ce8db12?auto=format&fit=crop&q=80&w=800' }
];

const foods = [
  { name: 'Classic Chick', desc: 'Bacon or sausage egg & cheese', img: 'https://images.unsplash.com/photo-1525351484163-f5d81b3769c2?auto=format&fit=crop&q=80&w=800' },
  { name: 'Hot Chick', desc: 'Egg, sausage, jalapeños, cheese', img: 'https://images.unsplash.com/photo-1550507992-eb63ffee0224?auto=format&fit=crop&q=80&w=800' },
  { name: 'Avocado Toast', desc: 'Smashed avocado, cherry tomatoes, microgreens', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&q=80&w=800' }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Home = () => {
  return (
    <div className="page-transition">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-bg">
            <img src={heroImg} alt="Barista making coffee" />
          </div>
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <motion.img 
              src={logoImg} 
              alt="The Grind Logo" 
              className="hero-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            />
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Your Neighborhood<br />Coffee Obsession
            </motion.h1>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Specialty coffee, handcrafted drinks, and cozy vibes in New Hampshire.
            </motion.p>
            <motion.div 
              className="hero-buttons"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a href="https://app.squareup.com/gift/ML4FKKB8H0ZD4/order?utm_source=hoobe&utm_medium=social" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy a Gift Card</a>
            </motion.div>
          </div>
        </section>

        {/* Scrolling Gallery Section */}
        <section className="marquee-section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="section-title" style={{ marginBottom: "1rem" }}>In The Café</h2>
            </motion.div>
          </div>
          <div className="marquee-container mt-4">
            <div className="marquee-track">
              {galleryImages.map((img, index) => (
                <div key={index} className="marquee-item">
                  <img src={img} alt={`Gallery image ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
            <div className="marquee-track" aria-hidden="true">
              {galleryImages.map((img, index) => (
                <div key={`duplicate-${index}`} className="marquee-item">
                  <img src={img} alt={`Gallery image duplicate ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Text Ticker (Scrolling around X-axis) */}
        <section className="menu-ticker">
          <div className="ticker-track">
            {/* We map twice for seamless loop */}
            {[...drinks, ...foods, ...drinks, ...foods].map((item, index) => (
              <div key={index} className="ticker-item">
                <span className="ticker-name">{item.name}</span>
                <span className="ticker-dot">•</span>
              </div>
            ))}
          </div>
        </section>

        {/* Removed Menu Sections */}

        {/* Locations Section */}
        <section className="section locations-section">
          <div className="container">
            <motion.div 
              className="locations-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
            >
              <h2 className="section-title">Two Locations to Serve You</h2>
              <div className="locations-grid">
                <div className="location-card glass-dark hover-lift">
                  <MapPin className="loc-icon" size={32} />
                  <h3>Derry</h3>
                  <p className="loc-desc">Historic downtown coffee spot.</p>
                  <p className="loc-address">5 W Broadway,<br/>Derry NH 03038</p>
                  <div className="loc-hours" style={{ marginBottom: "24px", opacity: 0.9 }}>
                    <p style={{ margin: "4px 0" }}><strong>Mon–Fri:</strong> 6:00 AM – 3:00 PM</p>
                    <p style={{ margin: "4px 0" }}><strong>Sat:</strong> 8:00 AM – 2:00 PM</p>
                    <p style={{ margin: "4px 0" }}><strong>Sun:</strong> 9:00 AM – 2:00 PM</p>
                  </div>
                  <a href="https://maps.google.com/?q=5+W+Broadway+Derry+NH" target="_blank" rel="noreferrer" className="btn btn-secondary">Get Directions <ArrowRight size={16} style={{ marginLeft: "8px", verticalAlign: "middle" }} /></a>
                </div>
                <div className="location-card glass-dark hover-lift">
                  <MapPin className="loc-icon" size={32} />
                  <h3>Durham</h3>
                  <p className="loc-desc">Student favorite near UNH.</p>
                  <p className="loc-address">8 Jenkins Court Suite 103,<br/>Durham NH 03824</p>
                  <div className="loc-hours" style={{ marginBottom: "24px", opacity: 0.9 }}>
                    <p style={{ margin: "4px 0" }}><strong>Mon–Fri:</strong> 7:00 AM – 2:00 PM</p>
                    <p style={{ margin: "4px 0" }}><strong>Sat:</strong> 9:00 AM – 2:00 PM</p>
                    <p style={{ margin: "4px 0" }}><strong>Sun:</strong> 10:00 AM – 2:00 PM</p>
                  </div>
                  <a href="https://maps.google.com/?q=8+Jenkins+Court+Durham+NH" target="_blank" rel="noreferrer" className="btn btn-secondary">Get Directions <ArrowRight size={16} style={{ marginLeft: "8px", verticalAlign: "middle" }} /></a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community & Social Proof */}
        <section className="section community-section">
          <div className="container">
            <div className="community-content">
              <motion.div 
                className="community-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2>A Community Vibe</h2>
                <p>The Grind is a cozy local café that brings together students, locals, and coffee lovers. Whether you're studying for an exam, catching up with friends, or just need a beautifully crafted morning pick-me-up, our space is designed for you.</p>
                <Link to="/about" className="btn btn-secondary mt-3">Read Our Story</Link>
              </motion.div>
              <motion.div 
                className="social-feed gallery-mosaic"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <div className="social-header">
                   <h3>Featured Gallery</h3>
                </div>
                <div className="ig-grid">
                  <div className="ig-item"><img src={gallery1} alt="Gallery 1" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery2} alt="Gallery 2" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery3} alt="Gallery 3" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery4} alt="Gallery 4" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery5} alt="Gallery 5" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery6} alt="Gallery 6" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery7} alt="Gallery 7" loading="lazy" /></div>
                  <div className="ig-item"><img src={gallery8} alt="Gallery 8" loading="lazy" /></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section cta-section">
          <div className="cta-bg">
            <img src={gallery4} alt="Café interior" />
            <div className="cta-overlay"></div>
          </div>
          <div className="container center-text">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2>Start Your Morning at The Grind</h2>
              <div className="cta-buttons mt-4">
                <a href="https://app.squareup.com/gift/ML4FKKB8H0ZD4/order?utm_source=hoobe&utm_medium=social" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy a Gift Card</a>
                <a href="#locations" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector('.locations-section').scrollIntoView({ behavior: 'smooth' }); }}>Find a Location</a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Home;
