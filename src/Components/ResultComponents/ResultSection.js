import React,{useContext, useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import ResultContext from '../../context/results/ResultContext';
import Marksheet from './Marksheet';
import UserContext from '../../context/user/UserContext';
import '../Styles/Button.css';
import ConfirmDeleteResult from './ConfirmDeleteResult';

export default function ResultSection() {
    const {userId} = useParams()
    const context  = useContext(ResultContext);
    const {results, getResults } = context;

    const usercontext = useContext(UserContext);
    const {userinfo, fetchUserinfo} = usercontext;
    
    const navigate = useNavigate();
    const [isadmin,setIsadmin] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }else{
            fetchUserinfo();
        }
    },[localStorage.getItem('token')]);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            if(userinfo.usertype === 'Admin'){
                setIsadmin(true);
            }
        }
    },[localStorage.getItem('token'), fetchUserinfo])

    useEffect(()=>{
        getResults(userId);
    },[]);

        return (
        <> 
            {results.length === 0 ? "No Results to display. Add results.":""}
            {
                results.map((value,index)=>{
                return(
                    
                    <div className="accordion" id="accordionExample" key={value._id}  style={{width:'95%'}}>
                    <div className="accordion-item">
                    <h2 className="accordion-header" id={"heading".concat(index)}>
                        <button className="accordion-button collapsed" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={"#collapse".concat(index)}
                        aria-expanded="false" 
                        aria-controls={"collapse".concat(index)}>
                        {value.resulttitle}
                        <div 
                        style={
                            {paddingLeft:'1rem',fontSize:'0.7rem',color:'var(--clr--grey)'}}>
                            {new Date(value.date).toDateString()}
                        </div>
                        </button>
                    </h2>

                    <div className='actionitems'>
                    {/* This is working instant delete result
                        {isadmin && <button className='actionicon icondelete' onClick={()=>{deleteResult(value._id)}}>
                        <i className="fa-solid fa-trash"></i> Delete
                        </button>}
                        
                    */ }
                    {
                        isadmin &&
                        <ConfirmDeleteResult
                        resultId = {value._id}
                        />
                    }
                    </div>
                    
                    <div id={"collapse".concat(index)} className="accordion-collapse collapse accord" 
                        aria-labelledby={"heading".concat(index)}
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Marksheet 
                                data  = {value}
                                className = {index}
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                    )
                })
            }
        
        </>
    )
}