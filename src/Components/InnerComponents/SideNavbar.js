import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { SideNavItems } from './SideMenuItems'
import './InnerStyles/SideNavbar.css'

export default function SideNavbar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleClass = ()=>setIsOpen(!isOpen);

    return (
    <div className='side-container'>
        <div className='side-bar' style={{width: isOpen?'12rem':'3.5rem'}}>
            <section className='top-section'>
                <h1 
                className='nav-logo' 
                style={
                    {display: isOpen ? 'block':'none',}
                }>
                Welcome
                </h1>
                
                <i className="fas fa-bars" 
                onClick={toggleClass} 
                style={
                    {marginLeft: isOpen ? '2rem' : '0.25rem',
                }
                }>
                </i>
            </section>
            {
                SideNavItems.map((item,index)=>(
                <NavLink to={item.url}  key={index} className={item.cName} >
                    <i className={item.icon}></i>
                    <div className='link-text' 
                    style={
                    {
                        display: isOpen ? 'block':'none',
                    }
                }
                    >{item.title}</div>
                </NavLink>
                ))
            }
        </div>
        <div>{children}</div>
    </div>
    )
}
 