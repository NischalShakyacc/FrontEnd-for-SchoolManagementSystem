import React, { useState } from 'react'
import '../Styles/EnrollmentForm.css'
import LoginInput from '../LoginInput'
import AlertMessage from '../AlertMessage'

export default function SignupSection() {
  
  const [showAlert,setShowAlert] = useState(false);
  const [namevalidate,setNamevalidate] = useState(false);
  const [passwordvalidate,setPasswordvalidate] = useState(false);
  const [validation,setValidation] = useState(false);
  const [uservalidate,setUservalidate] = useState(false);

  const [credentails, setCredentials] = useState({
    name:'',
    username:'',
    password:'',
    cpassword:'',
    usertype: 'Student',
    grade: 'Toddler'
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
      'message':"Please enter different username and password.",
      'colorclass': 'danger'})
  }

  const validate = () =>{
    const {name,password, cpassword} = credentails ;
    if(name.length<4){
      setNamevalidate(true);
      setValidation(false);
      
    }else if(password !== cpassword){
      setPasswordvalidate(true);
      setValidation(false);
      console.log('nocorrect' + password+ 'asdasdsd' + cpassword)
      
    }else{
      setValidation(true);
    }
  }
  
  //Function to hadle sign up
  const handleSignup = async (e) =>{
    e.preventDefault();

    setNamevalidate(false);
    setPasswordvalidate(false);
    setUservalidate(false);
    setValidation(false);
    
    validate();

    if(validation){
      try{
        const {name, username, password, usertype, grade} = credentails ;
        
        const response = await fetch("http://localhost:5000/api/auth/createuser", {   
            method: "POST",
            headers: {
              'Content-Type' : 'application/json',
              'auth-token' : localStorage.getItem('token')
            },
            body: JSON.stringify({name,username,password,usertype,grade})
          });
          console.log('Grade is ' + grade);
          console.log('Classroom is' + usertype)

          if(!response){
            console.log('Server Not responding');
          }
          console.log(JSON.stringify({name,username,password,usertype,grade}))

          
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
            label:'Name:',
            required:true,
            message: 'Please Enter Full Name.',
            minLength : 4
        },
        {
            id:2,
            name:'username',
            type:'text',
            placeholder:'Username',
            label:'Username:',
            required:true,
            minLength : 3,
            message : 'Username Must be Unique.'
        },
        {
            id:3,
            name:'password',
            type:'password',
            placeholder:'Password',
            label:'Password:',
            required:true,
            minLength : 3
        },
        {
            id:4,
            name:'cpassword',
            type:'password',
            placeholder:'Re-Type Password',
            label:'Confirm:',
            message:'Re-Type Password. Passwords Must Match.',
            required:true,
        }
    ];
    
  return (
    <div>
        <div className='login-form'>
        <h2 className={dismessage.colorclass}>{dismessage.message}</h2>

        <p className='messageformLarge'>An account created message will be displayed for every successfull account creation.</p>

        <form onSubmit={handleSignup} >
        {
            inputs.map((input,index) => (
              <div key = {index}>
              <p className='messageform' >{input.message}</p>
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
                <option className='opt'>Nursury</option>
                <option className='opt'>K.G.</option>
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
    {showAlert && <AlertMessage severe="success" timeout="3000" message="Account Created Successfully!" />}

    {namevalidate && <AlertMessage severe="error" timeout="3000" message="Please enter full name." />}

    {passwordvalidate && <AlertMessage severe="error" timeout="3000" message="Password does not match." />}

    {uservalidate && <AlertMessage severe="error" timeout="3000" message="Username is used. Please try another Username." />}
    </div>
  )
}
