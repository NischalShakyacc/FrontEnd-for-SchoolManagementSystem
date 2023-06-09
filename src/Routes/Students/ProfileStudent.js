import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import StudentProileSection from '../../Components/StudentComponents/StudentProfileSection'
export default function Profile() {
    return (
    <div>
        <div id='innerHero'>
            <HeaderComponent name='Profile 👀' description='Your details.'/>
            <StudentProileSection />
        </div>
    </div>
    )
}
