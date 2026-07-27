import { motion } from "framer-motion";
import "./Story.css";

function Story() {
  return (
<section
  id="story"
  className="story"
>
      <div className="story__container container">

        <motion.span
          className="story__tag"
          initial={{
  opacity: 0,
  y: 80
}}

whileInView={{
  opacity: 1,
  y: 0
}}

viewport={{
  once: true,
  amount: 0.35
}}

transition={{
  duration: 1,
  ease: "easeOut"
}}
        >
          CHAPTER ONE
        </motion.span>

        <motion.h3
          className="story__title"
          initial={{
  opacity: 0,
  y: 60
}}

whileInView={{
  opacity: 1,
  y: 0
}}

viewport={{
  once: true
}}

transition={{
  duration: .9,
  delay: .15
}}
        >
          SOME STORIES
DON'T REALLY BEGIN.
          <br />
          THEY JUST
BECOME HOME.
        </motion.h3>

        <motion.p
          className="story__description"
          initial={{
  opacity: 0,
  y: 45
}}

whileInView={{
  opacity: 1,
  y: 0
}}

viewport={{
  once: true
}}

transition={{
  duration: .9,
  delay: .35
}}
        >
          I don't remember the exact moment.

Maybe it was a conversation.

Maybe it was a smile.

Maybe it was simply the comfort of knowing you existed.
        </motion.p>

      </div>

    </section>
  );
}

export default Story;