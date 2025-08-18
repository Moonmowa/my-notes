import { useState, useRef, useCallback } from "react";

const DEFAULT_DURATIONS = {
  focus: 25 * 60,       // 25 min
  shortBreak: 5 * 60,   // 5 min
  longBreak: 15 * 60    // 15 min
};

export function usePomodoroTimer() {
  const [currentTimer, setCurrentTimer] = useState({
    type: null, // "focus" | "shortBreak" | "longBreak"
    remainingTime: 0,
    isRunning: false
  });

  const [savedTimes, setSavedTimes] = useState({
    focus: DEFAULT_DURATIONS.focus,
    shortBreak: DEFAULT_DURATIONS.shortBreak,
    longBreak: DEFAULT_DURATIONS.longBreak
  });

  const intervalRef = useRef(null);

  // Start a timer
  const startTimer = useCallback((type) => {
    // Stop any running timer
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setSavedTimes((prev) => ({
        ...prev,
        [currentTimer.type]: currentTimer.remainingTime
      }));
    }

    const timeToLoad = savedTimes[type] || DEFAULT_DURATIONS[type];

    setCurrentTimer({ type, remainingTime: timeToLoad, isRunning: true });

    intervalRef.current = setInterval(() => {
      setCurrentTimer((prev) => {
        if (prev.remainingTime <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          return { ...prev, remainingTime: 0, isRunning: false };
        }
        return { ...prev, remainingTime: prev.remainingTime - 1 };
      });
    }, 1000);
  }, [savedTimes, currentTimer]);

  // Pause timer
  const pauseTimer = useCallback(() => {
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSavedTimes((prev) => ({
      ...prev,
      [currentTimer.type]: currentTimer.remainingTime
    }));
    setCurrentTimer((prev) => ({ ...prev, isRunning: false }));
  }, [currentTimer]);

  // Reset timer for a type
  const resetTimer = useCallback((type) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
    setSavedTimes((prev) => ({
      ...prev,
      [type]: DEFAULT_DURATIONS[type]
    }));
    setCurrentTimer({ type, remainingTime: DEFAULT_DURATIONS[type], isRunning: false });
  }, []);

  return {
    currentTimer, // { type, remainingTime, isRunning }
    startTimer,
    pauseTimer,
    resetTimer
  };
}
