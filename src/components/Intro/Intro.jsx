import { motion } from "framer-motion";
import "./Intro.css";

const sentences = [
  "Some people...",
  "Walk into our lives...",
  "Without asking.",
  "Yet somehow...",
  "They change everything.",
];

function Intro({ onBegin }) {
  return (
    <section className="intro">

      <div className="intro__overlay"></div>

      <div className="intro__content">

        {sentences.map((text, index) => (
          <motion.p
            key={index}
            className="intro__text"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 1.2,
            }}
          >
            {text}
          </motion.p>
        ))}

        <motion.button
          className="intro__button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 6.5,
            duration: 1,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .97,
          }}
          onClick={onBegin}
        >
          Begin The Journey
        </motion.button>

      </div>

    </section>
  );
}

export default Intro;