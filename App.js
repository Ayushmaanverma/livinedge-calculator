// 📂 src/App.js
import React, { useState } from "react";
import Quiz from "./components/Quiz";
import StartScreen from "./components/StartScreen";
import Results from "./components/Results";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [responses, setResponses] = useState({});

  return (
    <div className="app-container">
      {step === 0 && <StartScreen onStart={() => setStep(1)} />}
      {step === 1 && <Quiz onComplete={(finalScore, answers) => {
          setScore(finalScore);
          setResponses(answers);
          setStep(2);
        }} 
      />}
      {step === 2 && <Results score={score} responses={responses} />}
    </div>
  );
}
