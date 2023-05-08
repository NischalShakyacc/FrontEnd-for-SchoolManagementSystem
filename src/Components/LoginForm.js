import React,{useState} from 'react'
import "./Styles/LoginForm.css"
import LoginInput from './LoginInput'


export default function LoginForm() {
    
    // const handleLoginSubmit = (e) =>{
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     console.log(Object.fromEntries(data.entries()))
    // }

    const [credentails, setCredentials] = useState({
        username:"",
        password:'',
        usertype: 'Student'
    })
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

    const onChange = (e) =>{
        setCredentials({...credentails,[e.target.name]:e.target.value})
    }
    const changeUser = (e) =>{
        setCredentials({...credentails, 'user':e.target.value})
    }

    const handleLogin = async (e) =>{
        e.preventDefault();
        const response = await fetch("http://localhost:6000/api/auth/login",{
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
        console.log(json)
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
                <option className='opt'>Student</option>
                <option className='opt'>Teacher</option>
                <option className='opt'>Admin</option>
            </select>
            <button type='submit'>Log In</button>
        </form>
    </div>
    )
}
