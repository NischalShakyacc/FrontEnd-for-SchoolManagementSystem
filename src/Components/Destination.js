import React from 'react'
import "./Styles/Destination.css"
import DestinationData from './DestinationData'

import img1 from '../images/scholar.jpg'
import img2 from '../images/signup.jpg'

import img3 from '../images/login.jpg'
import img4 from '../images/student.jpg'

export default function Destination() {
    return (
    <div className='destination'>
        <hr></hr>
        <h1>"The roots of education are bitter, but the fruit is sweet."</h1>
        <p>
            -Aristotle
        </p>
        <hr></hr>

        <DestinationData
        cName="desc-first"
        heading="Rasimra Lama - Principal"
        text=" Our teachers and staff are the heart of our school community, and we are proud to have a team of dedicated and passionate educators. Check out our faculty page to learn more about our teachers' backgrounds, expertise, and interests."
        image1 = {img1}
        image2 = {img2}
        />

        <DestinationData
        cName='desc-first-reverse'
        heading="Our Motives"
        text='
        ✅ Curated Curriculum 
        ✅ Coductive and experientail learning environment
        ✅ Excellent extracurriculur facilities
        ✅ Highly qualifief and experienced teachers and staff
        '
        image1 = {img3}
        image2 = {img4}
        />
    </div>
    )
}
