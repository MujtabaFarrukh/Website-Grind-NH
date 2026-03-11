import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import './Careers.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Careers = () => {
  const emailSubject = encodeURIComponent("Application for Barista Position");
  const emailBody = encodeURIComponent("Hello Grind Team,\n\nI am interested in applying for a position at your café. Please find attached my resume.\n\nBest regards,");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-transition"
    >
      <div className="careers-hero">
        <div className="container">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Join a fun team that loves coffee, creativity, and community.
          </motion.p>
        </div>
      </div>

      <section className="section">
        <div className="container form-container">
          <motion.div 
            className="careers-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="careers-text">
              <h2>We're Hiring Baristas</h2>
              <p>We are always looking for passionate people to join The Grind family. Whether you're an experienced barista or looking to learn the craft, we provide comprehensive training in coffee science, customer service, and café operations.</p>
              
              <div className="perks-list mt-4">
                <h3>Why join us?</h3>
                <ul>
                  <li>Competitive hourly pay + excellent tips</li>
                  <li>Free shift drinks and food discounts</li>
                  <li>Flexible scheduling (perfect for students)</li>
                  <li>A positive, inclusive work environment</li>
                  <li>Opportunities for growth and coffee education</li>
                </ul>
              </div>
            </div>

            <div className="careers-form-wrapper glass-dark hover-lift">
              <h3>Apply Now</h3>
              <p style={{ marginBottom: '24px', opacity: 0.9 }}>
                Ready to join the family? Send us your resume and a quick intro. We'd love to meet you!
              </p>
              
              <a 
                href={`mailto:hello@thegrindnh.com?subject=${emailSubject}&body=${emailBody}`}
                className="btn btn-primary w-100"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '16px' }}
              >
                Email Us Your Resume
                <Send size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;
