import React, { useContext, useEffect } from 'react'
import UserContext from '../context/user/UserContext'

export default function Examples() {
    const context = useContext(UserContext);
    const {userinfo,setUserinfo,fetchUserinfo} = context;

    useEffect (()=>{
        fetchUserinfo();
    },[]);

  return (
    <div>
      <p style={{margin: '5rem'}}>{userinfo.usertype}</p>
    </div>
  )
}
