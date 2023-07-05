import React, { useContext, useEffect } from 'react'
import '../Styles/Marksheet.css'
import { useNavigate, useParams } from 'react-router-dom';
import StudentContext from '../../context/studentinfo/StudentContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Marksheet(props) {

    const result = props.data;

    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[]);

    const {userId} = useParams();
    const context = useContext(StudentContext);
    const {getStudentById, studentinfo} = context;

    const pdfGenerate = () => {
        const capture = document.querySelector('.marks'.concat(props.className));
        html2canvas(capture,{
            scale:3,
            dpi:200
        }).then((canvas)=>{
            const imgData = canvas.toDataURL('image/jpeg');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData,'JPEG', 0, 0, componentWidth, componentHeight);
            doc.save('Marksheet.pdf')
        })
    }

    useEffect(()=>{
        getStudentById(userId);
    },[]);
    
    return (
        <>

        <button onClick={pdfGenerate} className='export-btn'>
            <i className="fa-solid fa-download"></i>Export PDF
        </button>
        <div className={'marks'+props.className}>
        <article className='marksheet'>  
            <section className='topsectionmark'> 
                <div className='schoolname'> Delight School </div>
                <div className='schoolinfo'>Dholahiti, Lalitpur +01-555555 </div>

                <div className='line'></div>

                <div className='titleresult'>
                    {result.resulttitle}
                </div>
                <div className='schoolinfo'>
                    {new Date (result.date).toDateString()}
                </div>
                <div className='studentinfo'>
                    <div className='info'>
                    {'Name: ' + studentinfo.name}
                    </div>
                    <div className='info'>
                    {"Grade: " + studentinfo.grade}
                    </div>
                </div>
            </section>

            <section className='middlesection'>
            
            <div className='markssection'>
                <table >
                <thead>
                    <tr>
                        <td>S.N.</td>
                        <td>Subject</td>
                        <td>Marks</td>
                        <td>Full Marks</td>
                        <td>Pass Marks</td>
                        <td>Pass/Fail</td>
                    </tr>
                </thead>
                <tbody>
                {result.mark1 > 0 &&
                <tr>
                        <td>1</td>
                        <td>{result.subject1}</td>
                        <td>{result.mark1}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark1)}</td>
                    </tr>
                }
                {result.mark2 > 0 &&
                    <tr>
                        <td>2</td>
                        <td>{result.subject2}</td>
                        <td>{result.mark2}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark2)}</td>
                    </tr>
                }
                {result.mark3 >0 && 
                <tr>
                        <td>3</td>
                        <td>{result.subject3}</td>
                        <td>{result.mark3}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark3)}</td>
                    </tr>
                }
                {result.mark4 > 0 && <tr>
                        <td>4</td>
                        <td>{result.subject4}</td>
                        <td>{result.mark4}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark4)}</td>
                    </tr>
                }
                {result.mark5 > 0 && <tr>
                        <td>5</td>
                        <td>{result.subject5}</td>
                        <td>{result.mark5}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark5)}</td>
                    </tr>
                }
                {result.mark6 > 0 && <tr>
                        <td>6</td>
                        <td>{result.subject6}</td>
                        <td>{result.mark6}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark6)}</td>
                    </tr>
                }
                {result.mark7 > 0 && <tr>
                        <td>7</td>
                        <td>{result.subject7}</td>
                        <td>{result.mark7}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark7)}</td>
                    </tr>
                }
                    
                {result.mark8 > 0 && <tr>
                        <td>8</td>
                        <td>{result.subject8}</td>
                        <td>{result.mark8}</td>
                        <td>100</td>
                        <td>40</td>
                        <td>{checkPass(result.mark8)}</td>
                    </tr>
                }
                    
                    </tbody>
                </table>
                </div>
            </section>

            <div className='bottomsection' >
                <div className='total'>
                <div className='group'>
                    <div className='labels'>Total</div>
                    <div className='datas'>{result.total}</div>
                </div>
                <div className='group'>
                    <div className='labels'>Percentage</div>
                    <div className='datas'>{result.percentage + " %"}</div>
                </div>
                </div>
                <div className='remarksection'>
                    <div className='labels'>Remarks</div>
                    <div>{result.remarks}</div>
                </div>
            </div>

        </article>
        </div>
        </>
    )
}

const checkPass = (mark) =>{
    if(mark >= 40){
        return "Pass";
    }else{
        return "Fail";
    }
}