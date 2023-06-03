import React from 'react'
import '../Styles/HeaderComponent.css'
import { Link } from 'react-router-dom';

export default function HeaderComponent(props) {
    const buttonExist = props.button;
    
    if(!buttonExist){
        return(
            <div className='header-section'>
                <div>
                    <h1 className='header-name' >{props.name}</h1>
                    <p className='header-description'>{props.description}</p>
                </div>
            </div>
        )
    }else{

        return (
        <div className='header-section'>
            <div>
                <h1 className='header-name' >{props.name}</h1>
                <p className='header-description'>{props.description}</p>
            </div>
            <div>
            <Link to = {props.url}> 
                <button className='header-btn'>
                {props.button}
                </button>
            </Link>
            
            </div>
        </div>
        )
    }
}
