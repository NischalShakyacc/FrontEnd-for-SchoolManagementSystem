import React from 'react'
import ContactImg from "../images/contact.jpeg"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import EnrollmentForm from '../Components/EnrollmentForm'

export default function Enroll() {
  return (
    <div>
      <Hero 
        cName="hero-small"
        shadow = "shadow-small"
        heroImg = {ContactImg}
        title="Enroll"
        text="Your kids deserve the best education."
        btnClass="btno"
        url="/enroll"
        heroText ="hero-text"
      />
      <EnrollmentForm/>
      <Footer/>
    </div>
  )
}
