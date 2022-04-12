import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword,setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  

  const EmailBlur = (e)=>{
    setEmail(e.target.value);
  }

  const PasswordBlur = (e)=>{
    setPassword(e.target.value);
  }

  const ConfirmPasswordBlur = (e)=>{
    setConfirmPassword(e.target.value);
  }

    return (
        <div className='form-container'>
        <form>
            <h2 className='form-title'>SignUp</h2>
           <div className='input-group'>
             <label htmlFor="email">Email</label>
             <input onBlur={EmailBlur} type="email"name="email" />
           </div>
           <div className='input-group'>
             <label htmlFor="password">Password</label>
             <input onBlur={PasswordBlur} type="password"name="password"  />
           </div>
           <div className='input-group'>
             <label htmlFor="Confirm-password">Confirm Password</label>
             <input onBlur={ConfirmPasswordBlur} type="password"name="Confirm-password"  />
           </div>
           <input className='form-submit' type="submit" value="Sign-Up" />

           <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
        </form>
        
     </div>
    );
};

export default SignUp;