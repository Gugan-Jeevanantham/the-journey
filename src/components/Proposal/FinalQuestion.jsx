import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import "./FinalQuestion.css";
import ResponseModal from "./ResponseModal";

function FinalQuestion() {
    const [open, setOpen] = useState(false);
const [responseType, setResponseType] = useState("");
  return (
    <section className="final-question">

      <div className="container">

        <motion.div
          className="final-question__content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="final-question__tag">
            JUST A LITTLE CURIOSITY...
          </span>

          <h2 className="final-question__title">
          AFTER READING EVERYTHING... 
            <br />
            WHAT WAS YOUR FIRST THOUGHT?
          </h2>

          <p className="final-question__text">
            There is no right answer.

I'm simply curious...

what crossed your mind
while reading this journey?
          </p>

          <div className="final-question__buttons">

            <button
  className="btn btn--yes"
  onClick={() => {
    setResponseType("yes");
    setOpen(true);
  }}
>

<>
  <FaHeart />
  <span>😊 It Made Me Smile</span>
  <span className="btn__glow"></span>
</>

  <span className="btn__glow"></span>

</button>

<button
  className="btn btn--later"
  onClick={() => {
  setResponseType("later");
  setOpen(true);
}}
>
  <>
    <BsStars />
    <span>🌸 I'll Think About It</span>
  </>
</button>

          </div>

        </motion.div>

      </div>
    <ResponseModal
  open={open}
  responseType={responseType}
  onClose={() => setOpen(false)}
/>
    </section>
  );
}

export default FinalQuestion;