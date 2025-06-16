// use tailwind code then 1 to 47 line code comment other code uncomment then open terminal and use npm run dev or npm start(CRA)
import React, { useEffect, useState } from 'react';
export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 10), 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  function formatTime(time) {
    const minute = String(Math.floor(time / 60000)).padStart(2, '0');
    const second = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
    const centiSeconds = String(Math.floor((time % 1000) / 10)).padStart(2, '0');
    return `${minute}:${second}:${centiSeconds}`;
  }

  return (
    <div className="main-container">
      <div className="stopwatch-box">
        <h1 className="stopwatch-title">StopWatch</h1>
        <div className="time-display">
          {formatTime(time)}
        </div>
        <div className="button-group">
          <button onClick={() => setIsRunning(true)} className="btn btn-success btn-lg">
            ⏵ Start
          </button>
          <button onClick={() => setIsRunning(false)} className="btn btn-danger btn-lg">
            ⏹ Stop
          </button>
          <button onClick={() => {
            setIsRunning(false);
            setTime(0);
          }} className="btn btn-primary btn-lg">
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect, useState } from 'react'
// export default function App() {
//   const [time,setTime]=useState(0);
//   const [isRunning,setIsRunning]=useState(false);
//   useEffect(()=>{
//     let timer;
//     if(isRunning){
//       timer=setInterval(()=>setTime((prev)=>prev+10),10)
//     }
//     else{
//       clearInterval(timer)
//     }
//     return()=>clearInterval(timer)
//   },[isRunning])
//   function formatTime(time){
//       const minute=String(Math.floor(time/60000)).padStart(2,'0');
//       const second=String(Math.floor(time%60000/1000)).padStart(2,'0');
//       const centiSeconds=String(Math.floor(time%1000/10)).padStart(2,'0');
//       return `${minute}:${second}:${centiSeconds}`;
//   }
//   return (
//     <div className='mx-auto w-1/2 bg-zinc-300 bg-opacity-20 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border-gray-300/30 text-center w-[500px] relative'>
//       <h1 className='text-4xl font-mono font-semibold mb-6 tracking-widset text-black'>
//         StopWatch
//       </h1>
//       <div className='bg-gradient-to-br from-gray-200 bg-red-300 p-4 rounded-2xl shadow-2xl text-6xl font-mono font-semibold mb-6'>
//         {formatTime(time)}
//       </div>
//       <div className='space-x-4'>
//         <button onClick={()=>setIsRunning(true)} className='bg-red-500 px-6 text-3xl p-4 rounded-2xl'>Start</button>
//         <button onClick={()=>setIsRunning(false)}className='bg-blue-500 px-6 text-3xl p-4 rounded-2xl'>Stop</button>
//         <button onClick={()=>{setIsRunning(false);setTime(0);}}className='bg-green-500 px-6 text-3xl p-4 rounded-2xl'>Reset</button>
//       </div>
//     </div>
//   )
// }
