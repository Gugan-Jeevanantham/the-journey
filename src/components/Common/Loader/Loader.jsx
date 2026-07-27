import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 600);

          return 100;
        }

        return prev + 1;
      });
    }, 28);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="loader__background" />

        <motion.div
          className="loader__content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
  className="loader__logo"
  animate={{
    scale: [1, 1.12, 1],
  }}
  transition={{
    duration: 1.6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <svg
    width="90"
    height="90"
    viewBox="0 0 24 24"
    fill="#d6a46b"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
</motion.div>

          <h1 className="loader__title">
            THE JOURNEY
            <br />
            TO YOU
          </h1>

          <p className="loader__quote">
            EVERY BEAUTIFUL STORY BEGINS WITH A SINGLE CLICK
          </p>

          <div className="loader__progress">
            <div
              className="loader__progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <span className="loader__percentage">
            Loading<span className="loader__dots">...</span>
          </span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;