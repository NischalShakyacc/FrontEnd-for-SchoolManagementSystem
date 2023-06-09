import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) =>{
    const host = "http://localhost:5000"
    const userInfo = [
    {
        "_id": "What",
        "username": "",
        "name": "",
        "gender": "",
        "usertype": "",
        "date": "",
        "__v": 0
    }
    ];

    const teachers = [
        {
            "_id": {
                "$oid": "6479e148b2d04d8ecbea364e"
            },
            "username": "Admin",
            "password": "$2a$10$xxQML28SaMeEQ8V./ynyD.kRoyIv2esOrr2yKXKo4YOxfbJDJrNtq",
            "name": "Nischal",
            "address": "Lalitpur",
            "gender": "Male",
            "usertype": "Admin",
            "date": {
                "$date": "2023-06-02T12:32:08.962Z"
            },

            "__v": 0,
            "dob": {
                "$date": "2002-03-31T18:15:00.000Z"
            },
            "grade": "10",
            "phone": "9841401174"
        }
    ]

    const [userinfo, setUserinfo] = useState(userInfo);
    //Get a teacher
    const fetchUserinfo = async () =>{
        //API call
        const response = await fetch(`${host}/api/auth/getuser`,{
            method: 'POST',
            headers :{
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setUserinfo(json);
    }

    /*
    ---------------------
    All teacher info 
    ---------------------
    */

    const [teachersinfo, setTeachersinfo ] = useState(teachers);


    //Get all teachers list
    const getTeachers = async () =>{
        //API call
        const response = await fetch(`${host}/api/users/getallteacher`,{
            method: 'GET',
            headers :{
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setTeachersinfo(json);
    }

    //Delete Teacher Profile
    const deleteTeacher = async (id) =>{
        //Todo Api call
        const response = await fetch(`${host}/api/users/deleteteacher/${id}`,{
            method: 'DELETE',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        //console.log("deleted" + id)
        console.log(json)
        
        /*
        const newTeacher = teachers.filter((teacher) => {return teacher._id !== id})
        setTeachersinfo(newTeacher)
        */
    }

    //Update Teacher Profile
    const updateTeacher = async (id, name, gender, phone, dob, address, grade) => {
        //Api call
        const response = await fetch(`${host}/api/users/updateteacher/${id}`,{
            method: 'PUT',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify(
                {
                    name, 
                    gender,
                    phone,
                    dob,
                    address,
                    grade
                })
        });
        
        const json = await response.json();
        console.log(json)
        
        /*
        for(let index = 0;index <teachersinfo.length; index++){
            const element = teachersinfo[index];
            if(element._id === id){
                element.name = name;
                element.gender = gender;
                element.phone = phone;
                element.dob = dob;
                element.address = address;
                element.grade = grade;
            }
        }
        */

    }



    return(
    <UserContext.Provider value={
        {
            userinfo,
            setUserinfo,
            fetchUserinfo,
            teachersinfo,
            setTeachersinfo,
            deleteTeacher,
            updateTeacher,
            getTeachers,
        }
    }>
    {props.children}
    </UserContext.Provider>
    )
}

export default UserState;