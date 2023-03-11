import React, { useContext, useRef } from 'react'
import {  useNavigate } from 'react-router-dom'
import { MyContext } from '../context/MyContext.jsx'

 export default function LoginPage() {
    const {authenticate} = useContext(MyContext)
    const inputRef = useRef()
    const navigate = useNavigate();
    
    const handleButtonClick = (value) => {
      authenticate(value)
      navigate("/welcome")
    }
  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" ref={inputRef} />
        <button onClick={() => handleButtonClick(inputRef.current.value)}  >Login</button>
        
    </div>
  )
}
