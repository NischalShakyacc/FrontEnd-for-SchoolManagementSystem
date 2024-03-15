import "./Styles/Footer.css"

import React from 'react'

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="footer-title">
            <h1>Delight Kindergarten High School</h1>
            <p>Learn To Serve</p>
        </div>
        <div>
            <a href="https://www.facebook.com/rasmirasakya" target="blank" >
            <i className="fa-brands fa-facebook-square" aria-hidden="true"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-instagram-square  " aria-hidden="true"></i>
            </a>
            <a href="/">
                <i className="fa-brands fa-twitter-square " aria-hidden="true"></i>
            </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">Status</a>
            <a href="/">Licensce</a>
            <a href="/">All Versions</a>
        </div>
        <div>
            <h4>Nischal Shakya</h4>
            <p style={{color:'white'}}>9861884348</p>
            <p style={{color:'white'}}>nischalshakyacc@gmail.com</p>
            <a href="https://www.facebook.com/NischalShakya8" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/nischal__lahcsin/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </div>
  )
}

