import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Styles/EnrollmentForm.css'

export default function EnrollmentForm() {
  return (
<div className='enroll-box'>
    <div className='section'>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1.5, width: '22rem' },
            }}
            noValidate
            autoComplete="off"
            >
            <div>
            <h2 className='section-title'>Academic Information</h2>
                <h2 className='section-inner'>Name</h2>


                <TextField
                required
                id="outlined-required"
                label="First Name"
                />
                <TextField
                id="outlined-helperText"
                label="Middle Name"
                />
                <TextField
                required
                id="outlined-required"
                label="Last Name"
                />

                <h2 className='section-inner'>Gender</h2>
                <TextField
                required
                id="outlined-required"
                label="Gender"
                helperText='Male/Female/Other'
                />

                <h2 className='section-inner'>Address</h2>
                <TextField
                id="outlined-required"
                label="Street Address"
                />

                <TextField
                required
                id="outlined-number"
                label="Ward No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                id="outlined-required"
                label="City"
                />

                <TextField
                id="outlined-required"
                label="Country"
                />
                
                <TextField
                id="outlined-required"
                label="Nation"
                />

                <h2 className='section-inner'>Date of Birth</h2>
                <h2 className='section-part'>[B.S.]</h2>

                <TextField
                required
                id="outlined-required"
                label="Year"
                />

                <TextField
                required
                id="outlined-required"
                label="Month"
                />

                <TextField
                required
                id="outlined-required"
                label="Day"
                />
                <h2 className='section-part'>[A.D.]</h2>
                <TextField
                id="outlined-required"
                label="Year"
                />

                <TextField
                id="outlined-required"
                label="Month"
                />

                <TextField
                id="outlined-required"
                label="Day"
                /> 
                
                <h2 className='section-inner'>Parent's Information </h2>

                <TextField
                id="outlined-required"
                label="Father's Name"
                />

                <TextField
                id="outlined-number"
                label="Phone No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                id="outlined-required"
                label="Mother's Name"
                />

                <TextField
                id="outlined-number"
                label="Phone No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                
                <TextField
                id="outlined-required"
                label="Office Name"
                />

                <TextField
                id="outlined-number"
                label="Office Phone No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                required
                id="outlined-required"
                label="Guardian's Name"
                />

                <TextField
                required
                id="outlined-number"
                label="Guardian's Phone No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />

                <TextField
                required
                id="outlined-required"
                label="Guardian's Relation to Student"
                />

                <h2 className='section-inner'>Emergency</h2>
                <TextField
                required
                id="outlined-required"
                label="Name"
                helperText="Name of the person to contact in case of emergency."
                />
                <TextField
                required
                id="outlined-number"
                label="Phone No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                helperText="Number of the person to contact in case of emergency."
                />
                <TextField
                required
                id="outlined-required"
                label="Address"
                helperText="Address of the person to contact in case of emergency."
                />
                
                <h2 className='section-inner'>Previous School Attended, if any:</h2>

                <TextField
                id="outlined-required"
                label="School's Name"
                helperText="Name of the school"
                />
                <TextField
                id="outlined-required"
                label="School's Address"
                helperText="Address of the school"
                />

                <TextField
                id="outlined-number"
                label="School's Phone No:"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                helperText="Number of the person to contact in case of emergency."
                />
                
                <h2 className='section-questions'>Do you have any access requirements you would like us to be aware of?</h2>
                <TextField
                id="outlined-helperText"
                label="Access Requirements"
                helperText=" Do you have any access requirements you would like us to be aware of?(Abilities)"
                />

                <h2 className='section-questions'>Do you need transport Service?</h2>
                <TextField
                id="outlined-helperText"
                label="Address"
                helperText=" Address for pickup and drop."
                />

                <h2 className='section-inner'>Class for which admission is sought.</h2>
                <TextField
                required
                id="outlined-required"
                label="Grade"
                helperText="Grade to admit in."
                />

                <h2 className='section-title'>Disclaimer </h2>
                <p>I certify that my answers are true and complete to the best of my knowledge.</p>
                <p>We hereby agree to the rules and regulation mentioned in the prospectus of the school and fully entrust the school authorities and deciding the pupil's registration.</p>

                <TextField
                required
                id="outlined-required"
                label="Name"
                />
                <TextField
                required
                id="outlined-required"
                label="Date"
                helperText="(YYYY/MM/DD)"
                />
                <button className='grid-button'>Submit Form</button>
                

            </div>
        </Box>
    </div>
    </div>
    )
}
