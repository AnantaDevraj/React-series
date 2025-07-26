import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

// Here wrap all the elements with "UserContextProvider"
function App() {

  return (
    <UserContextProvider>
      <h1>React and Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
