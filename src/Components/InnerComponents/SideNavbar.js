import React,{useContext, useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { SideNavItems } from './SideMenuItems'
import '../Styles/SideNavbar.css'
import UserContext from '../../context/user/UserContext'

export default function SideNavbar({children}) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleClass = ()=>setIsOpen(!isOpen);
    
    
    const context = useContext(UserContext);
    const {userinfo, fetchUserinfo} =  context;

    const [isAdmin,setIsAdmin] = useState(false)
    const [isStudent,setIsStudent] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            fetchUserinfo();
        }
    }, [localStorage.getItem('token')]);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            if(userinfo.usertype === 'Admin'){
                setIsAdmin(true);    
            }
            if(userinfo.usertype === 'Student'){
                setIsStudent(true);
            }
        }
    },[localStorage.getItem('token'), fetchUserinfo])
        
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
                isAdmin && (
                SideNavItems.Admin.map((item,index)=>(
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
                )
            }

            {
                isStudent && (
                SideNavItems.Student.map((item,index)=>(
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
                )
            }

            {
                !isAdmin && !isStudent && (
                    <span>this</span>
                )
            }
            
        </div>
        <div>{children}</div>
    </div>
    )
}
