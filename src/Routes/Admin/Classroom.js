import React from 'react'
import Grids from '../../Components/InnerComponents/ClassroomGrids'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'

    export default function Classroom() {
    return (
        <div>
            <div id='innerHero'>
                <HeaderComponent name='Classroom 🏛️' description='View all student details here'/>
                <Grids 
                classArray={['Toddler','Nursery','KG','1','2','3',' 4','5','6','7','8','9','10']}
                linkto = '/classroom/' 
                />
            </div>
        </div>
    )
    }
