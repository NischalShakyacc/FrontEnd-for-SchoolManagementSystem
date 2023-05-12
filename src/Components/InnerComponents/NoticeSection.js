import React from 'react'
import "../Styles/NoticeResultSection.css"

export default function NoticeSection() {
    const noticeInfo = [
        {
        key:1,
        title: 'School Re-opens',
        date:'10th March 2022',
        usernotice: `School reopens on Sunday, 15th March 2022`,
        number: 'One'
        },
        
        {
        key:2,
        title: 'Admission Open',
        date:'2nd February 2022',
        usernotice: `Admission Open for the Academic Session 2080
        PG to Grade 9
        Register Now! `,
            number: 'Two'
        },
        {
        key:2,
        title: 'School Location',
        date:'30th January 2022',
        usernotice: `We have some great news to share! From the new academic session 2080 we will be relocating to a new location! 
        able their overall development! `,
        number: 'Three'
        },
        {
        key:2,
        title: 'Saraswati Puja Location',
        date:'26 January 2022',
        usernotice: `Admissions Open! 
        On the auspicious day of Sarsaswati Puja enroll your child in our school and get Free Admission! 
        What better day to start your child’s learning journey than today, on Saraswati Puja  📖📚🖊️✍️`,
        number: 'Four'
        
        }
    ];
        return (
        <> 
        {
            noticeInfo.map((value,index)=>{
            return(
                
                <div className="accordion" id="accordionExample" style={{width:'95%'}}>
                <div className="accordion-item">
                <h2 class="accordion-header" id={"heading".concat(index)}>
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
                        {value.date}
                    </div>
                    <div className='actionitems'>
                        <i className='fa-solid fa-user-plus'></i>
                        <i className='fa-solid fa-message'></i>
                    </div>
                    </button>
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