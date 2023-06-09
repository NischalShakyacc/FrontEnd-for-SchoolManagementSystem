import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'

import ClassroomGrids from '../../Components/InnerComponents/ClassroomGrids'

export default function Result() {

  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent name='Results 🗞️ ' description="Find results here."/>
        <ClassroomGrids classArray={['Toddler','Nursery','KG','1','2','3',' 4','5','6','7','8','9','10']} 
            linkto='/result/'
          />
      </div>
    </div>
  )
}
