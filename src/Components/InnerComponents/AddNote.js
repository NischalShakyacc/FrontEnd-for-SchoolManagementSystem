import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NoticeContext from "../../context/notices/NoticeContext"

export default function AddNote() {
    const context = useContext(NoticeContext);
    const {addNotice} = context;

    const [notice,setNotice] = useState({
        title:"",
        usernotice:""
    })

    //fucntions used
    const onchange = (e)=>{
        setNotice({...notice,[e.target.name]:e.target.value})
    }
    const handleAdd = (e) =>{
        e.preventDefault();
        addNotice(notice.title, notice.usernotice)
    }

    return (
        <>
        <div style={{width:'95%'}}>
        <Form onSubmit={handleAdd}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Notice Title" onChange={onchange} name='title' minLength={10}  />
                <Form.Text className="text-muted">
                Title must be longer than 10 letters.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Notice</Form.Label>
                <Form.Control type="text" placeholder="Enter Notice " onChange={onchange} name='usernotice'  minLength={10}  />
                <Form.Text className="text-muted">
                    Notice must be longer than 10 letters.
                </Form.Text>
            </Form.Group>
            <Button className='additem-btn' type="submit" >
                + Add Notice
            </Button>
        </Form>
        </div>
        </>
    )
}
