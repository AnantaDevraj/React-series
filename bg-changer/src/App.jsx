import "./App.css";
import { useState } from "react";

function App() {

  const [background, setBackground] = useState('olive');
  // onClick is unique function  , that uses the function as a parameter so  => "onClick{()=>function(parameter)}"
  return (
    <>
      <div className="w-full h-screen duration-200 transition-all" style={{backgroundColor: background}}>
      </div>
      {/*Buttons for changing the background*/}
      <div className=" fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black shadow-md px-4 py-2 rounded-xl flex gap-2">
        <button onClick={() => setBackground("blue")}
         className="bg-blue-500 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 transition">
          Blue
        </button>
        <button onClick={() => setBackground("green")} className="bg-green-500 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-green-600 transition">
          Green
        </button>
        <button onClick={() => setBackground("red")}
         className="bg-red-500 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-red-600 transition">
          Red
        </button>
        <button onClick={() => setBackground("yellow")}
         className="bg-yellow-500 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-yellow-600 transition">
          Yellow
        </button>
        <button onClick={() => setBackground("violet")}
         className="bg-violet-500 text-black px-4 py-2 rounded flex items-center gap-2 hover:bg-violet-600 transition">
          Violet
        </button>
      </div>
    </>
  );
}

export default App;
