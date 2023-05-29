import React, { useState } from 'react'
import '../Styles/EnrollmentForm.css'
import LoginInput from '../../Components/LoginInput'
import { useNavigate } from 'react-router-dom';

export default function SignupSection() {
  const navigation = useNavigate()
  const [credentails, setCredentials] = useState({
    name:'',
    username:'',
    password:'',
    cpassword:'',
    usertype: 'Student'
  });
  const onChange = (e) =>{
    setCredentials({...credentails,[e.target.name]:e.target.value})
  }
  const changeUser = (e) =>{
    setCredentials({...credentails, 'usertype':e.target.value})
  }
  //To display Message 
  const [dismessage,setDismessage] = useState({
    message: "Please Enter Credentials.",
    colorclass : 'message'
  })
  const displayInvalid = () =>{
    setDismessage({...dismessage,
      'message':"Please enter different username and password.",
      'colorclass': 'danger'})
    console.log(dismessage)
  }



  //Function to hadle sign up
  const handleSignup = async (e) =>{
    e.preventDefault();
    console.log(credentails);
      
    try{
      const {name, username, password, usertype} = credentails ;
      const response = await fetch("http://localhost:5000/api/auth/createuser",{   
        method: "POST",
          headers: {
            'Content-Type' : 'application/json'
          },
          body: JSON.stringify({name,username,password,usertype})
        });
        const json = await response.json();
        console.log(json);
        if(json.success){
          //redirect
          localStorage.setItem('token',json.authToken);
          navigation('/');
        }else{
          displayInvalid(json.success,"Invalid Credentials.");
      }
      }
      catch(error){
        console.log(error.message)
      }   
    }


  
  const inputs = [
        {
            id:1,
            name:'name',
            type:'text',
            placeholder:'Full Name',
            label:'Name:',
            required:true,
        },
        {
            id:2,
            name:'username',
            type:'text',
            placeholder:'Username',
            label:'Username:',
            required:true,
        },
        {
            id:3,
            name:'password',
            type:'password',
            placeholder:'Password',
            label:'Password:',
            // errorMessage:'Password doesnt match username',
            required:true
        },
        {
            id:4,
            name:'cpassword',
            type:'password',
            placeholder:'Re-Type Password',
            label:'Confirm:',
            // errorMessage:'Password doesnt match username',
            required:true,
        }
    ];
    
  return (
    <div>
        <div className='login-form'>
        <h2 className={dismessage.colorclass}>{dismessage.message}</h2>
        <form onSubmit={handleSignup} >
        {
            inputs.map((input) => (
                <LoginInput key={input.id} {...input} value={credentails[input.name]} onChange={onChange} />
            ))
        }
            <select name="usertype" className='user-select' onChange={changeUser}>
                <option className='opt'>Student</option>
                <option className='opt'>Admin</option>
            </select>
            <button type='submit'>Create Account</button>
        </form>
    </div>
    </div>
  )
}
