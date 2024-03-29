import React, { useContext, useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import NoticeContext from '../../context/notices/NoticeContext';
import AlertMessage from '../AlertMessage';
import "../Styles/NoticeResultSection.css";

export default function UpdateSection(props) {

    //usingContext
    const context = useContext(NoticeContext);

    const {updateNotice} = context

    //for alert
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false);
            }, 2500);
        }
    }, [showAlert]);

    const [show, setShow] = useState(false);
    
    const [notice,setNotice] = useState({
        etitle: props.noticeTitle,
        eusernotice: props.noticeUsernotice,
        id: props.noticeID
    })
    // To open and close model box
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //To update notice
    const handleUpdate = (e) =>{
        e.preventDefault();
        handleClose();
        setNotice({
            etitle: notice.etitle,
            eusernotice: notice.eusernotice,
            id: notice.id
        });

        updateNotice(notice.id, notice.etitle, notice.eusernotice)
        setShowAlert(true);
    }
    //fucntions used
    const onchange = (e)=>{
        setNotice({...notice,[e.target.name]:e.target.value})
    }

    return (
        <>
        <Button className='actionicon iconedit' onClick={handleShow}>
            <i className="fa-solid fa-pen-to-square" ></i>Edit
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Notice 
            <span role="img" aria-label="notice">📝</span> 
            </Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleUpdate}>
            <Modal.Body>
            <h4>You can edit here</h4>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" minLength={10} required placeholder="Enter Notice Title" value={notice.etitle} onChange={onchange} name='etitle'  />
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
                    minLength={10} 
                    required 
                    placeholder="Enter Notice" 
                    value={notice.eusernotice} 
                    onChange={onchange} 
                    name='eusernotice'  
                    />
                    <Form.Text className="text-muted">
                        Notice must be longer than 10 letters.
                    </Form.Text>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button className="additem-btn icondelete" onClick={handleClose}>
                Close
            </Button>
                <Button className="additem-btn iconedit" type='submit'>
                    Update Notice
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
        {showAlert && <AlertMessage severe="success" timeout="2500" message="Notice updated successfully!" />}
    </>
    );
}
