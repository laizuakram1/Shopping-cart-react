import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);


  const EmailBlur = (e) => {
    setEmail(e.target.value);
  }

  const PasswordBlur = (e) => {
    setPassword(e.target.value);
  }

  const ConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleCreateUser = event => {
    event.preventDefault();
    if (password !== ConfirmPassword) {
      setError('your two password is did not match');
      return;
    }
    else if (password.length < 6) {
      setError('password must use 6 digits or longer');
      return;
    }
    else if(user){
      navigate('/shop');
    }

    createUserWithEmailAndPassword(email, password);
  }

  return (
    <div className='form-container'>
      <form onSubmit={handleCreateUser}>
        <h2 className='form-title'>SignUp</h2>
        <div className='input-group'>
          <label htmlFor="email">Email</label>
          <input onBlur={EmailBlur} type="email" name="email" />
        </div>
        <div className='input-group'>
          <label htmlFor="password">Password</label>
          <input onBlur={PasswordBlur} type="password" name="password" />
        </div>
        <div className='input-group'>
          <label htmlFor="Confirm-password">Confirm Password</label>
          <input onBlur={ConfirmPasswordBlur} type="password" name="Confirm-password" />
        </div>
        <p style={{ color: 'red' }}>{error}</p>
        <input className='form-submit' type="submit" value="Sign-Up" />


        <p>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
      </form>

    </div>
  );
};

export default SignUp;