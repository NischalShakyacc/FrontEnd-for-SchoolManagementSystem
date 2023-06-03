import React, { useState } from "react";
import NoticeContext from "./NoticeContext";

const NoticeState = (props) =>{
    const host = "http://localhost:5000"
    const noticeInfo = [
    {
        "_id": "645d025e73adasd5d2c65897be0",
        "title": "Sample Notice Title.",
        "usernotice": "Sample Notice",
        "date": "2023-05-11T14:57:34.345Z",
        "__v": 0
    }
    ];

    const [notices, setNotices] = useState(noticeInfo)

    //Get all notices
    const fetchNotice = async () =>{
        //API call
        const response = await fetch(`${host}/api/notice/fetchnotice`,{
            method: 'GET',
            headers :{
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotices(json)
    }


    //Add a notice
    const addNotice = async (title,usernotice) =>{
        //API call
        const response = await fetch(`${host}/api/notice/addnotice/`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({title,usernotice})
        });
        
        const json = await response.json();
        //console.log(json)

        //adding note
        const addedNotice = {
            "_id": json._id,
            "title": title,
            "usernotice": usernotice,
            "date": "2023-05-12T06:20:03.753Z",
            "__v": 0
        }
        setNotices(notices.concat(addedNotice))
    }

    //Delete a notice gadbad
    const deleteNotice = async (id) =>{
        //API call
        const response = await fetch(`${host}/api/notice/deletenotice/${id}`,{
            method: 'DELETE',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json)
        //deleting
        let newNotices = notices.filter((notice)=>{return notice._id !== id})
        setNotices(newNotices)

    }

    //Update a notice
    const updateNotice = async (id,title,usernotice) =>{
        //API call
        const response = await fetch(`${host}/api/notice/updatenotice/${id}`,{
            method: 'PUT',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({title, usernotice})
        });
        const json = await response.json();
        console.log(json)

        let updatedNotice = JSON.parse(JSON.stringify(notices)) ;
        //updating
        for(let index = 0;index<updatedNotice.length;index++){
            const element = updatedNotice[index];
            if(element._id === id){
                updatedNotice[index].title = title;
                updatedNotice[index].usernotice  = usernotice;
                break;
            }
        }
        setNotices(updatedNotice)
    }

    return(
    <NoticeContext.Provider value={{notices,setNotices,addNotice,deleteNotice, updateNotice,fetchNotice}}>
            {props.children}
        </NoticeContext.Provider>
    )
}

export default NoticeState;