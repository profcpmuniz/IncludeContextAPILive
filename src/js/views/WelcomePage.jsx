import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context/MyContext.jsx'

export const WelcomePage = () => {
    const {userName} = useContext(MyContext)
  return (
    <>
     <h1>Welcome, {userName}</h1>
     <Link to="/">Return to login Page</Link><br />
     <Link to="/withparam/myid">go with Parameters</Link>
    </>
    
  )
}
