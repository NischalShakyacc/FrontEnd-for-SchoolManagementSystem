import React from 'react'
import TableArea from '../../Components/InnerComponents/TableArea'
import HeaderComponent from '../../Components/InnerComponents/HeaderComponent'

export default function TeacherList() {
    return (
        <div>
            <div id='innerHero'>
                <HeaderComponent 
                    name="Teacher List" 
                    description="All teachers in the School." 
                    button="+ Add Account"
                    url="/newaccount"
                />
                <TableArea/>
            </div>
        </div>
    )
}
