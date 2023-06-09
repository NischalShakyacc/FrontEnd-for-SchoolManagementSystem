import React, { useState } from 'react'
import StudentContext from './StudentContext'

export default function StudentState(props) {
    const host = "http://localhost:5000"

    const students = [
        {
            "_id": "647c6860ff8539ba829a223c",
            "username": "sudent",
            "password": "$2a$10$/9GMmQbQMGFqec.8r58q8emeUFrw1GrDvope5AUS5HG7Vs/YDQWQy",
            "name": "Nischal Edited",
            "address": "Kathmandu",
            "grade": "10",
            "gender": "Male",
            "usertype": "Student",
            "date": "2023-06-04T10:33:04.044Z",
            "__v": 0,
            "dob": "2002-03-31T18:15:00.000Z",
            "fathername": "Nabin",
            "fatherphone": "9841401174",
            "house": "Matterhorn",
            "mothername": "Arina",
            "motherphone": "9849103495",
            "phone": "9861884348"
        }
    ];

    const [studentinfo, setStudentinfo] = useState(students);

    //Get all students list
    const getStudents = async (classroom) =>{
        //API call
        
        const response = await fetch(`${host}/api/studentusers/getallstudent/${classroom}`,{
            method: 'GET',
            headers :{
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setStudentinfo(json);
    }

    //Delete Student Profile
    
    const deleteStudent = async (id) =>{
        console.log("deleting id "+ id)
        //Todo Api call
        const response = await fetch(`${host}/api/studentusers/deletestudent/${id}`,{
            method: 'DELETE',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        //console.log("deleted" + id)
        console.log(json)
        
        
        const newStudents = studentinfo.filter((student) => {return student._id !== id})
        setStudentinfo(newStudents)
        
    }
    

    //Update a user
    
    const updateStudent = async (id, name, dob, address, gender, phone, house, fathername, fatherphone, mothername, motherphone) =>{
        //API call

        const response = await fetch(`${host}/api/studentusers/updatestudent/${id}`,{
            method: 'PUT',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify(
                {
                    name, 
                    dob, 
                    address,
                    gender,  
                    phone, 
                    house, 
                    fathername, 
                    fatherphone, 
                    mothername, 
                    motherphone

                })
        });
        const json = await response.json();
        console.log(json)
        
        /*
        let updatedStudent = JSON.parse(JSON.stringify(studentinfo)) ;
        //updating
        for(let index = 0;index<updatedStudent.length;index++){
            const element = updatedStudent[index];
            if(element._id === id){
                updatedStudent[index].name = name;
                updatedStudent[index].dob  = dob;
                updatedStudent[index].address  = address;
                updatedStudent[index].gender  = gender;
                updatedStudent[index].phone  = phone;
                updatedStudent[index].house  = house;
                updatedStudent[index].fathername  = fathername;
                updatedStudent[index].fatherphone  = fatherphone;
                updatedStudent[index].mothername  = mothername;
                updatedStudent[index].motherphone  = motherphone;
                
            }
        }
        //setStudentinfo(updatedStudent)
        */
    }
    


    return (
        <StudentContext.Provider value={
                {
                    studentinfo, 
                    setStudentinfo,
                    getStudents,
                    updateStudent,
                    deleteStudent
                }
            }>
            {props.children}
        </StudentContext.Provider>
    )
}
