import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='from-container'>
           <div>
           <h2 className='form-title'>Login Now</h2>
            <form>
            <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input className='' type="email" name="" id="" required/>
                </div>
                <div className="input-group">
                <label htmlFor="password">Password</label>
                <input className='' type="password" name="" id="" required />
            </div>
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