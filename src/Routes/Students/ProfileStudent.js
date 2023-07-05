import React, { useEffect } from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import StudentProileSection from '../../Components/StudentComponents/StudentProfileSection'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[]);

    return (
    <div>
        <div id='innerHero'>
            <HeaderComponent name='Profile 👀' description='Your details.'/>
            <StudentProileSection />
        </div>
    </div>
    )
}
