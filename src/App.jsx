import { useState } from "react";
import Loader from "./components/common/Loader/Loader";
import Intro from "./components/Intro/Intro";
import Home from "./pages/Home/Home";
import CustomCursor from "./components/common/Cursor/CustomCursor";


function App() {
  const [phase, setPhase] = useState("loader");

  switch (phase) {
    case "loader":
      return (
        <>
          <CustomCursor />
          <Loader onComplete={() => setPhase("intro")} />
        </>
      );

    case "intro":
      return (
        <>
          <CustomCursor />
          <Intro onBegin={() => setPhase("home")} />
        </>
      );

    default:
      return (
        <>
          <CustomCursor />
          <Home />
        </>
      );
  }
}

export default App;
