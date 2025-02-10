// 📂 src/components/StartScreen.js
import React from "react";

export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>🏡 Time & Energy Efficiency Calculator</h1>
      <p>Discover how much time & money you could save with smarter living.</p>
      <button onClick={onStart}>Start Now 🚀</button>
    </div>
  );
}
