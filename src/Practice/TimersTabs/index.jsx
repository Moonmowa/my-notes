import React from "react";
import { usePomodoroTimer } from "./useTimer";

export default function PomodoroApp() {
  const { currentTimer, startTimer, pauseTimer, resetTimer } = usePomodoroTimer();

  return (
    <div>
      <h2>Current: {currentTimer.type || "None"}</h2>
      <h1>
        {Math.floor(currentTimer.remainingTime / 60)
          .toString()
          .padStart(2, "0")}
        :
        {(currentTimer.remainingTime % 60).toString().padStart(2, "0")}
      </h1>
      <p>{currentTimer.isRunning ? "Running" : "Paused/Stopped"}</p>

      <button onClick={() => startTimer("focus")}>Start Focus</button>
      <button onClick={() => startTimer("shortBreak")}>Start Short Break</button>
      <button onClick={() => startTimer("longBreak")}>Start Long Break</button>

      <button onClick={pauseTimer}>Pause</button>
      <button onClick={() => resetTimer(currentTimer.type)}>Reset</button>
    </div>
  );
}
