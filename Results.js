// 📂 src/components/Results.js
import React from "react";

export default function Results({ score, responses }) {
  return (
    <div className="results">
      <h1>🎯 Your Efficiency Score: {score}/80</h1>
      <p>📊 Insights Based on Your Answers:</p>
      <ul>
        {Object.entries(responses).map(([question, answer], index) => (
          <li key={index}><strong>{question}</strong>: {answer}</li>
        ))}
      </ul>
      <p>💡 **Optimization Tip:** "Using smart automation, you could save **₹500-₹2000/month** and reclaim **10+ hours per week**!"</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}
