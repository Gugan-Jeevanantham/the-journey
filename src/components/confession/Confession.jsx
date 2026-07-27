import { motion } from "framer-motion";
import "./Confession.css";

function Confession() {
  return (
    <section className="confession">

      <div className="container confession__container">

        <motion.span
          className="confession__tag"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ONE HONEST TRUTH
        </motion.span>

        <motion.h2
          className="confession__title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I NEVER PLANNED
          <br />
TO CREATE
          <br />
SOMETHING LIKE THIS...
        </motion.h2>

        <motion.p
          className="confession__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
        >
          But sometimes...

meeting one person
unexpectedly...

inspires you
to do something
you've never done before.

Maybe this website
is simply
my quiet way of saying...

"You mattered."
        </motion.p>

      </div>

    </section>
  );
}

export default Confession;