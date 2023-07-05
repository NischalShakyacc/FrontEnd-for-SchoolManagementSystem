import React,{ useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import StudentContext from '../../context/studentinfo/StudentContext';
import '../Styles/Button.css'
import AlertMessage from '../AlertMessage'

export default function StduentModalBox(props) {

    const context = useContext(StudentContext);
    const {deleteStudent} = context;

    const [showAlert,setShowAlert] = useState(false);

    // for modal box
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () =>{
        setShow(false);
        setShowAlert(false);
        if(props.todo === 'delProfile'){
            deleteStudent(props.userid);
            setShowAlert(true)
            //window.location.reload()
        }
    }

    return (
    <>
        <Button className='delete-button' onClick={handleShow}>
        <i className="fa-solid fa-trash"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.question}</Modal.Body>
            <Modal.Footer>
            <Button className="header-btn iconedit" onClick={handleClose}>
                Cancel
            </Button>
            <Button className="header-btn" onClick={handleDelete}>
                {props.action}
            </Button>
            </Modal.Footer>
        </Modal>
        {showAlert && <AlertMessage severe="success" timeout="3000" message="Student User Deleted Successfully!" />}
    </>
    )
}
