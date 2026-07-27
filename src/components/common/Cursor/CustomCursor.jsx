import { useEffect, useState } from "react";
import "./CustomCursor.css";

function CustomCursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {

    const move = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY
      });

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  return (

    <div
      className="customCursor"
      style={{
        left: position.x,
        top: position.y
      }}
    />

  );

}

export default CustomCursor;