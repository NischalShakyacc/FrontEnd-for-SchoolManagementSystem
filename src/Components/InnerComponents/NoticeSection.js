import React, { useContext, useEffect } from 'react'
import NoticeContext from '../../context/notices/NoticeContext'
import "../Styles/NoticeResultSection.css"
import AddNote from './AddNote';
import UpdateSection from './UpdateSection'
//import AlertMessage from '../AlertMessage'

export default function NoticeSection() {
    const context = useContext(NoticeContext)
    const {notices, deleteNotice, fetchNotice} = context;
    useEffect(()=>{
        fetchNotice()
        // eslint-disable-next-line
    },[])

        return (
        <> 
        <AddNote/>
        {notices.length === 0 ? "No notices to display. Add Notice.":""}
        {   
            notices.map((value,index)=>{
            const d = new Date(value.date) 
            return(
                <div className="accordion" key={value._id} id="accordionExample" style={{width:'95%'}}>
                <div className="accordion-item">
                <h2 className="accordion-header" id={"heading".concat(index)}>
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
                        {d.toDateString()}
                    </div>
                    </button>

                    <div className='actionitems'>
                        <UpdateSection noticeTitle={value.title} noticeUsernotice={value.usernotice} noticeID = {value._id}/>
                        
                        <button className='actionicon icondelete' onClick={()=>{deleteNotice(value._id);}}>
                        <i className="fa-solid fa-trash"></i> Delete
                        </button>
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
                </div>
                )
            })
        }
        </>
    )
}