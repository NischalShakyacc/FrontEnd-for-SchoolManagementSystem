import React from 'react'

export default function NoticeSection(props) {
        return (
        <> 
        {
            (props.data).map((value,index)=>{
            return(
                
                <div className="accordion" id="accordionExample" style={{width:'95%'}}>
                <div className="accordion-item">
                <h2 class="accordion-header" id={"heading".concat(value.number)}>
                    <button className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapse".concat(value.number)}
                    aria-expanded="false" 
                    aria-controls={"collapse".concat(value.number)}>
                    {value.title}
                    <div 
                    style={
                        {paddingLeft:'1rem',fontSize:'0.7rem',color:'var(--clr--grey)'}}>
                        {value.date}
                    </div>
                    </button>
                </h2>
                    <div id={"collapse".concat(value.number)} className="accordion-collapse collapse" 
                    aria-labelledby={"heading".concat(value.number)}
                    data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {value.description}
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