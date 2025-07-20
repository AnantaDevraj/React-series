// import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let Obj = {
    name : "Ananta",
    age : "21",
  }
  const myArr = ["Ananta" , "Smruti", "Deba" , "Sambit"];

  return (
    <>
      <h1 className='bg-green-600 p-4 text-black rounded-xl border-4'>TailwindCSS</h1>
       {myArr.map((p , idx) => (
        // Here I want to Write the names in my card  , so i have declare a property as "name = {p}" inside the Card
        //and use that "name" in the place of "props" in Card component
        <Card myObj = {Obj} key={idx} name ={p} btn="visit me" /> //here in <Card  { these are the props , with the help of this we can pass object or elements}/>
       ))}
       <Card name = "Sourav" />
    </>
  )
}

export default App
