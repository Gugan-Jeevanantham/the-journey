import { motion, AnimatePresence } from "framer-motion";
import "./ResponseModal.css";

function ResponseModal({ open, onClose, responseType }) {
  const isYes = responseType === "yes";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="response"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="response__card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {isYes ? (
              <>
                <h2>That Means A Lot ❤️</h2>

                <p>
                  Thank you.

If this page
made you smile
even for a moment...

then every hour
spent creating it
was completely worth it.
                </p>
              </>
            ) : (
              <>
                <h2>Take Your Time 🌸</h2>

                <p>
                  Beautiful things
never need to be rushed.

Thank you
for reaching
the final page.
                </p>
              </>
            )}

            <button onClick={onClose}>
              Close
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponseModal;