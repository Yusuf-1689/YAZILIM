import axios from 'axios';
import {createContext,useState} from 'react'
import { toastSuccessNotify } from '../helper/ToastNotify';

export const AutContext = createContext();

const url = "http://127.0.0.1:8000/"

const AutContextProvider = (props) => {
  const [currentUser,setCurrentUser] = useState(false);
  const [myKey, setMyKey] = useState("")

  const createUser = async (email,password,firstName,lastName,userName)=>{
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

let value = {
  createUser,
  currentUser,
  myKey,

}


  return(
    <AutContext.Provider value={value}>
      {props.children}
    </AutContext.Provider>
  )
}

export default AuthContextProvider;