import React, { useState,useEffect } from 'react'
import '../Styles/EnrollmentForm.css'
import LoginInput from '../LoginInput'
import AlertMessage from '../AlertMessage'

export default function SignupSection() {

  const [credentails, setCredentials] = useState({
    name:'',
    username:'',
    password:'',
    cpassword:'',
    usertype: 'Student',
    grade: 'Toddler',
    email: ''
  });
  const onChange = (e) =>{
    setCredentials({...credentails,[e.target.name]:e.target.value})
  }
  const changeUser = (e) =>{
    setCredentials({...credentails, 'usertype':e.target.value});
  }
  const changeGrade = (e) =>{
    setCredentials({...credentails,'grade':e.target.value});
  }
  //To display Message 
  const [dismessage,setDismessage] = useState({
    message: "Please Enter Credentials.",
    colorclass : 'message'
  })

  const displayInvalid = () =>{
    setDismessage({...dismessage,
      'message':"Invalid Details",
      'colorclass': 'danger'})
  }


  //Alerts and validation
  const [showAlert,setShowAlert] = useState(false);
  const [namevalidate,setNamevalidate] = useState(false);
  const [passwordvalidate,setPasswordvalidate] = useState(false);
  const [emailvalidate,setEmailvalidate] = useState(false);
  const [validation,setValidation] = useState(false);
  const [uservalidate,setUservalidate] = useState(false);

  const validate = () =>{
    const {name,password,email, cpassword} = credentails;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    setValidation(false);
    if(name.length<5){
      setNamevalidate(true);
      
    }else if(password !== cpassword){
      setPasswordvalidate(true);

    }else if(!email.match(validRegex)){
      setEmailvalidate(true);
    
    }else{
      setValidation(true);
    }
  }
  
  //Setting to false again
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false);
            }, 2500);
        }
    }, [showAlert]);

    useEffect(() => {
        if (namevalidate) {
            setTimeout(() => {
                setNamevalidate(false);
            }, 2500);
        }
    }, [namevalidate]);

    useEffect(() => {
        if (passwordvalidate) {
            setTimeout(() => {
                setPasswordvalidate(false);
            }, 2500);
        }
    }, [passwordvalidate]);

    useEffect(() => {
        if (emailvalidate) {
            setTimeout(() => {
                setEmailvalidate(false);
                setValidation(false);
                setUservalidate(false);
            }, 2500);
        }
    }, [emailvalidate]);

    useEffect(() => {
        if (validation) {
            setTimeout(() => {
                setValidation(false);
            }, 2500);
        }
    }, [validation]);

    useEffect(() => {
        if (uservalidate) {
            setTimeout(() => {
                setUservalidate(false);
            }, 2500);
        }
    }, [uservalidate]);


  //Function to hadle sign up
  const handleSignup = async (e) =>{
    e.preventDefault();
    
    validate();

    if(validation){
      try{
        const {name, username, password, usertype, grade, email} = credentails ;
        
        console.log(credentails);
        const response = await fetch("http://localhost:5000/api/auth/createuser", {   
            method: "POST",
            headers: {
              'Content-Type' : 'application/json',
              'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({name,username,password,usertype,grade,email})
          });

          if(!response){
            console.log('Server Not responding');
          }

          const json = await response.json();
          if(json.success){
            setShowAlert(true)
          }else{
            displayInvalid(json.success,"Invalid Credentials.");
            setUservalidate(true);
        }
        }
        catch(error){
          console.log(error.message)
        }   
        
      }
    }



    //for dsiaplay
  const inputs = [
        {
            id:1,
            name:'name',
            type:'text',
            placeholder:'Full Name',
            labels:'Name:',
            required:true,
            message: 'Enter Full Name. (Must be More than 5 characters.)',
            minLength : 4
        },
        {
            id:2,
            name:'username',
            type:'text',
            placeholder:'Username',
            labels:'Username:',
            required:true,
            minLength : 4,
            message : 'Username Must be Unique.'
        },
        {
            id:5,
            name:'email',
            type:'email',
            placeholder:'Email',
            labels:'Email:',
            required:true,
            message : 'Enter a Valid Email.'
        },
        {
            id:3,
            name:'password',
            type:'password',
            placeholder:'Password',
            labels:'Password:',
            required:true,
            minLength : 5
        },
        {
            id:4,
            name:'cpassword',
            type:'password',
            placeholder:'Re-Type Password',
            labels:'Confirm:',
            message:'Re-Type Password. Passwords Must Match.',
            required:true,
        }
    ];
    
  return (
    <div>
        <div className='login-form'>
        <h2 className={dismessage.colorclass}>{dismessage.message}</h2>

        <form onSubmit={handleSignup} >
        {
            inputs.map((input,index) => (
              <div key = {index}>
              <p className='messageform' >{input.message}</p>
              <label>{input.labels}</label>
                <LoginInput className='loginfields' {...input} value={credentails[input.name]} onChange={onChange} />
              </div>
            ))
        }
        <label className='drop'>Select User Type: </label>
            <select name="usertype" className='user-select' onChange={changeUser}>
                <option className='opt'>Student</option>
                <option className='opt'>Admin</option>
            </select>

          <label className='drop'>Select Grade:</label>
          <p className='messageform'>For teachers please enter the highest grade you teach in.</p>
            <select name="grade" className='user-select' onChange={changeGrade}>
                <option className='opt'>Toddler</option>
                <option className='opt'>Nursery</option>
                <option className='opt'>KG</option>
                <option className='opt'>1</option>
                <option className='opt'>2</option>
                <option className='opt'>3</option>
                <option className='opt'>4</option>
                <option className='opt'>5</option>
                <option className='opt'>6</option>
                <option className='opt'>7</option>
                <option className='opt'>8</option>
                <option className='opt'>9</option>
                <option className='opt'>10</option>
            </select>
            
            <button type='submit'>Create Account</button>
        </form>
    </div>
    {showAlert && <AlertMessage severe="success" timeout="2500" message="Account Created Successfully!" />}

    {namevalidate && <AlertMessage severe="error" timeout="2500" message="Please enter full name." />}

    {passwordvalidate && <AlertMessage severe="error" timeout="2500" message="Password does not match." />}

    {uservalidate && <AlertMessage severe="error" timeout="2500" message="Username is used. Please try another Username." />}
    </div>
  )
}
