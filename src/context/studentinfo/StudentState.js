import React, { useState, useEffect } from 'react'
import StudentContext from './StudentContext'
import AlertMessage from '../../Components/AlertMessage';

export default function StudentState(props) {
    const host = "http://localhost:5000"

    const students = [
        {
            "_id": "647c6860ff8539ba829a223c",
            "username": "student",
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
    const [studentinfoById, setStudentinfoById] = useState(students);

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

        //Api call
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
    const [showMessage,setShowMessage] = useState(false);
    const [showErrorMessage,setErrorShowMessage] = useState(false);
    
    //Reset Update Alerts
    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 2500);
        }
    }, [showMessage]);

    useEffect(() => {
        if (showErrorMessage) {
            setTimeout(() => {
                setErrorShowMessage(false);
            }, 2500);
        }
    }, [showErrorMessage]);

    const updateStudent = async (id, name, dob, address, gender, phone, house, fathername, fatherphone, mothername, motherphone,email,grade) =>{
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
                    motherphone,
                    email,
                    grade
                })
        });
        const json = await response.json();
        if(json.success){
            setShowMessage(true);
            setStudentinfo(json.student);
            
        }else{
            setErrorShowMessage(true);
        }
    }

    //Get all students list
    const getStudentById = async (id) =>{
        //API call
        const response = await fetch(`${host}/api/studentusers/getstudent/${id}`,{
            method: 'GET',
            headers :{
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setStudentinfoById(json);
    }
    


    return (
        <>
        <StudentContext.Provider value={
                {
                    studentinfo, 
                    setStudentinfo,
                    getStudents,
                    updateStudent,
                    deleteStudent,
                    getStudentById,
                    studentinfoById
                }
            }>
            {props.children}
        </StudentContext.Provider>
        <div>
            {showMessage && <AlertMessage severe="success" timeout="2500" message="Profile updated successfully!" />}

            {showErrorMessage && <AlertMessage severe="error" timeout="2500" message="Profile could not be updated! Please Try Again" />}
        </div>
        </>
    )
}
