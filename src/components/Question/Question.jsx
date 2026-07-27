import { motion } from "framer-motion";
import "./Question.css";

function Question() {
  return (
<section
    id="question"
    className="question"
>
      <div className="container question__container">

        <motion.span
          className="question__tag"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ONE QUESTION
        </motion.span>

        <motion.h2
          className="question__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >
          IF SOMEONE QUIETLY MADE

          <br />
SOMETHINGS JUST FOR YOU       
</motion.h2>  

        <motion.p
          className="question__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
        >
          What would honestly
be your very first thought?
        </motion.p>

      </div>

    </section>
  );
}

export default Question;