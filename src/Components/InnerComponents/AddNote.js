import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import NoticeContext from "../../context/notices/NoticeContext";
import AlertMessage from '../AlertMessage';
import axios from 'axios'

export default function AddNote() {

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

    const handleAdd = (e) =>{
        e.preventDefault();
        //addNotice(notice.title, notice.usernotice);
        const formData = new FormData();
        formData.append('title', notice.title);
        formData.append('usernotice', notice.usernotice);
        formData.append('attachments', notice.attachments);

        axios.post('http://localhost:5000/api/notice/addnoticephoto',formData,
        config
        ).then(res=>{
        console.log(res)
            if(res){
            //send mail
            const config = {
                SecureToken : "7bfe5e2e-86df-4190-9d57-d0ac78a325cb",
                To : '019bim027@sxc.edu.np',
                From : "nischalshakyacc@gmail.com",
                Subject : `Delight School: ${notice.title}`,
                Body : notice.usernotice + 'For more details cgeck website.'
            }
            if(window.Email){
                window.Email.send(config).then(()=> alert("Email Sent"))
            }
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
            }, 1000);
        }
    }, [showAdded]);

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
                    rows="5"
                    placeholder="Enter Notice " 
                    onChange={onchange} 
                    name='usernotice'  
                    minLength={10} 
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

        {showAdded && <AlertMessage severe="success" timeout="3000" message="Notice Added Successfully!" />}

        </>
    )
}
