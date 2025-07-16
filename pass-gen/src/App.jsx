import { useState , useCallback, useEffect , useRef} from 'react'
import './App.css'
// useRef => used for give reference in the page of selected components

function App() {
  const [length , setLength] = useState(8);
  const [number , setNumber] = useState(false);
  const [char , setChar] = useState(false);
  const [pass , setPass] = useState(""); 
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() =>{

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let Pass = ""

    if(number) str += "0123456789"
    if(char) str += "!@#$%^&*_-+~?/<>"

    for (let i = 1; i <= length; i++) {
      let idx = Math.floor(Math.random() * str.length);
      let c = str.charAt(idx);
      Pass += c;
    }
    setPass(Pass);
    //here inside [] , ew give all the dependencies that are related to our function
  } , [length , number , char , setPass]) // Here we use "setPass" as a dependenci for storing the passwords

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // used for select the entire text
    passwordRef.current?.setSelectionRange(0 , 100) // used for selecting till a perticular range 
    //it is method through which we can copy text
    window.navigator.clipboard.writeText(pass)
  }, [pass])

  // Here we run the passwordGenerator function:
  // "useEffect" runs the function when the page re-render or when the dependecies are changed
  useEffect(() =>{
    PasswordGenerator();
  }, [length , char , number , PasswordGenerator])
  return (
    <>
      <div className="w-full max-w-md bg-gray-600 mx-auto rounded-lg p-4 my-8 shadow-md text-orange-500">
  <h1 className="text-yellow-200 text-center text-2xl font-semibold my-4">Password Generator</h1>

  <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
    <input 
      type="text"
      value={pass}
      placeholder="password"
      className="flex-1 outline-none py-2 px-3 text-black"
      readOnly
      ref={passwordRef}
    />
    <button
    onClick={copyPasswordToClipboard}
     className="outline-none rounded-lg bg-blue-700 text-white py-3 px-4 shrink-0 
             hover:bg-blue-800 focus:ring-2 focus:ring-blue-400 
             transition duration-200 ease-in-out cursor-pointer">
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-2' >
        <input type="range"
        value={length}
        min={8}
        max={100}
        className='cursor-pointer'
        onChange={(e) => {setLength(e.target.value)}} 
        />
        <label>Length : {length} </label>
        <input type="checkbox"
        defaultChecked = {number}
        id="numberInput"
        onChange={() =>{
          //if true then false , if false then true
          setNumber((prev) => !prev);
        }} />
        <label htmlFor="numberInput">Numbers</label>
        <input type="checkbox"
        defaultChecked = {char}
        id="CharInput"
        onChange={() =>{
          //if true then false , if false then true
          setChar((prev) => !prev);
        }} />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>
</div>

    </>
  )
}

export default App
