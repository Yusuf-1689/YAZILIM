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
        navigate("/home")
      }
      
    } catch (error) {

      
    }
  }

  const signIn = async (email, password,userName,navigate) =>{
    try {
      const res = await axios.post(`${url}users/auth/login`,{
        "email":email,
        "username": userName,
        "password": password,

      })
      console.log(res)
      if (res.data.key){
        console.log(res)
        setMyKey(res.data.key)
        setCurrentUser(res.data.user.username)
        sessionStorage.setItem('username',res.data.user.userName)
        const myToken = window.btoa(res.data.key)
        sessionStorage.setItem('token', myToken)
        toastSuccessNotify('User login successfully.')

      }
      
    } catch (error) {
      
    }
  }

  const logOut = async (navigate) =>{
    try {
      var config = {
        method: 'post',
        url: 'users/auth/logouts',
        headers: {
          'Authorization': `Token ${myKey}`,
        }
      }

      const res = await axios(config)
      console.log(res)
      if (res.status === 200) {
        setCurrentUser(false)
        setMyKey(false)
        sessionStorage.clear()
        toastSuccessNotify('User log out successfully.')
        navigate("/")
      }



    } catch (error) {
      console.log(error)
      
    }
  }
  

let value = {
  createUser,
  currentUser,
  myKey,
  signIn,
  logOut,
  

}


  return(
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider;