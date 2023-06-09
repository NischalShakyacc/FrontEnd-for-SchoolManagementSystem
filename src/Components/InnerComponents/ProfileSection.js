import React, { useContext, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/ProfileSection.css';
import UserContext from '../../context/user/UserContext'
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import ModalBox from './ModalBox';

export default function ProfileSection() {

    let navigate = useNavigate();
    const context = useContext(UserContext);
    const {userinfo,fetchUserinfo,updateTeacher} = context;

    // useEffect(()=>{
    //     if(localStorage.getItem('token')){
    //         fetchUserinfo();
    //     }else{
    //         navigate('/login');
    //     }
    // },[]);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            fetchUserinfo();
        }else{
            navigate('/login');
        }
    },[userinfo,updateTeacher]);
    
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
    <div className='profile-section'>
        <div className='prf-image'>
        </div>
        
        <UpdateProfile 
            userid = {userinfo._id}
            /*
            userName = {userinfo.name}
            userPhone = {userinfo.phone}
            userDob = {userinfo.dob}
            userAddress = {userinfo.address}
            userGrade = {userinfo.grade}
            userGender = {userinfo.gender}
            */
        />
        <div>
            <ModalBox
            text = "Delete Profile"
            heading = "Delete Profile ?"
            question = "Are you sure you want to delete your profile?"
            action = "Delete"
            todo = 'delProfile'
            userid = {userinfo._id}
            />
        </div>
        
        <Box sx={{ flexGrow: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}  md={3}>
                    <div className='profile-card-2'>
                        <Item  >
                            <span className='profile-label'>Username: </span>
                            <span className='profile-field'>{userinfo.username}</span>
                        </Item>
                    </div>
                </Grid>
                <Grid item xs={8}  md={3}>
                    <div className='profile-card-2'>
                        <Item  >
                            <span className='profile-label'>Role: </span>
                            <span className='profile-field'>{userinfo.usertype}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item md={4} >
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Name: </span>
                            <span className='profile-field'>{userinfo.name}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item md={4} >
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Gender: </span>
                            <span className='profile-field'>{userinfo.gender}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Phone: </span>
                            <span className='profile-field'>{userinfo.phone}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Date of Birth: </span>
                            <span className='profile-field'>{userinfo.dob?new Date(userinfo.dob).toDateString():'Add Date of Birth'}</span>
                        </Item>
                    </div>
                </Grid>
                
                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Address: </span>
                            <span className='profile-field'>{userinfo.address}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={4}  md={3}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Grade: </span>
                            <span className='profile-field'>{userinfo.grade}</span>
                        </Item>
                    </div>
                </Grid>
                
                    
            </Grid>
        </Box>
    </div>
    )
}
