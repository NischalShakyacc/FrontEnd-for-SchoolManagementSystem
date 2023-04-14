import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import ProfileSection from '../../Components/InnerComponents/ProfileSection'
export default function Profile() {
    return (
    <div>
        <div id='innerHero'>
            <HeaderComponent name='Profile 👀' description='Your details.'/>
            <ProfileSection/>
        </div>
    </div>
    )
}
