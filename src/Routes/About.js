import React from 'react'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import AboutImg from "../images/about.jpeg"

export default function About() {
  return (
    <>
      <Hero 
        cName="hero-mid"
        shadow = "shadow-mid"
        heroImg = {AboutImg}
        title="About Us"
        text="We provide the best education to our students."
        btnClass="btn"
        buttonText = "Get Enrolled"
        url="/about"
      />

      <Footer/>
    </>
  )
}
