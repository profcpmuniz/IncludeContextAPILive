import { createContext, useState } from "react";

export const MyContext = createContext()

export const MyContextProvider = ({anyComponent}) =>{
    const [userName, setUserName] = useState() //My Context Data

    //My Context Action
    const authenticate = (login) =>{
        setUserName(login)
    }

    return (
        <MyContext.Provider value={ {userName, authenticate} }>
            {anyComponent}
        </MyContext.Provider>

    )



}



