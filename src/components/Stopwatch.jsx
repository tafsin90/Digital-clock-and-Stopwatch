import React, { useEffect, useState, useRef } from 'react'

function Stopwatch() {

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  const formatTime = (time) => {
    let ms = Math.floor((time % 1000) / 10).toString().padStart(2, "0");
    // console.log(ms);
    let sec = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
    let min = Math.floor(time / (1000 * 60)).toString().padStart(2, "0");
    return `${min}:${sec}:${ms}`;
  }


  return (
    <div className='stopwatch'>
      <div className='formated-time'>{formatTime(time)}</div>
      <div className='buttons'>
        <button className='start-btn' onClick={handleStart}>Start</button>
        <button className='stop-btn' onClick={handleStop}>Pause</button>
        <button className='reset-btn' onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch