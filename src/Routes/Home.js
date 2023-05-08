import React from 'react'
import Destination from '../Components/Destination'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'

export default function Home() {

  return (
    <>
      <Hero 
        cName="hero"
        shadow="shadow"
        heroImg = "https://images.unsplash.com/photo-1494949649109-ecfc3b8c35df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFNjaG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        title="Learn To Serve"
        text="We provide the best education to our students."
        btnClass="btn"
        buttonText = "Get Enrolled"
        url="/enroll"
        heroText ="hero-text big"
      />

    <Destination />
    <Footer/>
    </>

  )
}
