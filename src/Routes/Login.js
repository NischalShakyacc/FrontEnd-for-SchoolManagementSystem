import React from 'react'

import ContactImg from "../images/contact.jpeg"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import LoginForm from '../Components/LoginForm'

export default function Login() {
  return (
    <div>
      <Hero 
        cName="hero-small"
        shadow = "shadow-small"
        heroImg = {ContactImg}
        title="Login"
        text="Get access to schools notice board and manu more."
        btnClass="btno"
        url="/login"
        heroText ="hero-text"
      />
      <LoginForm/>
      <Footer/>
    </div>
  )
}
