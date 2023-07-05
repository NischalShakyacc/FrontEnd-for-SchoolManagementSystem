import React, { useEffect } from 'react'
import HeaderComponent from '../InnerComponents/HeaderComponent'
import { useNavigate, useParams } from 'react-router-dom'
import ResultSection from './ResultSection'

export default function ViewResult() {
    const {name} = useParams();

    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[]);
    return (
        <>
            <div id='innerHero'>
                <HeaderComponent name='Result 📃' description= {'View all the results of '+name +'.'}
                />
                <ResultSection/>
            </div>
        </>
    )
}
