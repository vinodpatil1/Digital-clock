
import './App.css';

import { useState } from 'react';

function App() {

  let black = "black";
  let green = "green"; 
  const [bgcolor, setColor] = useState(black);

  const ChangeBg = () =>{
     const newBg = bgcolor === black ? green : black;
     setColor(newBg);
  }



let cTime = new Date().toLocaleTimeString();
const [state, setstate] = useState(cTime);

 const ChangeTime = () =>{
  cTime = new Date().toLocaleTimeString();
   setstate(cTime)
 }

 setInterval(ChangeTime,1000);

  return (
   <> 
    <div className="container">
        <div className="card" style={{backgroundColor : bgcolor}}>
           <h1>{state}</h1>
        </div>
        <button className='btn' onClick={ChangeBg}>Change BgColor </button>
    </div>
   </>
  );
}

export default App;
