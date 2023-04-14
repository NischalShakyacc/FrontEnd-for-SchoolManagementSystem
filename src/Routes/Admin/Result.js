import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import ResultSection from '../../Components/InnerComponents/ResultSection'

export default function Result() {
  const resultInfo = [
    {
    key:1,
    title: 'Result 2019 ',
    number: 'One',
    date:'1st January 2022',
    description: `This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`,
    
    },
    
    {
    key:2,
    title: 'Mid term Result',
    number: 'Two',
    date:'1st January 2022',
    description: ``,
    
    }
  ];

  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent name='Results 🗞️ ' description="Your results are here."/>
        <ResultSection
        data={resultInfo}
        />
      </div>
    </div>
  )
}
