import axios from 'axios';
import {createContext,useState} from 'react'
import { toastSuccessNotify } from '../helper/ToastNotify';

export const AuthContext = createContext();

const url = "https://anthonycw.pythonanywhere.com/"

const AuthContextProvider = (props)=>{
  const [currentUser,setCurrentUser] = useState(sessionStorage.getItem('username') || false);
  let keys = sessionStorage.getItem('token')
  const [myKey,setMyKey] = useState(keys && window.atob(keys))

  const createUser = async (email,password,firstName,lastName,userName,navigate)=>{
    try {
      const res = await axios.post(`${url}user/auth/register/`,{
        "username": userName,
        "email": email,
        "first_name": firstName,
        "last_name": lastName,
        "password": password,
        "password2": password

      })

      if (res.data.token){
        console.log(res)
        setMyKey(res.data.token)
        setCurrentUser(res.data.username)
        sessionStorage.setItem('username',res.data.userName)
        const myToken = window.btoa(res.data.token)
        sessionStorage.setItem('token', myToken)
        toastSuccessNotify('User registered successfully.')

      }
      
    } catch (error) {

      
    }
  }

  const signIn = async (email, password,userName) =>{
    try {
      const res = await axios.post(`${url}users/auth/login`,{
        "email":email,
        "username": userName,
        "password": password,

      })
      if (res.data.token){
        console.log(res)
        setMyKey(res.data.token)
        setCurrentUser(res.data.user.username)
        sessionStorage.setItem('username',res.data.user.userName)
        const myToken = window.btoa(res.data.token)
        sessionStorage.setItem('token', myToken)
        toastSuccessNotify('User login successfully.')

      }
      
    } catch (error) {
      
    }
  }

  const logOut = async () =>{
    try {
      
    } catch ("error") {
      
    }
  }
  

let value = {
  createUser,
  currentUser,
  myKey,
  signIn,
  

}


  return(
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;