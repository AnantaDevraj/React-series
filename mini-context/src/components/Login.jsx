import React , {useState , useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    //with the help of "useContext" we can fetch then value inside the "UserContext"

    const [username, setUsername] = useState('');
    const[password , setPassword] = useState('');

    //To use "setUser" we refer to the "UserContext" file through the "useContext" hook
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault(); // it prevent posting values to the random APIs
        setUser({username , password}); //sending the values through "setUser"
    }
  return (
    <div>
        <h2>Login</h2>

        <input type="text" 
        value={username}
        //onChnage create a event listner and use the function setUsername
        onChange={(e) => setUsername(e.target.value)}
        placeholder='username' />

        <input type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='password' />

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login