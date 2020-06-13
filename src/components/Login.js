import React, { useEffect, useState } from 'react';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    async function submitForm(){
        const loginURL = 'http://localhost:4000/user/login';
        const formData = {
            email,
            password
        };
        const reqParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };
        const response = await fetch(loginURL, reqParams);
        const responseData = await response.json();
        if (responseData.error){
            setError(responseData.error);
        }else if (responseData.token){
            let token = responseData.token;
            props.setToken(token);
            props.setIsLogged(true);
        }else{
            console.log('error');
        }
    }

  return (
    <div className='login-form-container'>
      <div className='login-form form'>
        <input type="email" name="email" placeholder="Email here" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" name="password" placeholder="Password here" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='btn' onClick={submitForm}>Log In</button>
      </div>
      <div className="errors">
        <h3> {error} </h3>
      </div>
    </div>
  );
}

export default Login;
