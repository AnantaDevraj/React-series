import { useState } from 'react';
import './App.css'

function App() {

  // let counter = 15;
  let [counter  , setCounter] = useState(10); // Default Value is : 10
  let [msg , setMsg] = useState("");

  const addValue = () =>{
    // console.log("Add value : " , counter );
    if(counter + 1 <= 20){
      setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // setCounter(counter+1);
      // if we use setCounter(counter+1) multiple time , then still it will work only once,
      // Because React works in a batch , so it will considered as same batch

      // if we want to update like this then we can use  :
      // setCounter(prevCounter => prevCounter+1) ----> it will work like a function with a call back
      // "prevCounter" is the value of the previous count
      setMsg("Counter Increased !");
    }else{
      setMsg("Maximum Limit achived !");
    }
    
  }
  const removeValue = () =>{
    if(counter - 1 >= 0){
      setCounter(counter-1);
      setMsg("Counter decreased !");
    }else{
      setMsg("Minimum limit achived !");
    }
  }

  return (
    <>
    <h1>Learn react | Counter Mini Project</h1>
    <h2>Counter value : {counter}</h2>

    <button onClick={addValue}>Increase value</button>
    <br />
    <button onClick={removeValue}>Decrease value</button>
    {msg && (<p>{msg}</p>)}
    
    </>
  )
}

export default App
