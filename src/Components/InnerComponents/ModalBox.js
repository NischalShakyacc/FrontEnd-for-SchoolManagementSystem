import React,{ useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from '../../context/user/UserContext';

function ModalBox(props) {

    const context = useContext(UserContext);
    const {deleteTeacher} = context;

    // for modal box
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () =>{
        setShow(false);
        if(props.todo === 'delProfile'){
            
            //deleteTeacher(props.userid)
            
        }
    }
    return (
    <>
        <Button className='header-btn' onClick={handleShow}>
        {props.text}
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
        </>
    );
}

export default ModalBox;