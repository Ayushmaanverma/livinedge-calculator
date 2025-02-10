// 📂 src/components/Quiz.js
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const questions = [
  { 
    text: "Do you own or rent your home?", 
    options: [{ text: "Own", value: "own" }, { text: "Rent", value: "rent" }] 
  },
  { 
    text: "How many rooms do you have?", 
    options: [{ text: "1-2", value: "small" }, { text: "3-4", value: "medium" }, { text: "5+", value: "large" }] 
  },
  { 
    text: "How many people live in your home?", 
    options: [{ text: "1-2", value: "few" }, { text: "3-5", value: "average" }, { text: "6+", value: "crowded" }] 
  },
  { 
    text: "How much was your last month's electricity bill (₹)?", 
    type: "slider", min: 500, max: 5000, step: 500
  },
  { 
    text: "How many electrical appliances do you use daily?", 
    type: "slider", min: 1, max: 20, step: 1
  },
  { 
    text: "Do you have LED bulbs or regular bulbs?", 
    options: [{ text: "Mostly LED", value: "efficient" }, { text: "Mostly Normal", value: "inefficient" }] 
  },
];

export default function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    setResponses({ ...responses, [questions[currentQuestion].text]: option.text });

    let points = 5;
    if (option.value === "efficient") points = 10;
    if (option.value === "inefficient") points = 2;

    setScore(score + points);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(score, responses);
    }
  };

  return (
    <div className="quiz-container">
      <ProgressBar progress={(currentQuestion / questions.length) * 100} />
      <h2>{questions[currentQuestion].text}</h2>
      {questions[currentQuestion].options ? (
        questions[currentQuestion].options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>{option.text}</button>
        ))
      ) : (
        <input 
          type="range" 
          min={questions[currentQuestion].min} 
          max={questions[currentQuestion].max} 
          step={questions[currentQuestion].step} 
          onChange={(e) => handleAnswer({ text: e.target.value, value: e.target.value })}
        />
      )}
    </div>
  );
}
