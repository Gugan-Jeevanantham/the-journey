import { motion } from "framer-motion";
import "./Answer.css";

function Answer() {
  return (
    <section className="answer">

      <div className="container answer__container">

        <motion.span
          className="answer__tag"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MY ANSWER
        </motion.span>

        <motion.h2
          className="answer__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          YOU ALREADY

          <br />
INSPIRED ME.        
</motion.h2>

        <motion.p
          className="answer__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
        >
          I never expected anything in return.

Sometimes...

meeting one person
is enough to inspire you
to create something
you never imagined building.
        </motion.p>

      </div>

    </section>
  );
}

export default Answer;