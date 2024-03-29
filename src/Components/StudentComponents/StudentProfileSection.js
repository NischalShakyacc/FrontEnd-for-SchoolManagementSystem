import React, { useContext, useEffect,useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/ProfileSection.css';
import UserContext from '../../context/user/UserContext'
import { useNavigate } from 'react-router-dom';
import UpdateProfileStd from './UpdateProfileStd';
import StudentContext from '../../context/studentinfo/StudentContext';
import axios from 'axios';
import ChangePassword from '../InnerComponents/ChangePassword';

export default function ProfileSection() {

    const imageurl = 'http://localhost:5000/studentimages/';

    let navigate = useNavigate();
    const context = useContext(UserContext);
    const {userinfo,fetchUserinfo} = context;

    //* for update after updated profile
    const {updateStudent} = useContext(StudentContext)

    useEffect(()=>{
        if(localStorage.getItem('token')){
            fetchUserinfo();
        }else{
            navigate('/login');
        }
    },[updateStudent]);
    
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

        axios.put(`http://localhost:5000/api/studentusers/updatestudentimage/${userinfo._id}`,
        formData,
        config
        ).then(res=>{
        console.log(res);
        window.location.reload();
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
                    src={imageurl + 'std.jpg'} 
                    alt='Profile' 
                    />
                }
            <span className='tospan'>

            <div>
                <UpdateProfileStd
                    userid = {userinfo._id}
                />
            </div>

            <div style={{marginLeft:'2rem'}}>
                <ChangePassword 
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

                <Grid item xs={4}  md={3}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Grade: </span>
                            <span className='profile-field'>{userinfo.grade}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={4}  md={6}>
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

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>House: </span>
                            <span className='profile-field'>{userinfo.house}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Father's Name: </span>
                            <span className='profile-field'>{userinfo.fathername}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Father's Number: </span>
                            <span className='profile-field'>{userinfo.fatherphone}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Mother's Name: </span>
                            <span className='profile-field'>{userinfo.mothername}</span>
                        </Item>
                    </div>
                </Grid>

                <Grid item xs={6}  md={4}>
                    <div className='profile-card'>
                        <Item  >
                            <span className='profile-label'>Mother's Number: </span>
                            <span className='profile-field'>{userinfo.motherphone}</span>
                        </Item>
                    </div>
                </Grid>
            </Grid>
        </Box>
    </div>
    )
}
