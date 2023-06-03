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
            },
            {
            "_id": "64789a3f7b3447c3d4cf3eb1",
            "username": "sdasdasdasdad",
            "password": "$2a$10$ujCzEVeyNXTM9Y4Yz75hLuP1kFzLcVLOYU9cpI59lxR6WVQbDENFm",
            "name": "Nischal Shakyaa",
            "usertype": "Admin",
            "date": "2023-06-01T13:16:47.738Z",
            "__v": 0
        },
        {
            "_id": "6462227a9f2a6e792015588b",
            "username": "whowhoo",
            "password": "$2a$10$fH1jls5iW5AuqhjQYC.kZ.yDR5PPKUIROzxab0rOqUuwrDfdB9JeK",
            "name": "nasdasdasda",
            "gender": "male",
            "usertype": "Admin",
            "date": "2023-05-15T12:15:54.348Z",
            "__v": 0
        },
        {
            "_id": "6460da9ce5e760860b3291b1",
            "username": "Studenteruser",
            "password": "$2a$10$4LvuHvie7T1JxP/Ur/zBaeKrirK9DWTBlSMChW2MVZ5TivnSn6nR6",
            "name": "nasdasdasda",
            "gender": "male",
            "usertype": "Admin",
            "date": "2023-05-14T12:57:00.300Z",
            "__v": 0
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


    //Get all notices
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
        console.log(json)

        const newTeacher = teachers.filter((teacher) => {return teacher._id !== id})
        setTeachersinfo(newTeacher)
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
            body: JSON.stringify({name, gender,phone,dob,address,grade})
        });
        const json = await response.json();
        console.log(json)


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

        //setTeachersinfo()
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