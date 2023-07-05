import React,{useEffect} from 'react'
import TableArea from '../../Components/InnerComponents/TableArea'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import { useNavigate } from 'react-router-dom';

export default function TeacherList() {
    
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[]);

    return (
        <div>
            <div id='innerHero'>
                <HeaderComponent 
                    name="Teacher List" 
                    description="All teachers in the School." 
                    button="+ Add Account"
                    url="/newaccount"
                />
                <TableArea/>
            </div>
        </div>
    )
}
