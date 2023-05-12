import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/ProfileSection.css'

export default function ProfileSection() {
    
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
    const userInfo = {
        name:'Nischal Shakya',
        dob:'01/04/2002',
        address:'Gwarko,Lalitpur',
        grade:'10',
        phone:'85153150551',
        house:'Matterhorn/Yellow',
        fatherName : 'Nabin Shakya',
        fathersNumber : '8564684165165',
        motherName : 'Arina Shakya',
        mothersNumber : '8564684165165',
    }
    return (
    <div className='profile-section'>
        <div className='prf-image'>
        </div>
        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2}>

                <Grid item md={4} >
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Name: </span>
                            <span className='profile-field'>{userInfo.name}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Date of Birth: </span>
                            <span className='profile-field'>{userInfo.dob}</span>
                        </Item>
                    </div>
                </Grid>
                
                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Address: </span>
                            <span className='profile-field'>{userInfo.address}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={4}  md={3}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Grade: </span>
                            <span className='profile-field'>{userInfo.grade}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Phone: </span>
                            <span className='profile-field'>{userInfo.phone}</span>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={8}  md={5}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>House: </span>
                            <span className='profile-field'>{userInfo.house}</span>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={8}  md={3}>
                    <div className='profile-card-2'>
                        <Item  >
                            <span className='profile-label'>Father's Name: </span>
                            <span className='profile-field'>{userInfo.fatherName}</span>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={8}  md={3}>
                    <div className='profile-card-2'>
                        <Item  >
                            <span className='profile-label'>Father's Phone: </span>
                            <span className='profile-field'>{userInfo.fathersNumber}</span>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={8}  md={3}>
                    <div className='profile-card-2'>
                        <Item  >
                            <span className='profile-label'>Mother's Name: </span>
                            <span className='profile-field'>{userInfo.motherName}</span>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={8}  md={3}>
                    <div className='profile-card-2'>
                        <Item  >
                            <span className='profile-label'>Mother's Phone: </span>
                            <span className='profile-field'>{userInfo.mothersNumber}</span>
                        </Item>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </div>
    )
}
