import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='form-container'>
        <form>
            <h2 className='form-title'>SignUp</h2>
           <div className='input-group'>
             <label htmlFor="email">Email</label>
             <input type="email"Name="email" />
           </div>
           <div className='input-group'>
             <label htmlFor="password">Password</label>
             <input type="password"Name="password" />
           </div>
           <div className='input-group'>
             <label htmlFor="Confirm-password">Confirm Password</label>
             <input type="password"Name="Confirm-password" />
           </div>
           <input className='form-submit' type="submit" value="Sign-Up" />

           <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
        </form>
        
     </div>
    );
};

export default SignUp;