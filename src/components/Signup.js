import React, { useEffect, useState } from 'react';
import './styles.css';

function Signup(props) {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const submitForm = async () =>{
        const signupURL = 'http://localhost:4000/user/signup';
        const formData = {
            email,
            username,
            password,
            confirmPassword
        };
        const reqParams = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(formData)
        };
        const response = await fetch(signupURL, reqParams);
        const responseData = await response.json();
        if (responseData.error){
            setError(responseData.error);
        }else if (responseData.success){
            setSuccess(responseData.success);
        }else{
            console.log('some error')
        }
    }

  return (
    <div className='signup-form-container'>
      <div className='signup-form form'>
        <button className='close-popup' onClick={() => props.handleShowSignup()}>&#x2716;</button>
        <input type="email" name="email" placeholder="Email here" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" name="username" placeholder="Username here" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" name="password" placeholder="Password here" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" name="confirmPassword" placeholder="Password here again" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
        <button className='btn' onClick={submitForm}>Sign Up</button>
      </div>
      <div className="errors">
        <h3> {error || success} </h3>
      </div>
    </div>
  );
}

export default Signup;
