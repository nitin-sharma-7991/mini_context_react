import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
 

  return (
    <UserContextProvider >
      <h4> React with Context API</h4>
      <Login/>
      <Profile />
      </UserContextProvider>
  )
}

export default App
