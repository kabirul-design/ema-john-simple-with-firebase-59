import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate('');

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateSubmit = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }
    return (
        <div className='from-container'>
        <div>
        <h2 className='form-title'>Shipping information</h2>
         <form onSubmit={handleCreateSubmit}>
         <div className='input-group'>
             <label htmlFor="name">Name</label>
             <input onBlur={handleNameBlur} className='' type="name" name="" id="" required/>
             </div>
         <div className='input-group'>
             <label htmlFor="email">Your Email</label>
             <input value={user?.email} readOnly className='' type="email" name="" id="" required/>
             </div>
             <div className="input-group">
             <label htmlFor="password">Address</label>
             <input onBlur={handleAddressBlur} className='' type="text" name="" id="" required />
         </div>
             <div className="input-group">
             <label htmlFor="phone-number">Phone Number</label>
             <input onBlur={handlePhoneBlur} className='' type="text" name="" id="" required />
         </div>
         <p style={{color: 'red'}}>{error}</p>
         <input className='btn-submit' type="submit" value="Shipping Now" placeholder='Submit' /> 
      </form>
      <div className='border-line'>
     <div className='line-left'></div>
      <p>Or</p> 
      <div className='line-right'></div>
     </div>
      </div>
  </div>
    );
};

export default Shipment;