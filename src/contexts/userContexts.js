import { createContext, useState, useEffect } from "react";


export const UserContext = createContext({});

const setUserSession = (initialValue) => {
    let user = window.sessionStorage.getItem('user');
    if(user){
        return JSON.parse(user);
    }
    return initialValue;
}

export const UserProvider = (props) => {
    const [user, setUser] = useState(() => {
        return setUserSession()

    });

    useEffect(()=>{
        if(user){
            window.sessionStorage.setItem('user', JSON.stringify(user));
        }   
    },[user]);

    return (
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}