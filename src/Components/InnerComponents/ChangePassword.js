import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from '../AlertMessage';

export default function ChangePassword(props) {
    
    //Modals
    const [show,setShow] = useState(false);
    // To open and close model box
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //* Alerts
    const [passwordMatch,setPasswordMatch] = useState(false);

    //Setting to false again
    useEffect(() => {
        if (passwordMatch) {
            setTimeout(() => {
                setPasswordMatch(false);
            }, 2500);
        }
    }, [passwordMatch]);

    const [showInvalid,setShowInvalid] = useState(false);

    //Setting to false again
    useEffect(() => {
        if (showInvalid) {
            setTimeout(() => {
                setShowInvalid(false);
            }, 2500);
        }
    }, [showInvalid]);

    const [showChanged,setShowChanged] = useState(false);

    //Setting to false again
    useEffect(() => {
        if (showChanged) {
            setTimeout(() => {
                setShowChanged(false);
            }, 2500);
        }
    }, [showChanged]);

    const [passwordinfo,setPasswordinfo] = useState({

        id: '',
        currentpassword:'',
        newPassword: '',
        rePassword: ''
    });

    //Check Password match
    const checkMatch = (newPassword, rePassword) =>{
        if(newPassword === rePassword){
            return true
        }
        setPasswordMatch(true);
        return false;
    }

    //To update password
    const handleUpdate = (e)=>{
        e.preventDefault();

        //Validate new password
        const match = checkMatch(passwordinfo.newPassword, passwordinfo.rePassword)

        if(match) {
            updatePassword(passwordinfo.id,passwordinfo.currentpassword,passwordinfo.newPassword);
            return
        }

        //code to update password
    }

    //Api call to change password
    const updatePassword = async (id, currentpassword, newPassword) => {
        //Api call
                
        const response = await fetch("http://localhost:5000/api/auth/changepassword",{
            method: 'PUT',
            headers :{
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify(
                {
                    id,
                    currentpassword,
                    newPassword
                })
        });
        
        const json = await response.json();
        if(json.success){
            setShowChanged(true);
            handleClose();
        }else{
            setShowInvalid(true);
        }
    }

    //When change
    const onchange = (e)=>{
        setPasswordinfo({...passwordinfo,[e.target.name]:e.target.value,    id:props.userid});
    }

    return (
        <>
            <Button style={{
                backgroundColor: 'var(--clr--blue)',
                color: 'var(--clr--white)'
            }} 
            className='header-btn iconedit' onClick={handleShow}>
                New Password
            </Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Change Password</Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleUpdate}>
            <Modal.Body>
            <h4>Update your password.</h4>
            
                <Form.Group className="mb-3">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control type="password" minLength={5} required placeholder="Enter Current Password" value={passwordinfo.currentpassword} onChange={onchange} name='currentpassword'  />
                    <Form.Text className="text-muted">
                    Enter Current Password.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type="password"  minLength={5} required placeholder="New Password" value={passwordinfo.newPassword} onChange={onchange} name='newPassword'  />
                    <Form.Text className="text-muted">
                        Passowrd must be greater than 5 characters.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Re-Type Password</Form.Label>
                    <Form.Control type="password" minLength={5} required placeholder="Re-Type Password" value={passwordinfo.rePassword} onChange={onchange} name='rePassword'  />
                </Form.Group>

            </Modal.Body>
            <Modal.Footer>
            <Button className="additem-btn icondelete" onClick={handleClose}>
                Close
            </Button>
            <Button className="additem-btn iconedit" type='submit'>
                Confirm
            </Button>
            </Modal.Footer>
            </Form>
            <div>
                {passwordMatch && <AlertMessage severe="warning" timeout="2500" message="Please check the password and the re-typed password." />}
            </div>
            <div>
                {showInvalid && <AlertMessage severe="error" timeout="2500" message="Try again. Your password is incorrect." />}
            </div>
        </Modal>
        {showChanged && <AlertMessage severe="info" timeout="3000" message="Your password has been changed." />}
        </>
    )
}
