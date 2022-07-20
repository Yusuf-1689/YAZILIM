


import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'


const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(false)
  return (
    <AuthContext.Provider value={{ currentUser }}>{}children</AuthContext.Provider>
  )
}

export default AuthContext;