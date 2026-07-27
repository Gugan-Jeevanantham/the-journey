import Hero from "../../components/Hero/Hero";
import Story from "../../components/Story/Story";
import Journey from "../../components/Journey/Journey";
import Letter from "../../components/Letter/Letter";
import Proposal from "../../components/Proposal/Proposal";
import Question from "../../components/Question/Question";
import Answer from "../../components/Answer/Answer";
import Confession from "../../components/Confession/Confession";
import Finale from "../../components/Finale/Finale";
import Footer from "../../components/Footer/Footer";
import FinalQuestion from "../../components/Proposal/FinalQuestion";

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