import React from 'react'
import ContactImg from "../images/contact.jpeg"
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

export default function Contact() {
  return (
    <>
      <Hero 
        cName="hero-small"
        shadow = "shadow-small"
        heroImg = {ContactImg}
        title="Contact Us"
        text="We provide the best education to our students."
        addtext="
        Address: Thasikhel, Lalitpur, Nepal
        Phone: 555-555-5555
        Email: info@delightschool.edu"
        url="/contact"
        heroText ="hero-text"
      />
      <ContactForm
      button="Send Message"
      title="Send your inquiries."
      
      />
      <Footer/>
    </>
  )
}
