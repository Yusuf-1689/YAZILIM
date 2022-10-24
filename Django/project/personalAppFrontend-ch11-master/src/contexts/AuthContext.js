import { createContext } from "react";


export const AutContext = createContext();

const url = "http://127.0.0.1:8000/"

const AutContextProvider = (props) => {
  return(
    <AutContext.Provider value={}>
      {props.children}
    </AutContext.Provider>
  )
}