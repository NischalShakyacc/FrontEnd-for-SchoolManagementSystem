import React, { useContext, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/ProfileSection.css';
import UserContext from '../../context/user/UserContext'
import { useNavigate } from 'react-router-dom';
import UpdateProfile from './UpdateProfile';
import ModalBox from './ModalBox';
import axios from 'axios';

export default function ProfileSection() {

    let navigate = useNavigate();
    const context = useContext(UserContext);
    const {userinfo,fetchUserinfo,updateTeacher} = context;
    const imageurl = 'http://localhost:5000/profileimages/';

    useEffect(()=>{
        if(localStorage.getItem('token')){
            fetchUserinfo();
            if(userinfo.usertype === 'Student'){
                navigate('/profilestudent')
            } 
        }else{
            navigate('/login');
        }
    },[userinfo, updateTeacher]);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    /*Image handlers*/
    const [showButton, setShowButton] = useState(false);
    const [image,setImage] = useState({
        profileImage: ''
    })

    const fileAdded =(e)=>{
        setShowButton(true);
        setImage({...image, profileImage: e.target.files[0]})
    }

    const config = {
    headers: { 'auth-token' : localStorage.getItem('token') }
    };

    const imageUpload = (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image.profileImage);

        axios.put(`http://localhost:5000/api/users/updateteacherimage/${userinfo._id}`,
        formData,
        config
        ).then(res=>{
        console.log(res);
        })
        .catch(err=>{
        console.log(err);
        })
    }

    return (
    <div className='profile-section'>
        <div className='profile-image'>
            {userinfo.image? 
                <img 
                className='profileImage' 
                src={imageurl + userinfo.image} 
                alt='Profile' 
                />:
                <img 
                    className='profileImage' 
                    src={imageurl + 'teacher.jpg'} 
                    alt='Profile' 
                    />
                }
            

            <span className='tospan'>

            <div>
            <UpdateProfile 
                userid = {userinfo._id}
            />
            </div>

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
        </span>
        </div>

            <div> 
                <form onSubmit={imageUpload} className='upload-image' encType='multipart/form-data' >
                    
                <input 
                type='file' 
                name='profileImage' 
                className='custom-file-input'
                onChange={fileAdded}
                accept='.png, .jpg, .jpeg'
                />
                <div>
                    {showButton && 
                        <input className='header-btn green-btn' type='submit' value='Save Image' />
                    }
                </div>
                </form>
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
                <Grid item md={6} >
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Email: </span>
                            <span className='profile-field'>{userinfo.email}</span>
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
