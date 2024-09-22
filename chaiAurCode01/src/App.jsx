import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// using hooks

function App() {

  //   value       function
//       ||          ||
const [counter , SetCounter] = useState(0)

  // let counter = 14;

  function addValue (){

    if (counter <= 19 ) {
      SetCounter(counter + 1);
    console.log("increased");
    } else {
      console.log("Assignment == Not Greater Than 20 ✅✅");
      
    }
  }

  function remvValue() {
    if (counter >= 1) {
      SetCounter(counter -1);
    console.log("decreased");
    } else{
      console.log('Assignment == No Negative Numbers ✅✅');
      
    }
    
    
  }

  return (
    <>
    <h1>Chai aur React.</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >
      +1
    </button>

    <button
    onClick={remvValue}
    >
      -1
    </button>
    </>
  )
}

export default App
