import React from 'react'
import './InnerStyles/HeaderComponent.css'

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
            <div><button className='header-btn'>{props.button}</button>
            </div>
        </div>
        )
    }
}
