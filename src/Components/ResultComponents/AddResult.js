import React, { useState, useEffect } from 'react';

import '../Styles/Result.css'
import HeaderComponent from '../InnerComponents/HeaderComponent';
import { useParams } from 'react-router-dom';


export default function AddResult() {

    const {userId,name} = useParams()



    return (
    <>
    <div id = 'innerHero'>
    <HeaderComponent name='Create Result ' description="Create result for a Student"/>
    <hr></hr>
    <h2 className='resultholder'>Result For: {name}</h2>
    
    <article style={{ height: '100%', width: '80%' }} className='card'> 
    
        <form>
            <section className='infosection'>
                <label htmlFor='resultTitle'> Add Result Title</label>
                <input type='text' id='resultTitle' placeholder='Final Exam' />
                <p className='suggestion' > Terminal Exam / Final Exam</p>

                <label htmlFor='remarks'>Add Remarks</label>
                <textarea id='remarks' rows="4" cols="50" placeholder="Remarks here"></textarea>
                <p className='suggestion'>Describe the overall performance.</p>
            

        <div className='marksection'>
        <h5> Add Marks (Out of 100)</h5>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 1' className='subject'
            />
            <input type='number' placeholder='Marks 1' className='marks' 
            min={0}
            max={100}
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 2' className='subject'
            
            />
            <input type='number' placeholder='Marks 2' className='marks' 
            min={0}
            max={100}
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 3' className='subject'
            />
            <input type='number' placeholder='Marks 3' className='marks' 
            min={0}
            max={100}
            />
        </div>
        
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 4' className='subject'
            
            />
            <input type='number' placeholder='Marks 4' className='marks' 
            min={0}
            max={100}
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 5' className='subject'
            />
            <input type='number' placeholder='Marks 5' className='marks' 
            min={0}
            max={100}
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 6' className='subject' 
            />
            <input type='number' placeholder='Marks 6' className='marks' 
            min={0}
            max={100}
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 7' className='subject'
            />
            <input type='number' placeholder='Marks 7' className='marks' 
            min={0}
            max={100}
            />
        </div>
        <div className='subjectgroup'>
            <input type='text' placeholder='Subject 8' className='subject'
            />
            <input type='number' placeholder='Marks 8' className='marks' 
            min={0}
            max={100}
            />
        </div>
        </div>

            <div className='totalsection'>
                <div className='totalitem'>Total</div>
                <div className='totalitem'>{0}</div>
                <div className='totalitem'>Percentage</div>
                <div className='totalitem'>{0}</div>
            </div>
        </section>

        <button className='grid-button'>Create Result</button>
        </form>
        
        </article>
        </div>
    </>
    );
}

