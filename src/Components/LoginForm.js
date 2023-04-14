import React,{useState} from 'react'
import "./Styles/LoginForm.css"
import LoginInput from './LoginInput'


export default function LoginForm() {
    
    // const handleLoginSubmit = (e) =>{
    //     e.preventDefault();
    //     const data = new FormData(e.target);
    //     console.log(Object.fromEntries(data.entries()))
    // }

    const [values, setValues] = useState({
        username:"",
        password:'',
        user: 'student'
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

    const handleLoginSubmit = (e) =>{
        e.preventDefault();
    }

    const onChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    const changeUser = (e) =>{
        setValues({...values, 'user':e.target.value})
    }
    console.log(values)

    const handleLogin = () =>{
        //validate();

    }

    return (
    <div className='login-form'>
        <h2 className='message'>Please Enter the Credentials</h2>
        <form  onSubmit={handleLoginSubmit}>
        {
            inputs.map((input) => (
                <LoginInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))
        }
            <select className='user-select' onChange={changeUser}>
                <option className='opt'>Student</option>
                <option className='opt'>Teacher</option>
                <option className='opt'>Admin</option>
            </select>
            <button type='submit' onSubmit={handleLogin}>Log In</button>
        </form>
    </div>
    )
}
