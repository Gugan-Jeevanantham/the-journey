import Hero from "../../components/hero/Hero";
import Story from "../../components/story/Story";
import Journey from "../../components/journey/Journey";
import Letter from "../../components/letter/Letter";
import Proposal from "../../components/proposal/Proposal";
import Question from "../../components/question/Question";
import Answer from "../../components/answer/Answer";
import Confession from "../../components/confession/Confession";
import Finale from "../../components/finale/Finale";
import Footer from "../../components/footer/Footer";
import FinalQuestion from "../../components/proposal/FinalQuestion";

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Journey />
      <Letter />
      <Proposal />
      <Question />
      <Answer />
      <Confession />
      <FinalQuestion />
      <Finale />
      <Footer />
    </>
  );
}

export default Home;