import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext.jsx'

export const WelcomePage = () => {
    const {userName} = useContext(MyContext)
  return (
    <h1>Welcome, {userName}</h1>
  )
}
