import React, { useContext, useEffect } from 'react'
import HeaderComponent from '../InnerComponents/HeaderComponent'
import { NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../context/user/UserContext'

export default function StudentView() {
    const context = useContext(UserContext);
    const {userinfo, fetchUserinfo} = context;

    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchUserinfo();
        }else{
            navigate('/login');
        }
    }, [])

    return (
        <>
        <div id='innerHero'>
                <HeaderComponent name='Result 📃' description= {'View all the your results here '}
                />
                <NavLink to={"/viewresult/"+ userinfo._id+"/" +userinfo.name}>
                    <button className='grid-button fetchresult' type='submit' style={{'maxWidth' : '40rem'}}>Fetch Results</button>
                </NavLink>
                
        </div>
        </>
    )
}
