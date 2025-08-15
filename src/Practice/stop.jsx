import { useEffect, useRef, useState } from "react"
const timer = 300000;

export default function Timer() {
    const [elapsed, setElapsed] = useState(timer);
    const interval = useRef(0);
    const [running, setRunning] = useState(false)
    const start = () => {
        if (!running) {
            setRunning(true);
            interval.current = setInterval(() => {
                setElapsed(prev=> prev - 1000);
            }, 1000);
        }
    }
    const stop = () => {
        setRunning(false);
        clearInterval(interval.current);
    }
    const reset = () => {
        setRunning(false);
        setElapsed(0);
        clearInterval(interval.current);
    }
    const formatTime = (ms) => {
        const seconds = Math.floor(ms / 1000) % 60;
        const min = Math.floor(ms / 60000) % 60;
        // const hours = Math.floor(ms / 3600000) % 24;
        return `${min.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}`;
        // return `${hours.toString().padStart(2, '0')}: ${min.toString().padStart(2, '0')}: ${seconds.toString().padStart(2, '0')}`;
    }
    return <>
        <div>
            {formatTime(elapsed)}
        </div>
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>

    </>
}