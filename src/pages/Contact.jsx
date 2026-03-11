import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-transition"
    >
      <div className="contact-hero">
        <div className="container">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We'd love to hear from you.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container contact-container">
          <motion.div 
            className="contact-info-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            {/* Reach Us */}
            <div className="contact-card glass-dark hover-lift">
              <div className="contact-icon-wrapper">
                <Phone size={28} />
              </div>
              <h3>Reach Us</h3>
              <p className="contact-desc">Questions? Give us a call or send an email.</p>
              <div className="contact-details">
                <a href="tel:6034046250" className="contact-link"><Phone size={18} /> 603-404-6250</a>
                <a href="mailto:hello@nhgrind.com" className="contact-link"><Mail size={18} /> hello@nhgrind.com</a>
              </div>
            </div>

            {/* Visit Us */}
            <div className="contact-card glass-dark hover-lift">
              <div className="contact-icon-wrapper">
                <MapPin size={28} />
              </div>
              <h3>Visit Us</h3>
              <p className="contact-desc">Two community-focused locations in NH.</p>
              <div className="contact-locations">
                <div className="loc-item">
                  <strong>Derry</strong>
                  <p>5 W Broadway, Derry NH 03038</p>
                </div>
                <div className="loc-item">
                  <strong>Durham</strong>
                  <p>8 Jenkins Court Suite 103, Durham NH 03824</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="contact-card glass-dark hover-lift">
              <div className="contact-icon-wrapper">
                <Instagram size={28} />
              </div>
              <h3>Follow Us</h3>
              <p className="contact-desc">Stay updated on new drinks and vibe checks.</p>
              <div className="social-links-lg">
                <a href="https://www.instagram.com/thegrindnh/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
                <a href="https://www.tiktok.com/@grindnh" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
                <a href="https://www.facebook.com/thegrindnh/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <motion.div 
          className="map-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Aesthetic map placeholder text instead of real embed for clean design */}
          <div className="map-placeholder glass">
             <MapPin size={48} style={{ color: 'var(--color-caramel)', marginBottom: '16px' }} />
             <h2>Find us on the map</h2>
             <div className="map-buttons">
               <a href="https://maps.google.com/?q=5+W+Broadway+Derry+NH" target="_blank" rel="noreferrer" className="btn btn-primary">Derry Map</a>
               <a href="https://maps.google.com/?q=8+Jenkins+Court+Durham+NH" target="_blank" rel="noreferrer" className="btn btn-secondary">Durham Map</a>
             </div>
          </div>
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000" alt="Map background abstract" className="map-bg-image" />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Contact;
