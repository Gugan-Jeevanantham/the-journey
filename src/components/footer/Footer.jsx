import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <motion.h2
          className="footer__title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          THANK YOU
        </motion.h2>

        <motion.p
          className="footer__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >
          Every journey has an ending...
          but some endings are actually beautiful beginnings.
        </motion.p>

        <div className="footer__line"></div>

        <p className="footer__copyright">
          Made with ❤️ especially for someone who means a lot.
        </p>

      </div>

    </footer>
  );
}

export default Footer;