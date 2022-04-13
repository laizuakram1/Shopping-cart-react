import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);


  const EmailBlur = (e) => {
    setEmail(e.target.value);
  }

  const PasswordBlur = (e) => {
    setPassword(e.target.value);
  }
  if (user) {
    navigate('/home');
  }
  const handleLoginUser = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleLoginUser}>
        <h2 className='form-title'>Login</h2>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input onBlur={EmailBlur} type="email" name="email" required />
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input onBlur={PasswordBlur} type="password" name="password" required />
        </div>
        <input className='form-submit' type="submit" value="Login" />

        <p>New to Ema-John? <Link className='form-link' to='/signup'>create an account</Link></p>

      </form>

    </div>
  );
};

export default Login;