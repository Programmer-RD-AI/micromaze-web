import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/components/Intro.css";

const Intro = () => {
  useEffect(() => {
    const counters = document.querySelectorAll(".intro-stat-number");

    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-target"), 10);
      let count = 0;
      const increment = Math.ceil(target / 100); // Increment value

      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.textContent = count + "+";
      }, 30); // Update interval
    });
  }, []);

  return (
    <div className="intro-container">
      <motion.div
        className="intro-overlay"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="intro-title-container">
          <motion.h1
            className="intro-title"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Build Develop Conquer Build Develop Conquer Build Develop Conquer
            Build Develop Conquer
          </motion.h1>
        </div>
        <motion.div
          className="intro-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="intro-stat-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="intro-stat-number" data-target="100">
              0
            </h2>
            <p className="intro-stat-text">Teams Participated</p>
          </motion.div>
          <motion.div
            className="intro-stat-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="intro-stat-number" data-target="500">
              0
            </h2>
            <p className="intro-stat-text">Robots Designed</p>
          </motion.div>
          <motion.div
            className="intro-stat-card"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="intro-stat-number" data-target="50">
              0
            </h2>
            <p className="intro-stat-text">Awards Won</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
