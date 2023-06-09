import React,{useState} from 'react'
import "./Styles/LoginForm.css"
import LoginInput from './LoginInput'
import { useNavigate } from 'react-router-dom';
import AlertMessage from './AlertMessage';


export default function LoginForm() {

    const [credentails, setCredentials] = useState({
        username:"",
        password:'',
        usertype: 'Student'
    });
    let navigation = useNavigate();

    const inputs = [
        {
            id:1,
            name:'username',
            type:'text',
            placeholder:'Username',
            label:'Username:',
            required:true,
        },
        {
            id:2,
            name:'password',
            type:'password',
            placeholder:'Password',
            label:'Password:',
            // errorMessage:'Password doesnt match username',
            required:true,
        }
    ];

    // State for alert
    const [showAlert, setShowAlert] = useState(false)

    const onChange = (e) =>{
        setCredentials({...credentails,[e.target.name]:e.target.value})
        setShowAlert(false);
    }
    const changeUser = (e) =>{
        setCredentials({...credentails, 'usertype':e.target.value})
    }

    const handleLogin = async (e) =>{
        e.preventDefault();
        //console.log(credentails);
        setShowAlert(false)
        try{
            const response = await fetch("http://localhost:5000/api/auth/login",{
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    username: credentails.username,
                    password: credentails.password,
                    usertype: credentails.usertype
                })
            });
            const json = await response.json();
            console.log(json);
            if(json.success){
                //redirect
                localStorage.setItem('token',json.authToken);
                navigation('/');
                window.location.reload(false)

            }else{
                //alert Message
                setShowAlert(true);
            }
        }
        catch(error){
            console.log(error.message)
        }
    }

    return (
    <div className='login-form'>
        <h2 className='message'>Please Enter the Credentials</h2>

            <form onSubmit={handleLogin}>
            {
                inputs.map((input) => (
                    <LoginInput key={input.id} {...input} value={credentails[input.name]} onChange={onChange} />
                ))
            }
                <select name="usertype" className='user-select' onChange={changeUser}>
                    <option className='opt'>
                        Student
                    </option>
                    <option className='opt'>Admin</option>
                </select>
                <button type='submit'>Log In</button>
            </form>
            {showAlert && <AlertMessage severe="error" timeout="3000" message="Invalid Login Information!" />}
    </div>
    )
}
