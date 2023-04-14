import React from 'react'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'
import NoticeSection from '../../Components/InnerComponents/NoticeSection'

export default function Notice() {
  const noticeInfo = [
    {
    key:1,
    title: 'School opens',
    date:'1st January 2022',
    description: `This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`,
    number: 'One'
    },
    
    {
    key:2,
    title: 'School opens',
    date:'1st January 2022',
    description: `This is the first items accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.`,
    number: 'Two'
    }
  ];
  return (
    <div>
      <div id='innerHero'>
        <HeaderComponent name='Notice 📃' description='View all the notices here'
        button="+ New Notice"
        />
        <NoticeSection data={noticeInfo}
        />
      </div>
    </div>
  )
}

