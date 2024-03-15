import React from 'react'
import "./Styles/Hero.css"
import { NavLink } from 'react-router-dom';

export default function Hero(props) {
    return (
    <>
        <div className={props.cName}>
            <div className={props.shadow}></div>
            <img className='heroImg' alt='HeroImg' src={props.heroImg}/>

            <div className={props.heroText}>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <p>{props.addtext}</p>
                <NavLink to={props.url} className={props.btnClass}>
                    {props.buttonText}
                </NavLink>
            </div>
        </div>
    </>
    )
}
