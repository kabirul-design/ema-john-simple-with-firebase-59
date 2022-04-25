import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();


    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleSignInSubmit = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='from-container'>
           <div>
           <h2 className='form-title'>Login Now</h2>
            <form onSubmit={handleSignInSubmit}>
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} className='' type="email" name="" id="" required/>
                </div>
                <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} className='' type="password" name="" id="" required />
            </div>
            <p style={{color: 'red'}}>{error?.customData}</p>
            {
                loading && <p>Loading....</p>
            }
            <input className='btn-submit' type="submit" value="Login" placeholder='Submit' /> 
         </form>
         <p> New to Ema-John? <Link to="/signup">Create an Account</Link></p>
         <div className='border-line'>
        <div className='line-left'></div>
         <p>Or</p> 
         <div className='line-right'></div>
        </div>
         </div>
     </div>
    );
};

export default Login;