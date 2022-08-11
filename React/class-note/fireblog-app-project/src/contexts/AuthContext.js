import React, { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false);
    

    useEffect(() => {
        userObserver(setCurrentUser);
        // console.log(currentUser);

    }, []);


    return ( 
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;