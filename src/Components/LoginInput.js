import React from 'react'
import "./Styles/LoginForm.css"

export default function LoginInput(props) {
    const{label,onChange,id,...inputProps} = props;
  return (
    <div className='form-input'>
        <label>{label}</label>
        <input
        {...inputProps}
        onChange={onChange}
        />
        <span className='error-message'>{inputProps.errorMessage}</span>
    </div>
  )
}
