import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import { useParams } from 'react-router-dom'
import StudentTableArea from '../../Components/StudentComponents/StudentTable'

export default function StudentList() {
  const {classID} = useParams()
  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent 
        name={'Student List of '.concat(classID)} description='Details of all students in the class.'
        button="+ Add Account"
        />
        <StudentTableArea/>
      </div>
    </div>
  )
}
