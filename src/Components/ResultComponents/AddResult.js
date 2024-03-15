import React, { useContext, useEffect,useState } from 'react';
import '../Styles/Result.css'
import HeaderComponent from '../InnerComponents/HeaderComponent';
import { useNavigate, useParams } from 'react-router-dom';
import ResultContext from '../../context/results/ResultContext';
import AlertMessage from '../AlertMessage';


export default function AddResult() {

    const [calculated,setCalculated] = useState(false);
    const [alert,setAlert] = useState(false);
    const [showsubmit,setShowsubmit] = useState(false);

    // ! if user not logged in redirect
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('token')){
            navigate('/login');
        }
    },[]);

    const {name} = useParams()

    const context = useContext(ResultContext);
    const {addResult} = context;

    const {userId} = useParams();
    const [result,setResult] =  useState(
        {
            resulttitle: '', 
            remarks: '', 
            subject1: '',
            subject2: '',
            subject3: '',
            subject4: '',
            subject5: '',
            subject6: '',
            subject7: '',
            subject8: '',
            mark1: '0',
            mark2: '0',
            mark3: '0',
            mark4: '0',
            mark5: '0',
            mark6: '0',
            mark7: '0',
            mark8: '0',
            total: '0', 
            percentage: '0',
            highest: '0',
        }
    );

    const createResult = (e) => {
        e.preventDefault();
        if(calculated) {
            addResult(
            userId, 
            result.resulttitle, 
            result.remarks, 
            result.subject1,
            result.subject2,
            result.subject3,
            result.subject4,
            result.subject5,
            result.subject6,
            result.subject7,
            result.subject8,
            result.mark1,
            result.mark2,
            result.mark3,
            result.mark4,
            result.mark5,
            result.mark6,
            result.mark7,
            result.mark8,
            result.total, 
            result.percentage );
            setShowsubmit(true);
        }else{
            setAlert(true);
        }
    }

    const onChange = (e) => {
        setResult({...result, [e.target.name]: e.target.value});
        setCalculated(false);
    };

    //Setting to false again
    useEffect(() => {
        if (alert) {
            setTimeout(() => {
                setAlert(false);
            }, 2500);
        }
        if (showsubmit) {
            setTimeout(() => {
                setShowsubmit(false);
            }, 2500);
        }
    }, [alert, showsubmit]);
    

    const handleMarks = (e) => {
        e.preventDefault();
        let mark1 = parseInt(result.mark1);
        let mark2 = parseInt(result.mark2);
        let mark3 = parseInt(result.mark3);
        let mark4 = parseInt(result.mark4);
        let mark5 = parseInt(result.mark5);
        let mark6 = parseInt(result.mark6);
        let mark7 = parseInt(result.mark7);
        let mark8 = parseInt(result.mark8);
        let total = 0;
        let highest = 0;

        if(mark2 !== 0){
            total += parseInt(mark2);
            highest += 100;
            console.log("this also ta")
        }
        if(mark1 !== 0){
            total += parseInt(mark1);
            highest += 100;
            console.log("this ran")
        }

        if(mark3!== 0){
            total += mark3;
            highest += 100;
        }
        if(mark4 !== 0){
            total += mark4;
            highest += 100;
        }
        if(mark5!== 0){
            total += mark5;
            highest += 100;
        }
        if(mark6 !== 0){
            total += mark6;
            highest += 100;
        }
        if(mark7 !==0){
            total += mark7;
            highest += 100;
        }
        if( mark8 !==0 ){
            total += mark8;
            highest += 100;
        }
        
        let nowpercentage = total / highest * 100;
        const formatted = nowpercentage.toFixed(2);
        setCalculated(true);
        setResult({...result, total: total, highest: highest,percentage: formatted});
    }
    
    return (
    <>
    <div id = 'innerHero'>
    <HeaderComponent name='Create Result ' description="Create result for a Student"/>
    <hr></hr>
    <h2 className='resultholder'>Result For: {name}</h2>
    
    <article style={{ height: '100%', width: '80%' }} className='card'> 
    
        <form onSubmit={createResult}>
            <section className='infosection'>
                <label htmlFor='resulttitle'> Add Result Title</label>
                <input type='text' id='resulttitle' placeholder='Final Exam' name='resulttitle' onChange={onChange} required minLength={5} />
                <p className='suggestion' > Terminal Exam / Final Exam</p>

                <label htmlFor='remarks'>Add Remarks</label>
                <textarea id='remarks' rows="4" cols="50" placeholder="Remarks here" name='remarks' onChange={onChange} required minLength={5} ></textarea>
                <p className='suggestion'>Describe the overall performance.</p>

        <div className='marksection'>
        <h5> Add Marks (Out of 100)</h5>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 1' className='subject' id='subject1' name='subject1'
            onChange={onChange} required
            />
            <input type='number' placeholder='Marks 1' className='marks' id='mark1' name='mark1'
            min={0}
            max={100}
            onChange={onChange} required
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 2' className='subject'
            id='subject2' name='subject2'
            onChange={onChange} 
            />
            <input type='number' placeholder='Marks 2' className='marks' id='mark2' name='mark2'
            min={0}
            max={100}
            onChange={onChange} 
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 3' className='subject' id='subject3' name='subject3'
            onChange={onChange} 
            
            /> 
            <input type='number' placeholder='Marks 3' className='marks' id='mark3' name='mark3'
            min={0}
            max={100}
            onChange={onChange} 
            />
        </div>
        
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 4' className='subject' id='subject4' name='subject4'
            onChange={onChange} 
            
            /> 
            <input type='number' placeholder='Marks 4' className='marks' id='mark4' name='mark4'
            min={0}
            max={100}
            onChange={onChange} 
            
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 5' className='subject'  id='subject5' name='subject5'
            onChange={onChange}
            
            />
            <input type='number' placeholder='Marks 5' className='marks' id='mark5' name='mark5'
            min={0}
            max={100}
            onChange={onChange}
            
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 6' className='subject'  id='subject6' name='subject6'
            onChange={onChange}
            
            />
            <input type='number' placeholder='Marks 6' className='marks' id='mark6' name='mark6'
            min={0}
            max={100}
            onChange={onChange} 
            
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 7' className='subject'  id='subject7' name='subject7'
            onChange={onChange}
            
            />
            <input type='number' placeholder='Marks 7' className='marks' id='mark7' name='mark7'
            min={0}
            max={100}
            onChange={onChange} 
            
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 8' className='subject'  id='subject8' name='subject8'
            onChange={onChange}
            
            />
            <input type='number' placeholder='Marks 8' className='marks'  id='mark8' name='mark8'
            min={0}
            max={100}
            onChange={onChange} 
            
            />
        </div>
        </div>

            <div className='totalsection'>
                <div className='totalitem'>Total</div>
                <div className='totalitem'>{result.total + "/" + result.highest}</div>
                <div className='totalitem'>Percentage</div>
                <div className='totalitem'>{result.percentage + "%"}</div>
            </div>
        </section>

        <button className='grid-button forgap' onClick={handleMarks} >Calculate Total and Percentage</button>
        <button className='grid-button' type='submit'>Create Result</button>
        </form>
        
        </article>
        </div>
        {alert && <AlertMessage severe="warning" timeout="2500" message="Calculate total and percentage by clicking on the button above." />}
        {showsubmit && <AlertMessage severe="success" timeout="2500" message="The marksheet has been published." />}
    </>
    );
}

