import React from 'react'

export default function MapForSchool() {
  return (
    <div style={{margin: "2rem 3.5rem 0 3.5rem"}}>
      <iframe 
        title="myFrame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28273.825877913994!2d85.29511859500768!3d27.64840950176721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1745a3898b5b%3A0xc4ad784a1e04cae6!2sDelight%20School!5e0!3m2!1sen!2snp!4v1692343337396!5m2!1sen!2snp" 
        width="100%"
        height="450" 
        style={{border: 0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
      
    </div>
  )
}

