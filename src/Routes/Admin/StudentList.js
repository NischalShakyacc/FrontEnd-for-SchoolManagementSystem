import React from 'react'
import TableArea from '../../Components/InnerComponents/TableArea'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import { useParams } from 'react-router-dom'

export default function StudentList() {
  const {classID} = useParams()
  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent 
        name={'Student List of '.concat(classID)}description='Name of all students in your class'
        button="+ Add Account"
        />
        <TableArea/>
      </div>
    </div>
  )
}
