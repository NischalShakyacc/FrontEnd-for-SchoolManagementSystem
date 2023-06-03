import React, { useContext, useEffect } from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import SignupSection from '../../Components/InnerComponents/SignupSection'
import UserContext from '../../context/user/UserContext'
import { useNavigate } from 'react-router-dom';

export default function NewAccount() {

    const context =  useContext(UserContext);
    const {userinfo,fetchUserinfo} = context;
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            
            fetchUserinfo();
            console.log("heres is userinfo" + userinfo.name)
            if(userinfo.usertype !== 'Admin'){
                navigate('/profile');
            }
        }
    },[])
    

    return (
        <>
            <div id='innerHero'>
                <HeaderComponent name='Add Account ➕' description="Create Profiles for Student or Teachers."/>
                <SignupSection/>
            </div>
        </>
    )
}

