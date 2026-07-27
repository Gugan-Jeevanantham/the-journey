import { motion } from "framer-motion";
import "./Letter.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Letter() {
  return (
    <section
  id="letter"
  className="letter"
>

      <div className="container">

        <motion.div
          className="letter__box"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >

          <motion.span
            className="letter__tag"
            variants={itemVariants}
          >
            CHAPTER THREE
          </motion.span>

          <motion.h2
            className="letter__title"
            variants={itemVariants}
          >
            SOME WORDS

            <br />
            I NEVER SAID
          </motion.h2>

          <motion.p
            className="letter__text"
            variants={itemVariants}
          >
            There are thoughts we never say aloud,
not because we're afraid...

but because some people deserve honesty,
not hurry.
          </motion.p>

          <motion.p
            className="letter__text"
            variants={itemVariants}
          >
            You probably have no idea
how effortlessly you became
a part of my everyday thoughts.
          </motion.p>

          <motion.p
            className="letter__text"
            variants={itemVariants}
          >
            This page isn't asking
for an answer.

It's simply saying...

thank you for existing.
          </motion.p>

        </motion.div>

      </div>

    </section>
  );
}

export default Letter;