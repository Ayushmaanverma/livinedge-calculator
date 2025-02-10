// 📂 src/components/ProgressBar.js
import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="progress-bar">
      <div style={{ width: `${progress}%` }} className="progress-fill"></div>
    </div>
  );
}
