import "./Styles/ContactForm.css"
import React from 'react'

  const validate = (e)=>{
  e.preventDefault();
  console.log("submitted")
  }
export default function ContactForm(props) {
  return (
    <div className="form-container">
      <h1 className="contact-form-title">{props.title}</h1>
        <form 
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd5gyBmGwzzeI_OCQHHJ6Ro8334BU0BqlDWkilCwBYIHTCQPA/formResponse"  method="POST" 
        >

            <input 
            placeholder="Name" 
            type='text' 
            required='required' 
            name="entry.2005620554"
            />

            <input 
            placeholder="Email" 
            type='text' 
            required='required' 
            name="entry.2110052375" 
            />

            <input 
            placeholder="Subject" 
            type='text'  
            required='required'
            name="entry.1065046570" 
            />

            <input 
            placeholder="Phone Number" 
            type="number" 
            name="entry.1166974658"/>

            <textarea 
            placeholder="Message" 
            rows="4" 
            required='required' 
            name="entry.839337160">
            </textarea>

            <button onSubmit={validate}>{props.button}</button>
        </form>
    </div>
  )
}