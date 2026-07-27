import { motion } from "framer-motion";
import "./Finale.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
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

function Finale() {
  return (
    <section
  id="finale"
  className="finale"
>

      <motion.div
        className="container finale__container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.3,
        }}
      >

        <motion.span
          className="finale__tag"
          variants={itemVariants}
        >
          ONE LAST THING...
        </motion.span>

        <motion.h2
          className="finale__title"
          variants={itemVariants}
        >
          BEFORE YOU CLOSE THIS PAGE...
        </motion.h2>

        <motion.p
          className="finale__description"
          variants={itemVariants}
        >
          Thank you.

Not just for reading.

But for giving
a little piece
of your time.

Sometimes...

time is the most meaningful gift
someone can give.
        </motion.p>

        <motion.div
          className="finale__heart"
          variants={itemVariants}
          animate={{
            scale: [1, 1.18, 1],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>

        <motion.p
          className="finale__quote"
          variants={itemVariants}
        >
          "The most unforgettable people
are often the ones
who never realize
how special they are."
        </motion.p>

      </motion.div>

    </section>
  );
}

export default Finale;