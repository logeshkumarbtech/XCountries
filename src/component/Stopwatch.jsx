import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] =useState(false);

  useEffect(()=>{
    let timerId;
    if(isRunning){
        timerId=setInterval(()=>{
            setTimer((prevTimer)=>prevTimer+1);
        },1000);
    }
    return()=>{
        clearInterval(timerId);
    }
  },[timer, isRunning]);

  const formatTime= ((secs)=>{
    const mins = Math.floor(secs /60);
    const remaining = secs % 60;
    return `${mins}:${remaining<10 ? "0" : ""}${remaining}`;
  })

  const startStop = (()=>{
    setIsRunning(!isRunning);
  });

  const reset =(()=>{
    setTimer(0);
    setIsRunning(false);
  })
  return(
    <div className="main">
        <h1>Stopwatch</h1>
        <p>Time: {formatTime(timer)}</p>
        <button onClick={startStop}>{isRunning? "Stop": "Start"}</button>
        <button onClick={reset}>Reset</button>
    </div>
  );

}