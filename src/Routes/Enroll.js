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
        text="To apply, students must share our commitment to academic excellence and our core values, complete an online application, provide transcripts, standardized test scores, and participate in an admissions interview. "
        btnClass="btno"
        url="/enroll"
        heroText ="hero-text"
      />
      <EnrollmentForm/>
      <Footer/>
    </div>
  )
}
