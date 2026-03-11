import { motion } from 'framer-motion';
import './About.css';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-transition"
    >
      <div className="about-hero">
        <div className="about-hero-bg">
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000" alt="Coffee beans" />
        </div>
        <div className="about-hero-overlay"></div>
        <div className="container">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      <section className="section">
        <div className="container about-container">
          <motion.div 
            className="about-text-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2>Built on a Love for Great Coffee & Meaningful Connections</h2>
            <p className="lead-text">
              The Grind began as a community-focused coffee shop in downtown Derry, New Hampshire. It was born from a simple idea: that coffee should be an experience, not just a transaction.
            </p>
            <p>
              We wanted to create a space that felt like a second home. A place where the smell of freshly roasted espresso meets the warmth of neighborly conversation. From our carefully curated bean selection to the meticulous way we steam our milk, every detail matters to us.
            </p>
          </motion.div>

          <motion.div 
            className="about-image-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <div className="img-wrap"><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600" alt="Latte art pouring" /></div>
            <div className="img-wrap"><img src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600" alt="Barista smiling" /></div>
          </motion.div>

          <motion.div 
            className="about-text-block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2>Growing with Our Community</h2>
            <p>
              Today, The Grind proudly serves both our original locals in Derry and the vibrant student community from the University of New Hampshire over in Durham.
            </p>
            <p>
              Whether you are stopping by for one of our signature handcrafted lattes, a fresh breakfast sandwich, or just a quiet place to crack open a book, we're glad you're here. We believe in high-quality, specialty coffee delivered with warmth, speed, and care. 
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
