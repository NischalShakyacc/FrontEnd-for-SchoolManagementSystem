import React, { useContext, useEffect, useState } from 'react'
import NoticeContext from '../../context/notices/NoticeContext'
import "../Styles/NoticeResultSection.css"
import AddNote from './AddNote';
import UpdateSection from './UpdateSection'
import AlertMessage from '../AlertMessage'
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

export default function NoticeSection() {
    const context = useContext(NoticeContext);
    const {notices, deleteNotice, fetchNotice} = context;

    const usercontext = useContext(UserContext);
    const {userinfo, fetchUserinfo} = usercontext;

    const [isadmin,setIsadmin] = useState(false);

    let navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            fetchUserinfo();
        }else{
            navigate('/login');
        }
    },[localStorage.getItem('token')]);

            
    useEffect(()=>{
        if(localStorage.getItem('token')){
            if(userinfo.usertype === 'Admin'){
                setIsadmin(true);
            }
        }
    },[localStorage.getItem('token'), fetchUserinfo])
    // eslint-disable-next-line
    

    useEffect(()=>{
        fetchNotice();
    },[]);

    // State for alert
    const [showAlert, setShowAlert] = useState(false)
    const alertDelete = () =>{
        setShowAlert(true);
    }
        return (
        <> 
        {isadmin && <AddNote/>}
        {notices.length === 0 ? "No notices to display. Add Notice.":""}
        {   
            notices.map((value,index)=>{
            return(
                <div className="accordion" key={value._id} id="accordionExample" style={{width:'95%'}}>
                <div className="accordion-item">
                <h2 className="accordion-header" id={index}>
                    <button className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapse".concat(index)}
                    aria-expanded="false" 
                    aria-controls={"collapse".concat(index)}>
                    {value.title}
                    <div 
                    style={
                        {paddingLeft:'1rem',fontSize:'0.7rem',color:'var(--clr--grey)'}}>
                        {new Date(value.date).toDateString()}
                    </div>
                    </button>

                    <div className='actionitems'>
                        {isadmin && <UpdateSection noticeTitle={value.title} noticeUsernotice={value.usernotice} noticeID = {value._id}/>}
                        
                        {isadmin && <button className='actionicon icondelete' onClick={()=>{deleteNotice(value._id); alertDelete()}}>
                        <i className="fa-solid fa-trash"></i> Delete
                        </button>}
                    </div>
                    </h2>
                    <div id={"collapse".concat(index)} className="accordion-collapse collapse" 
                    aria-labelledby={"heading".concat(index)}
                    data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {value.usernotice}
                        </div>
                    </div>
                </div>
                {showAlert && <AlertMessage severe="warning" timeout="3000" message="Notice Deleted successfully!" />}
                </div>
                )
            })
        }
        </>
    )
}

