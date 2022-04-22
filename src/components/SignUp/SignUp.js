import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import  './SignUp.css';
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [] = useSignInWithEmailAndPassword(auth);

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value);
    }

    const handleCreateSubmit = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your password did not match');
            return;
        }
    }
    return (
        <div className='from-container'>
           <div>
           <h2 className='form-title'>SignUp Now</h2>
            <form onSubmit={handleCreateSubmit}>
            <div className='input-group'>
                <label htmlFor="name">Name</label>
                <input onBlur={handleNameBlur} className='' type="name" name="" id="" required/>
                </div>
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} className='' type="email" name="" id="" required/>
                </div>
                <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} className='' type="password" name="" id="" required />
            </div>
                <div className="input-group">
                <label htmlFor="Confirm-password">Confirm Password</label>
                <input onBlur={handleConfirmPassword} className='' type="password" name="" id="" required />
            </div>
            <p style={{color: 'red'}}>{error}</p>
            <input className='btn-submit' type="submit" value="Sign Up" placeholder='Submit' /> 
         </form>
         <p> Already Have an Account ? <Link to="/login">Login Now</Link></p>
         <div className='border-line'>
        <div className='line-left'></div>
         <p>Or</p> 
         <div className='line-right'></div>
        </div>
         </div>
     </div>
    );
};

export default SignUp;