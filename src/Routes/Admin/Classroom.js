import React from 'react'
import Grids from '../../Components/InnerComponents/ClassroomGrids'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'

    export default function Classroom() {
    return (
        <div>
            <div id='innerHero'>
                <HeaderComponent name='Classroom 🏛️' description='View all the notices here'/>
                <Grids 
                classArray={['Toddler','Nursery','KG','Grade 1','Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6','Grade 7','Grade 8','Grade 9','Grade 10']} 
                />
            </div>
        </div>
    )
    }
