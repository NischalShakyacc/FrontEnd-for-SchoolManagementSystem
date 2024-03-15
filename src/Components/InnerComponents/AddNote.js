import React, { useContext, useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NoticeContext from "../../context/notices/NoticeContext";
import AlertMessage from '../AlertMessage';
import axios from 'axios';
import emailjs from '@emailjs/browser';

export default function AddNote() {
    //mail information
    const serviceId = "service_8j7ajgu";
    const templateId = "template_lks4yih";
    const publicKey = "Lr2uqPaOU1GVb5ccJ";

    const context = useContext(NoticeContext);
    const {addNotice} = context;

    const [notice,setNotice] = useState(
        {
            title:"",
            usernotice:"",
            attachments: ""
        }
    );

    //fucntions used
    const onchange = (e)=>{
        setNotice({...notice,[e.target.name]:e.target.value});
    }
    const fileAdded = (e)=>{
        setNotice({...notice, attachments :e.target.files[0]});
    }
    const config = {
    headers: { 'auth-token' : localStorage.getItem('token') }
    };

    const [showAdded,setShowAdded] = useState(false);
    const [showMail,setShowMail] = useState(false);

    const handleAdd = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', notice.title);
        formData.append('usernotice', notice.usernotice);
        formData.append('attachments', notice.attachments);

        axios.post('http://localhost:5000/api/notice/addnoticephoto',formData,
        config
        ).then(res=>{
        addNotice(notice.title, notice.usernotice);
            if(res){
            //send mail
            const config = {
                from_name: 'Delight School',
                from_email: '019bim027@sxc.edu.np',
                to_name: 'Students',
                message: notice.usernotice + '\n \n For more details check website.\nClick the link [http://localhost:3000/notice]',
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
                alert("Notice has been pulished.")
            }, (error) => {
                console.log(error.text);
            });
            
        }
        
        })
        .catch(err=>{
        console.log(err);
        })

        setShowAdded(true);
    }

    //Setting to false again
    useEffect(() => {
        if (showAdded) {
            setTimeout(() => {
                setShowAdded(false);
            }, 2500);
        }
    }, [showAdded]);

    useEffect(() => {
        if (showMail) {
            setTimeout(() => {
                setShowMail(false);
            }, 5000);
        }
    }, [showMail]);

    return (
        <>
        <div style={{width:'95%'}}>
        <Form onSubmit={handleAdd}  encType='multipart/form-data' >
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Notice Title" onChange={onchange} name='title' minLength={10} value={notice.title} required />
                <Form.Text className="text-muted">
                Title must be longer than 10 letters.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Notice</Form.Label>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    minLength={10}  
                    rows="5"
                    placeholder="Enter Notice " 
                    onChange={onchange} 
                    name='usernotice'  
                    value={notice.usernotice}
                    required
                />
                {/*
                <Form.Control type="text" placeholder="Enter Notice " onChange={onchange} name='usernotice'  minLength={10} required /> */}
                <Form.Text className="text-muted">
                    Notice must be longer than 10 letters.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Attach Image</Form.Label>
                <input 
                type="file" 
                onChange={fileAdded} 
                className="form-control"
                name='attachments'
                accept='.png, .jpg, .jpeg'
                />
            </Form.Group>
            <Button className='additem-btn' type="submit" >
                + Add Notice
            </Button>
        </Form>
        </div>
        {showAdded && <AlertMessage severe="info" timeout="4000" message="Notice has been sent successfully via email." />}
        
        {showAdded && <AlertMessage severe="success" timeout="2500" message="Notice Added Successfully!" />}
        </>
    )
}
