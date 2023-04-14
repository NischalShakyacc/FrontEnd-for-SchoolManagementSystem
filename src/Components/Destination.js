import React from 'react'
import "./Styles/Destination.css"
import DestinationData from './DestinationData'

import img1 from '../images/login.jpg'
import img2 from '../images/signup.jpg'

export default function Destination() {
    return (
    <div className='destination'>
        <h1>Name Pricipal</h1>
        <h2>Principal</h2>
        <p>
            The concept of in Maha Upanishad beautifully
        </p>

        <DestinationData
        cName="desc-first"
        heading="Rasimra Lamba"
        text=" The concept of वसुधैव कुटुम्बकम in Maha Upanishad beautifully captures the essence of our existence as being part of one family. The theme of the academic year 2022-23 reminds us that we are not only one family but we live i will livein a computer for a year and become a robot ja robot ja zoom zoom
        dsada sdas dasda sd asdda sd asd asdas d asd asd asd
        as sdasdsd asd ad ad asd ada sd asd asd asas das dasda da asd asd asd asd asd asda
        a sdas das dasd asd asd asd"
        image1 = {img1}
        image2 = {img2}
        />

        <DestinationData
        cName='desc-first-reverse'
        heading="Sunbil Lamba"
        text=" The concept of वसुधैव कुटुम्बकम in Maha Upanishad beautifully captures the essence of our existence as being part of one family. The theme of the academic year 2022-23 reminds us that we are not only one family but we live i will livein a computer for a year and become a robot ja robot ja zoom zoom
        dsada sdas dasda sd asdda sd asd asdas d asd asd asd
        as sdasdsd asd ad ad asd ada sd asd asd asas das dasda da asd asd asd asd asd asda
        a sdas das dasd asd asd asd"
        image1 = {img2}
        image2 = {img1}
        />
    </div>
    )
}
