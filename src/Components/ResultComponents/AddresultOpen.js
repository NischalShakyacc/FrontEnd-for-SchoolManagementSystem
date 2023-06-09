import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../Styles/Button.css'
import AddResult from './AddResult';
import AddResultStudent from './AddResultStudent';

export default function AddresultOpen(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button className="action-button-add" onClick={handleShow}>
        <i className="fa-solid fa-plus"></i>
            Add Result
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Create Result </Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <h2> Result for {props.userName} </h2>
            
            <AddResultStudent/>
            

            </Modal.Body>

            <Modal.Footer>
            <Button className="action-button-view" onClick={handleClose}>
                Close
            </Button>
            <Button className="action-button-add" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}
