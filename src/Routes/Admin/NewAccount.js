import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import SignupSection from '../../Components/InnerComponents/SignupSection'

export default function NewAccount() {
    return (
        <>
            <div id='innerHero'>
                <HeaderComponent name='Add Account ➕' description="Create Profiles for Student or Teachers."/>
                <SignupSection/>
            </div>
        </>
    )
}

