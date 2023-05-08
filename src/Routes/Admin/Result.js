import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import ResultSection from '../../Components/InnerComponents/ResultSection'

export default function Result() {

  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent name='Results 🗞️ ' description="Your results are here."/>
        <ResultSection/>
      </div>
    </div>
  )
}
