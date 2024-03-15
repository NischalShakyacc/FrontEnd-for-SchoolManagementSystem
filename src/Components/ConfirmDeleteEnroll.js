import React,{ useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from './AlertMessage';

export default function ConfirmDeleteEnroll(props) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [deleteAlert, setDeleteAlert] = useState(false);
    useEffect(() => {
        if (deleteAlert) {
            setTimeout(() => {
                setDeleteAlert(false);
            }, 2500);
        }
    }, [deleteAlert]);

    const handleDelete = () => {
            setShow(false);
            const enrollId = props.enrollId;
            deleteEnroll(enrollId);
        }

        const deleteEnroll = async (id) => {
        const response = await fetch(`http://localhost:5000/api/enroll/deleteenroll/${id}`,{
            method: 'DELETE',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json);
        
        setDeleteAlert(true);
        window.location.reload();
    }

    return (
        <>
        <Button style={{marginBottom: '1rem'}} className='enroll-del-btn' onClick={handleShow}>
        <i className="fa-solid fa-trash"></i>
            Delete Form
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Delete Enrollment Form </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this form? </Modal.Body>
            <Modal.Footer>
            <Button className="header-btn iconedit" onClick={handleClose}>
                Close
            </Button>
            <Button className="header-btn" onClick={handleDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
        {deleteAlert && <AlertMessage severe="info" timeout="2500" message="The enrollment form has been deleted." />}
        </>

    )
}
