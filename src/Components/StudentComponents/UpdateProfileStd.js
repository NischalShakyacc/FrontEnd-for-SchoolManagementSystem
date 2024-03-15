import React, { useContext, useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import AlertMessage from '../AlertMessage';
import StudentContext from '../../context/studentinfo/StudentContext';


export default function UpdateProfileStd(props) {

    //usingContext
    const context = useContext(StudentContext);
    const {updateStudent} = context;

    //for alert
    const [showGenderalert, setShowGenderalert] = useState(false);
    const [showGradealert, setShowGradealert] = useState(false);
    const [showHousealert, setShowHousealert] = useState(false);

    //Setting to false again
    useEffect(() => {
        if (showGradealert) {
            setTimeout(() => {
                setShowGradealert(false);
            }, 2500);
        }
    }, [showGradealert]);

    useEffect(() => {
        if (showGenderalert) {
            setTimeout(() => {
                setShowGenderalert(false);
            }, 2500);
        }
    }, [showGenderalert]);

    useEffect(() => {
        if (showHousealert) {
            setTimeout(() => {
                setShowHousealert(false);
            }, 2500);
        }
    }, [showHousealert]);

    //Validation 
    const validate = (gender, grade, house) => {
        const genders = ['Male', 'Female', 'Other'];
        const classes = ['Toddler','Nursery','KG','1','2','3','4','5','6','7','8','9','10'];
        const houses = ['Yellow', 'Blue','Green','Red','Matterhorn','Everest','Kanchanjunga','Fujiyama'];

        if(!genders.includes(gender)){
            setShowGenderalert(true)
            return false;
        }
        if(!classes.includes(grade)){
            setShowGradealert(true);
            return false;
        }
        if(!houses.includes(house)){
            setShowGradealert(true);
            return false;
        }
        return true;
    }

    const [show, setShow] = useState(false);
    const [userinfo,setUserinfo] = useState({
        eid: props.userid,
        ename: '',
        ephone:'',
        edob: '',
        eaddress:'',
        egender: '',
        efathername: '',
        efatherphone: '',
        emothername: '',
        emotherphone: '',
        ehouse: '',
        egrade: '',
        eemail: ''
    });
    
    // To open and close model box
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //To update notice
    const handleUpdate = (e) =>{
        e.preventDefault();

        const validity = validate(userinfo.egender,userinfo.egrade,userinfo.ehouse);

        setUserinfo({
            ename: userinfo.ename,
            ephone: userinfo.ephone,
            edob: userinfo.edob,
            eaddress: userinfo.eaddress,
            egender: userinfo.egender,
            efathername: userinfo.efathername,
            efatherphone: userinfo.efatherphone,
            emothername: userinfo.emothername,
            emotherphone: userinfo.emotherphone,
            ehouse: userinfo.ehouse,
            egrade: userinfo.egrade,
            eemail: userinfo.eemail
        });
        //console.log(userinfo);

        if(validity){
            updateStudent(
            props.userid,
            userinfo.ename,
            userinfo.edob,
            userinfo.eaddress,
            userinfo.egender,
            userinfo.ephone, 
            userinfo.ehouse, 
            userinfo.efathername, 
            userinfo.efatherphone, 
            userinfo.emothername, 
            userinfo.emotherphone, 
            userinfo.eemail, 
            userinfo.egrade 
        );
        handleClose();
        }
    }

    //fucntions used
    const onchange = (e)=>{
        setUserinfo({...userinfo,[e.target.name]:e.target.value})
    }

    return (
    <div>
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
                    <Form.Label>Grade</Form.Label>
                    <Form.Control type="text"  required placeholder="Enter Grade" value={userinfo.egrade} onChange={onchange} name='egrade'/>
                </Form.Group>
                <Form.Text className="text-muted">
                        Toddler / Nursery / KG / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10
                </Form.Text>

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
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required placeholder="Enter Email." value={userinfo.eemail} onChange={onchange} name='eemail'  />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>House</Form.Label>
                    <Form.Control type="text" required placeholder="Enter House" value={userinfo.ehouse} onChange={onchange} name='ehouse'  />
                    <Form.Text className="text-muted">
                        Matterhorn / Everest / Kanchanjunga / Fujiyama
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Father's Name</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Father's Name" value={userinfo.efathername} onChange={onchange} name='efathername'  />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Father's Phone Number</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Father's Phone Number" value={userinfo.efatherphone} onChange={onchange} name='efatherphone'  />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mother's Name</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Mother's Name" value={userinfo.emothername} onChange={onchange} name='emothername'  />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Mother's Phone Number</Form.Label>
                    <Form.Control type="text" required placeholder="Enter Mother's Phone Number" value={userinfo.emotherphone} onChange={onchange} name='emotherphone'  />
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

            {showGenderalert && <AlertMessage severe="error" timeout="2500" message="Gender should be Male Female or Other" />}
            {showGradealert && <AlertMessage severe="error" timeout="2500" message="Grade should be (Toddler / Nursery / KG / 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9 / 10)" />}
            {showHousealert && <AlertMessage severe="error" timeout="2500" message="Grade should be (House should be 'Yellow'/'Blue'/'Green'/'Red'/'Matterhorn'/'Everest'/'Kanchanjunga'/'Fujiyama'." />}
        </Modal>
    </>
    </div>
    )
}
