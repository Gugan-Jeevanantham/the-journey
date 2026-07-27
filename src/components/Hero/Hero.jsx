import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-scroll";
import "./Hero.css";

function Hero() {
const { scrollY } = useScroll();

const y = useTransform(scrollY, [0, 800], [0, 180]);

const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="hero">

      <motion.div
  className="hero__gradient"
  animate={{
    scale: [1, 1.15, 1],
    rotate: [0, 6, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      <motion.div
  className="hero__glow hero__glow--left"
  animate={{
    x: [-20, 20, -20],
    y: [-10, 10, -10],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
      <motion.div
  className="hero__glow hero__glow--right"
  animate={{
    x: [20, -20, 20],
    y: [10, -10, 10],
  }}
  transition={{
    duration: 11,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      <div className="hero__grid"></div>

      <div className="hero__noise"></div>

      <motion.div
        className="hero__container container"
        style={{
            y,
            opacity,
        }}
        >

        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >
          SOME PEOPLE ENTER OUR LIFE WITHOUT MAKING ANY NOISE
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .3,
            duration: 1
          }}
        >
          <motion.span
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ delay: .5 }}
            className="hero__line"
          >
            SOME PEOPLE BECOME
          </motion.span>

          <motion.span
            initial={{ y: 120 }}
            animate={{ y: 0 }}
            transition={{ delay: .8 }}
            className="hero__line"
          >
UNFORGETTABLE.
          </motion.span>

        </motion.h1>

        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 1
          }}
        >
          Sometimes we don't realize the exact day someone becomes important.

One conversation.

One smile.

One ordinary moment...

and suddenly, life feels a little different.
        </motion.p>

        <motion.div
          className="hero__buttonWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.7
          }}
        >

            
        

        <Link
  to="story"
  smooth={true}
  duration={1200}
  offset={-40}
>

  <button className="hero__button">

    <span>Continue Reading</span>

    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="2"
      />

      <path
        d="M8 7H17V16"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>

  </button>

</Link>

        </motion.div>


      </motion.div>

<div className="hero__scroll">

        <span></span>

        <small>SCROLL</small>

      </div>

    </section>
  );
}

export default Hero;