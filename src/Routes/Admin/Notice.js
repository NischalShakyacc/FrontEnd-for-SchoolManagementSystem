import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import NoticeSection from '../../Components/InnerComponents/NoticeSection'

export default function Notice() {
  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent name='Notice 📃' description='View all the notices here'
        button="+ New Notice"
        />
        <NoticeSection
        />
      </div>
    </div>
  )
}

