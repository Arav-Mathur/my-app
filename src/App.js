import './App.css';
import { useState } from 'react';
export default function App() {
  return (
    <div> 
      <header className='App'>
        <Mybutton/>
        <Mybutton/> 
        {/* by default each instance has its own states and they do not intersect */}
      </header> {/*classname refers to the css code */}
      
    </div>
  );
}


function Mybutton(){ // function name needs to start capatilized to be used as components

  const handleClick =()=>{
    console.log("Button was clicked!")
    setCount(count+1)
  } // u can use js by putting that code in curly brackets. 

  const numbers = [
    {object:1},
    {object:2},
    {object:3},
  ]

  const list = numbers.map((number,index)=> <li key={index}> {number.object} </li>)
  // use map function for converting lists into renderable things

  const [count, setCount] = useState(0) 

  return(
    <div>
    <button onClick={handleClick}>clicked {count} times </button>
    <ul>{list}</ul>
    </div>
  )
}



