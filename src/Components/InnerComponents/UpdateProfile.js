import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from '../AlertMessage';

export default function UpdateSection(props) {

    //usingContext

    //for alert
    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const [userinfo,setUserinfo] = useState({
        ename: props.userName,
        ephone: props.userPhone,
        edob: props.userDob,
        eaddress: props.userAddress,
        egrade: props.userGrade,
        egender: ''
    })
    
    // To open and close model box
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //To update notice
    const handleUpdate = (e) =>{
        e.preventDefault();
        handleClose();
        setUserinfo({
            ename: userinfo.ename,
            ephone: userinfo.ephone,
            edob: userinfo.edob,
            eaddress: userinfo.eaddress,
            egrade: userinfo.egrade,
            egender: userinfo.egender
        });
        //console.log(userinfo);

        //updateNotice(notice.id, notice.ename, notice.eusernotice)
        setShowAlert(true);
    }
    //fucntions used
    const onchange = (e)=>{
        setUserinfo({...userinfo,[e.target.name]:e.target.value})
    }

    return (
        <>
        <Button className='header-btn iconedit ' onClick={handleShow}>
            <i className="fa-solid fa-pen-to-square" ></i>Edit Profile
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleUpdate}>
            <Modal.Body>
            <h4>Update Your Profile Here</h4>

                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" minLength={4} required placeholder="Enter Name" value={userinfo.ename} onChange={onchange} name='ename'  />
                    <Form.Text className="text-muted">
                    Name must be longer than 4 letters.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" minLength={4} required placeholder="Male / Female / Other" value={userinfo.egender} onChange={onchange} name='eaddress'  />
                    <Form.Text className="text-muted">
                        Gender must be Male or Female or Other.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" minLength={10} required placeholder="Enter Phone Number" value={userinfo.ephone} onChange={onchange} name='ephone'  />
                    <Form.Text className="text-muted">
                        Phone number must be 10 digits.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Date Of Birth</Form.Label>
                    <Form.Control type="date" placeholder="Enter Date of Birth" value={userinfo.edob} onChange={onchange} name='edob' />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" minLength={4} required placeholder="Enter Address" value={userinfo.eaddress} onChange={onchange} name='eaddress'  />
                    <Form.Text className="text-muted">
                        Address must be longer than 4 letters.
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="mb-3" >
                    <Form.Label>Grade</Form.Label>
                    <Form.Control type="text" minLength={10} required placeholder="Enter Grade" value={userinfo.egrade} onChange={onchange} name='egrade'/>
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button className="additem-btn icondelete" onClick={handleClose}>
                Close
            </Button>
            <Button className="additem-btn iconedit" type='submit'>
                Update Profile
            </Button>
            </Modal.Footer>
            </Form>
        </Modal>
        {showAlert && <AlertMessage severe="success" timeout="3000" message="Profile updated successfully!" />}
    </>
    );
}
