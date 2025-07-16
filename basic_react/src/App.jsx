import React from 'react'
import Guddu from './Guddu'


const App = () => {
  const userName = "learn react"
  return (
    <>
    <Guddu />
    <h1>Hello guys...{userName} </h1>{ /*{userName} => this will return the Evaluated variables */}
    {/* but only "userName"  will act as a string*/}
    </>
  )
}

export default App