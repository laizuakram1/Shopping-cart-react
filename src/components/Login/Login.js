import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
           <form>
               <h2 className='form-title'>Login</h2>
              <div className='input-group'>
                <label htmlFor="email">Email</label>
                <input type="email"Name="email" />
              </div>
              <div className='input-group'>
                <label htmlFor="password">Password</label>
                <input type="password"Name="password" />
              </div>
              <input className='form-submit' type="submit" value="Login" />

              <p>New to Ema-John? <Link className='form-link' to='/signup'>create an account</Link></p>
           </form>
           
        </div>
    );
};

export default Login;