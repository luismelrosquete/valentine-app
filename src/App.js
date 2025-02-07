import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [response, setResponse] = useState(null);

  const handleYesClick = async () => {
    setResponse("Yay! Can't wait for our date ❤️");

    const message =
      "💘 You said YES!!! 🎉\nI can’t wait for our Valentine's date, baby! ❤️\nYou are the most amazing person in my life, and I adore you.\nSee you on the 14th, my beautiful Valentine! 💕🥰\n";

    // Send SMS using Textbelt API
    fetch("https://textbelt.com/text", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        phone: "7866782334",
        message: message,
        key: "luismelgirlfriend", // Free API key allows one text per day
      }),
    });
  };

  const handleNoHover = () => {
    setNoPosition({
      x: Math.random() * 200 - 100, // Moves left or right
      y: Math.random() * 100 - 50,  // Moves up or down slightly
    });
  };

  const hearts = new Array(7).fill(0).map((_, index) => ({
    id: index,
    delay: Math.random() * 3,
    size: Math.random() * 30 + 20,
    startY: Math.random() * 100 + "%",
  }));

  return (
    <div className="container">
      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="floating-heart"
          initial={{ x: "-10vw", opacity: 0 }}
          animate={{ x: "110vw", opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 5 + Math.random() * 3, // Random speed
            repeat: Infinity,
            delay: heart.delay,
          }}
          style={{ fontSize: `${heart.size}px`, top: heart.startY }}
        >
          ❤️
        </motion.div>
      ))}
      <div className="hearts">
        <span>❤️</span> <span>💕</span> <span>💖</span> <span>💞</span> <span>💘</span>
      </div>

      <h1 className="title">Will you be my Valentine? 💖</h1>
      <div className="buttons">
        <motion.button
          className="yes-button"
          whileHover={{ scale: 1.1 }}
          onClick={handleYesClick}
        >
          Yes! 💕
        </motion.button>
        <motion.button
          className="no-button"
          animate={{ x: noPosition.x, y: noPosition.y }}
          transition={{ type: "spring", stiffness: 120 }}
          onMouseEnter={handleNoHover}
        >
          No 😢
        </motion.button>
      </div>

      {response && <p className="response">{response}</p>}

      {/* Love Note */}
      <div className="love-note">
        💌 "You are my today and all of my tomorrows." - Leo Christopher
      </div>
    </div>
  );
}

export default App;
