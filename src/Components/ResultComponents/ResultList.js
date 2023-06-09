import React from 'react'
import HeaderComponent from '../InnerComponents/HeaderComponent'
import { useParams } from 'react-router-dom';
import ResultTable from './ResultTable';

export default function ResultList() {
    const {classID} = useParams()
  return (
    <>
      <div id='innerHero'>
        <HeaderComponent 
        name={'Student and results List of '.concat(classID)} description='Result of all students in the class.'
        />
        <ResultTable/>
      </div>
    </>
  )
}
