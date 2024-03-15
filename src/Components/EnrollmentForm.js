import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./Styles/EnrollmentForm.css";
import AlertMessage from './AlertMessage'

export default function EnrollmentForm() {

    const [showAlert, setShowAlert] = useState(false);
    const [showNot, setShowNot] = useState(false);
    
    const [enrollment,setEnrollment] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "",
        streetAddress: "",
        wardno: "",
        city: "",
        country: "",
        dob: "",
        fathername: "",
        fatherphone: "",
        mothername: "",
        motherphone: "",
        officename: "",
        officephone: "",
        guardianname: "",
        guardianphone: "",
        relation: "",
        emergencyname: "",
        emergencyphone: "",
        emergencyaddress: "",
        prevschool: "",
        prevschooladdress: "",
        prevschoolphone: "",
        accessrequirements: "",
        busaddress: "",
        grade:"",
        filler: "",
        date: "",

    });

    const onChange = (e)=>{
        setEnrollment({
            ...enrollment,
            [e.target.name]: e.target.value
        })
    }

    const addEnroll = async (enrollment)=>{    
        
        const response = await fetch(`http://localhost:5000/api/enroll/addenroll`,{
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(enrollment)
            });
        
        const json = await response.json();
        if(json.success){
            
            setShowAlert(true);
        }else{
            setShowNot(true);
        }
    }


    const handleSubmit  = (e)=>{
        e.preventDefault();
        addEnroll(enrollment);
    }

    //Setting to false again
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false);
            }, 2500);
        }
    }, [showAlert]);
    //Setting to false again
    useEffect(() => {
        if (showNot) {
            setTimeout(() => {
                setShowNot(false);
            }, 2500);
        }
    }, [showNot]);

    return (
        <div className="enroll-box">
        <div className="section">
            <Box
            sx={{
                "& .MuiTextField-root": { m: 1.5, width: "22rem" },
            }}
            noValidate
            autoComplete="off"
            >
            <div>
                <h2 className="section-title">Academic Information</h2>
                <h2 className="section-inner">Name</h2>

                <form onSubmit={handleSubmit}>
                <TextField required id="outlined-required firstName" name="firstName" label="First Name" onChange={onChange} minLength={4} />

                <TextField id="outlined-helperText middleName" label="Middle Name" name="middleName"  onChange={onChange} />

                <TextField minLength={4} required id="outlined-required lastName" label="Last Name" name="lastName" onChange={onChange}  />

                <h2 className="section-inner">Gender</h2>
                <TextField
                    required
                    id="outlined-required gender"
                    name="gender"
                    label="Gender"
                    helperText="Male/Female/Other"
                    onChange={onChange}
                />

                <h2 className="section-inner">Address</h2>
                <TextField 
                id="outlined-required streetAddress" 
                label="Street Address"  
                name="streetAddress"
                onChange={onChange}
                />

                <TextField
                    required
                    id="outlined-number wardno"
                    label="Ward No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    name="wardno"
                    onChange={onChange}
                    
                />

                <TextField 
                required
                id="outlined-required city "
                label="City" 
                name="city"
                onChange={onChange}
                
                />

                <TextField 
                required
                id="outlined-required country" 
                label="Country" 
                name="country"
                onChange={onChange}
                />

                <h2 className="section-inner">Date of Birth</h2>
                <h2 className="section-part">[B.S.]</h2>

                <input 
                type="date" 
                name="dob" 
                id="dob" 
                onChange={onChange}
                />

                <h2 className="section-inner">Parent's Information </h2>

                <TextField 
                id="outlined-required fathername" 
                label="Father's Name" 
                name="fathername" 
                onChange={onChange}
                />

                <TextField
                    id="outlined-number fatherphone"
                    label="Phone No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    name="fatherphone"
                    onChange={onChange}
                />

                <TextField 
                id="outlined-required mothername" 
                label="Mother's Name" 
                name="mothername"
                onChange={onChange}
                />

                <TextField
                    id="outlined-number motherphone"
                    label="Phone No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    name="motherphone"
                    onChange={onChange}
                />

                <TextField 
                id="outlined-required officename" 
                label="Office Name" 
                name="officename"
                onChange={onChange}
                />

                <TextField
                    id="outlined-number officephone"
                    label="Office Phone No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    name="officephone"
                    onChange={onChange}
                />

                <TextField
                    required
                    id="outlined-required guardianname"
                    label="Guardian's Name"
                    name="guardianname"
                    onChange={onChange}
                />

                <TextField
                    required
                    id="outlined-number guardianphone"
                    label="Guardian's Phone No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    name="guardianphone"
                    onChange={onChange}
                />

                <TextField
                    required
                    id="outlined-required relation"
                    label="Guardian's Relation to Student"
                    name="relation"
                    onChange={onChange}
                />

                <h2 className="section-inner">Emergency</h2>
                <TextField
                    required
                    id="outlined-required emergencyname" 
                    label="Name"
                    helperText="Name of the person to contact in case of emergency."
                    name="emergencyname"
                    onChange={onChange}
                />
                <TextField
                    required
                    id="outlined-number emergencyphone"
                    label="Phone No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    helperText="Number of the person to contact in case of emergency."
                    name="emergencyphone"
                    onChange={onChange}
                />
                <TextField
                    required
                    id="outlined-required emergencyaddress"
                    label="Address"
                    helperText="Address of the person to contact in case of emergency."
                    name="emergencyaddress"
                    onChange={onChange}
                />

                <h2 className="section-inner">
                    Previous School Attended, if any:
                </h2>

                <TextField
                    id="outlined-required prevschool"
                    label="School's Name"
                    helperText="Name of the school"
                    name="prevschool"
                    onChange={onChange}
                />
                <TextField
                    id="outlined-required prevschooladdress"
                    label="School's Address"
                    helperText="Address of the school"
                    name="prevschooladdress"
                    onChange={onChange}
                />

                <TextField
                    id="outlined-number prevschoolphone"
                    label="School's Phone No:"
                    type="number"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    helperText="Number of the person to contact in case of emergency."
                    name="prevschoolphone"
                    onChange={onChange}
                />

                <h2 className="section-questions">
                    Do you have any access requirements you would like us to be
                    aware of?
                </h2>
                <TextField
                    id="outlined-helperText accessrequirements"
                    label="Access Requirements"
                    helperText=" Do you have any access requirements you would like us to be aware of?(Abilities)"
                    name="accessrequirements"
                    onChange={onChange}
                />

                <h2 className="section-questions">
                    Do you need transport Service?
                </h2>
                <TextField
                    id="outlined-helperText busaddress"
                    label="Address"
                    helperText=" Address for pickup and drop."
                    name="busaddress"
                    onChange={onChange}
                />

                <h2 className="section-inner">
                    Class for which admission is sought.
                </h2>
                <TextField
                    required
                    id="outlined-required grade"
                    label="Grade"
                    helperText="Grade to admit in."
                    name="grade"
                    onChange={onChange}
                />

                <h2 className="section-title">Disclaimer </h2>
                <p>
                    I certify that my answers are true and complete to the best of
                    my knowledge.
                </p>
                <p>
                    We hereby agree to the rules and regulation mentioned in the
                    prospectus of the school and fully entrust the school
                    authorities and deciding the pupil's registration.
                </p>

                <TextField 
                required 
                id="outlined-required filler" 
                label="Name" 
                name="filler"
                onChange={onChange}
                />
                
                <button className="grid-button" type="submit">
                    Submit Form
                </button>
                </form>
            </div>
            </Box>
        </div>
        {showAlert && <AlertMessage severe="success" timeout="2500" message="Your enrollment form has been submitted." />}
        {showNot && <AlertMessage severe="info" timeout="2500" message="Your enrollment could not be submitted." />}
        </div>
    );
}
