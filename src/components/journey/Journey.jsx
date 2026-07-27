import { motion } from "framer-motion";
import "./Journey.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Journey() {
  return (
    <section
  id="journey"
  className="journey"
>

      <div className="container">

        <motion.div
          className="journey__header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="journey__tag">
            CHAPTER TWO
          </span>

          <h2 className="journey__title">
            IT WAS NEVER ABOUT
            <br />
            BIG MOMENTS.
          </h2>
        </motion.div>

        <motion.div
          className="journey__timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >

          <motion.div
            className="journey__card"
            variants={cardVariants}
          >
            <span>01</span>

            <h3>The First Conversation</h3>

            <p>
              I didn't know that such a simple conversation would stay in my mind for so long.
            </p>
          </motion.div>

          <motion.div
            className="journey__card"
            variants={cardVariants}
          >
            <span>02</span>

            <h3>Waiting For Replies</h3>

            <p>
              Sometimes a small reply can brighten an entire day.
            </p>
          </motion.div>

          <motion.div
            className="journey__card"
            variants={cardVariants}
          >
            <span>03</span>

            <h3>Something Changed</h3>

            <p>
              Without planning it... someone quietly became important.
            </p>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Journey;