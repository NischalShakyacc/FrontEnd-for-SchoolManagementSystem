import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
//import resultContext from '../../context/results/ResultContext'

export default function ResultSection() {

    const navigate = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('token')){
            //fetchUserinfo();
        }else{
            navigate('/login');
        }
    },[]);

    const resultsInitial=[
    {
    "_id": "64525a08dbb2891993671499",
        "user": "6443ddec555711926c9adbe1",
        "name": "1st Term Result",
        "userresult": "Your result here",
        "date": "2023-05-03T12:56:40.111Z",
        "__v": 0
    },
    {
        "_id": "64586d3da9a8ea845f031a3a",
        "user": "6443ddec555711926c9adbe1",
        "name": "Mid Term Result",
        "userresult": "New Result 123456789",
        "date": "2023-05-08T03:32:13.926Z",
        "__v": 0
    },
    {
        "_id": "645871bb8d56a957db29f2c5",
        "user": "6443ddec555711926c9adbe1",
        "name": "Final Term Result",
        "userresult": "New Result 123456789",
        "date": "2023-05-08T03:51:23.145Z",
        "__v": 0
    },
    {
        "_id": "645875883cdc4231d8be3ceb",
        "user": "6443ddec555711926c9adbe1",
        "name": "Boards Examination Result",
        "userresult": "New Result 123456789",
        "date": "2023-05-08T04:07:36.930Z",
        "__v": 0
    }
];
        return (
        <> 
        {
            resultsInitial.map((value,index)=>{
            return(
                
                <div className="accordion" id="accordionExample" style={{width:'95%'}}>
                <div className="accordion-item">
                <h2 className="accordion-header" id={"heading".concat(index)}>
                    <button className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={"#collapse".concat(index)}
                    aria-expanded="false" 
                    aria-controls={"collapse".concat(index)}>
                    {value.name}
                    <div 
                    style={
                        {paddingLeft:'1rem',fontSize:'0.7rem',color:'var(--clr--grey)'}}>
                        {value.date}
                    </div>
                    </button>
                </h2>
                    <div id={"collapse".concat(index)} className="accordion-collapse collapse" 
                    aria-labelledby={"heading".concat(index)}
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                            {value.userresult}
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