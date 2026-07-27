import { motion } from "framer-motion";
import "./Proposal.css";
import { Link } from "react-scroll";

function Proposal() {
  return (
    <section
  id="proposal"
  className="proposal"
>

      <div className="container">

        <motion.div
          className="proposal__content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <span className="proposal__tag">
            FINAL CHAPTER
          </span>

          <h2 className="proposal__title">
SOMETIMES...            
<br />
THE MOST BEAUTIFUL THINGS
            <br />
ARE NEVER PLANNED.
          </h2>

          <p className="proposal__text">
            Life has a strange way
of introducing people.

Without asking.

Without warning.

Yet somehow...
everything feels a little different afterwards.
          </p>

          <p className="proposal__text">
            This website wasn't created
to impress anyone.

It was created because
some people quietly become
worth remembering.
          </p>

          <Link
  to="question"
  smooth={true}
  duration={1200}
  offset={-60}
>
  <motion.button
    className="proposal__button"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
  >
One Last Page
  </motion.button>
</Link>

        </motion.div>

      </div>

    </section>
  );
}

export default Proposal;