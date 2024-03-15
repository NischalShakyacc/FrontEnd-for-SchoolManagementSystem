import React,{useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ResultContext from '../../context/results/ResultContext';

export default function ConfirmDeleteResult(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //* using Context
    const context = useContext(ResultContext);
    const {deleteResult} = context;

    const handleDelete = () => {
        setShow(false);
        const resultId = props.resultId;
        deleteResult(resultId);
    }

    return (
    <>
        <Button style={{marginBottom: '1rem'}} className='enroll-del-btn' onClick={handleShow}>
        <i className="fa-solid fa-trash"></i>
            Delete Result
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Delete Result </Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this result? </Modal.Body>
            <Modal.Footer>
            <Button className="header-btn iconedit" onClick={handleClose}>
                Close
            </Button>
            <Button className="header-btn" onClick={handleDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>
    </>
    )
}
