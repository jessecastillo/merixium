import "../components/CallingCard.css"

import React, { useState, useEffect } from 'react';


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const RandomText = () => {
  const [iterations, setIterations] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }, [intervalId]);

  const handleMouseOver = event => {
    const interval = setInterval(() => {
      setText(text.split("").map((letter, index) => {
        if (index < iterations) {
          return text[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      }).join(""));

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      setIterations(iterations + 1 / 3);
    }, 30);

    setIntervalId(interval);
  };

  return (
    <h1 onMouseOver={handleMouseOver}>{text}</h1>
  );
};

export default RandomText;