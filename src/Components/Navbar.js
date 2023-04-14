import React, { Component } from 'react'
import "./Styles/Navbar.css"
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    state = {
        clicked:false
    }

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
    return (
        <nav className="navbar">
            <label className="logo">
                <img src={require("../images/logo.jpg")} alt="DK" className="logoImg"/>
                <span className='mainlogo-text'>
                    Delight Kindergarten High School
                </span>
            </label>

            <div className='menu-icons' onClick={this.handleClick}>
                <i className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>
            </div>
            
            <ul className={this.state.clicked?'nav-menu active':'nav-menu' }  onClick={this.handleClick}>
                {MenuItems.map((item, index) => {
                    return(
                        <li key={index}>
                            <Link className={item.cName} to={item.url}>
                                <i className={item.icon}>
                                </i>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
            </ul>
        </nav>
    )
    }
}

