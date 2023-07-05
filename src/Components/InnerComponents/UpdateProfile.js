import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from '../AlertMessage';
import UserContext from '../../context/user/UserContext';

export default function UpdateSection(props) {

    //usingContext
    const context = useContext(UserContext);
    const {updateTeacher} = context;

    //for alert
    const [showAlert, setShowAlert] = useState(false);

    const [show, setShow] = useState(false);
    
    const [userinfo,setUserinfo] = useState({
        eid: props.userid,
        ename: '',
        ephone:'',
        edob: '',
        eaddress:'',
        egrade: '',
        egender: ''
    });
    
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

        updateTeacher(
            props.userid,
            userinfo.ename,
            userinfo.egender,
            userinfo.ephone,
            userinfo.edob,
            userinfo.eaddress, 
            userinfo.egrade
        );
        setShowAlert(true);
    }
    //fucntions used
    const onchange = (e)=>{
        setUserinfo({...userinfo,[e.target.name]:e.target.value})
    }

    //Setting to false again
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }
    }, [showAlert]);

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
                    <Form.Control type="text"  required placeholder="Male / Female / Other" value={userinfo.egender} onChange={onchange} name='egender'  />
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
                    <Form.Control type="text"  required placeholder="Enter Grade" value={userinfo.egrade} onChange={onchange} name='egrade'/>
                </Form.Group>
                <Form.Text className="text-muted">
                        Toddler / Nursery / K.G. / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10
                    </Form.Text>

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
