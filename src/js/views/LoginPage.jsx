import React, { useContext, useRef } from 'react'
import { MyContext } from '../context/MyContext.jsx'

 export default function LoginPage() {
    const {authenticate} = useContext(MyContext)
    const inputRef = useRef()

  return (
    <div>
        <h1>Login Page</h1>
        <input type="text" ref={inputRef} />
        <button onClick={() => authenticate(inputRef.current.value)}  >Login</button>
    </div>
  )
}
