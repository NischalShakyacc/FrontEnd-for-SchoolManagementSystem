import React, { useState } from 'react';
import "./Styles/Navbar.css";
import { MenuItems } from './MenuItems';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
        window.location.reload(false);
    };

    return (
        <nav className="navbar">
        <label className="logo">
            <img src={require("../images/logo.jpg")} alt="DK" className="logoImg" />
            <span className='mainlogo-text'>
            Delight Kindergarten High School
            </span>
        </label>

        <div className='menu-icons' onClick={handleClick}>
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'} onClick={handleClick}>
            {MenuItems.map((item, index) => (
            <li key={index}>
                <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
                </Link>
            </li>
            ))}

            {!localStorage.getItem('token') ? (
            <li key={99}>
                <Link className="nav-links-log" to='/login'>
                LOGIN
                <i className="fa-solid fa-right-to-bracket"></i>
                </Link>
            </li>
            ) : (
            <li key={69}>
                <button className="nav-links-log" onClick={handleLogout}>
                LOGOUT
                <i className="fa-solid fa-right-from-bracket"></i>
                </button>
            </li>
            )}
        </ul>
        </nav>
    );
};

export default Navbar;


