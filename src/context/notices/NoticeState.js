import React, { useState, useEffect } from "react";
import NoticeContext from "./NoticeContext";
import AlertMessage from "../../Components/AlertMessage";
import emailjs from '@emailjs/browser'

const NoticeState = (props) =>{
    //mail information
    const serviceId = "service_8j7ajgu";
    const templateId = "template_lks4yih";
    const publicKey = "Lr2uqPaOU1GVb5ccJ";

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
    
    const addNotice = (title,usernotice) =>{
        const addedNotice = {
            "_id": '6666asdasd',
            "title": title,
            "usernotice": usernotice,
            "date": Date.now(),
            "__v": 0
        }
        setNotices(notices.concat(addedNotice))
    }
    //Add a notice
    /*
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
        
        if(json.success){
            //send mail
            
            const config = {
                SecureToken : "7bfe5e2e-86df-4190-9d57-d0ac78a325cb",
                To : '019bim027@sxc.edu.np',
                From : "nischalshakyacc@gmail.com",
                Subject : `Notice From Delight School: ${title}`,
                Body : usernotice
            }
            if(window.Email){
                window.Email.send(config).then(()=> alert("Email Sent"))
            }
        }

        //adding note
        const addedNotice = {
            "_id": json.savedNotice._id,
            "title": title,
            "usernotice": usernotice,
            "date": json.savedNotice.date,
            "__v": 0
        }
        setNotices(notices.concat(addedNotice))
        
        return (json)
    }*/

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

    //Alert Message Handler
    const [updatemail, setUpdatemail] = useState(false);
    useEffect(() => {
        if (updatemail) {
            setTimeout(() => {
                setUpdatemail(false);
            }, 4000);
        }
    }, [updatemail]);
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
        
        if(json.success){
            //send mail
            const config = {
                from_name: 'Delight School',
                from_email: '019bim027@sxc.edu.np',
                to_name: 'Students',
                message: usernotice + '\n[Updated Notice] \n For more details check website.\nClick the link [http://localhost:3000/notice]',
                /*
                SecureToken : "7bfe5e2e-86df-4190-9d57-d0ac78a325cb",
                To : '019bim027@sxc.edu.np',
                From : "nischalshakyacc@gmail.com",
                Subject : `Delight School: ${notice.title}`,
                Body : notice.usernotice + '\n For more details check website.Click the link [http://localhost:3000/notice]'*/
            }
            emailjs.send(serviceId, templateId, config, publicKey)
            .then((result) => {
                console.log(result.text);
                alert("Updated notice has been pulished.")
            }, (error) => {
                console.log(error.text);
            });
        }

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
        <>
            <NoticeContext.Provider 
                value={{notices,setNotices,addNotice,deleteNotice, updateNotice,fetchNotice}}>
                {props.children}
            </NoticeContext.Provider>
            <div>
                {updatemail && <AlertMessage severe="info" timeout="4000" message="Updated notice has been sent successfully via email." />}
            </div>
        </>
    )
}

export default NoticeState;