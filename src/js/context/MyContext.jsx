import React,{ createContext, useState } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({children}) => {
    const [userName, setUserName] = useState() //My Context Data

    //My Context Action
    const authenticate = (login) =>{
        console.log(login)
        setUserName(login)
    }

    return (
        <MyContext.Provider value={ {userName, authenticate} }>
            {children}
        </MyContext.Provider>

    )



}



