// import React from 'react'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const DepartmentDetail = () => {
  const [data, setData] = useState()
  const {myKey} = useContext(AuthContext)

  const getDepartments = async () => {
    const res = await axios.get("http://127.0.1:8000/api/", {
      headers: {
        'Authorization': `Token ${myKey}`,
      }
    })
    console.log(res.data)
  }

  useEffect(() => {
    getDepartments()
  
    
  }, [])
  

  return (
    <div>DepartmentDetail</div>
  )
}

export default DepartmentDetail