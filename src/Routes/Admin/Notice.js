import React,{useEffect} from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import NoticeSection from '../../Components/InnerComponents/NoticeSection'
import { useNavigate } from 'react-router-dom';

export default function Notice() {
  const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[]);

  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent name='Notice 📃' description='View all the notices here'
        />
        <NoticeSection/>
      </div>
    </div>
  )
}

