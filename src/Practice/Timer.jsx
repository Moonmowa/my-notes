import React, { useState, useRef, useEffect } from "react";

export default function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0); // milliseconds
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      startTimeRef.current = Date.now() - elapsed;
      tick();
    }
  };

  const stop = () => {
    setRunning(false);
    cancelAnimationFrame(rafRef.current);
  };

  const reset = () => {
    setRunning(false);
    cancelAnimationFrame(rafRef.current);
    setElapsed(0);
  };

  const tick = () => {
    setElapsed(Date.now() - startTimeRef.current);
    rafRef.current = requestAnimationFrame(tick);
  };

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", marginTop: "50px" }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(elapsed)}</h2>
      <div>
        <button onClick={start} style={{ margin: "5px" }}>
          Start
        </button>
        <button onClick={stop} style={{ margin: "5px" }}>
          Stop
        </button>
        <button onClick={reset} style={{ margin: "5px" }}>
          Reset
        </button>
      </div>
    </div>
  );
}
