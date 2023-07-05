import React, { useEffect } from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import { useNavigate, useParams } from 'react-router-dom'
import StudentTableArea from '../../Components/StudentComponents/StudentTable'

export default function StudentList() {
  const {classID} = useParams();

  const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login')
        }
    },[]);

  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent 
        name={'Student List of '.concat(classID)} description='Details of all students in the class.'
        button="+ Add Account"
        url="/newaccount"
        />
        <StudentTableArea/>
      </div>
    </div>
  )
}
