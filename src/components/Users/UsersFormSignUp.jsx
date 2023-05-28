import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {registerUser} from "../../redux/operetions";

import css from './UsersForm.module.css';




const UsersFormSignUp = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

  const hadleChange = ({ target: { name, value }}) => {
    if (name === "name") {setName(value);}
    if (name === "email") {setEmail(value);}
    if (name === "password") {setPassword(value);}
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      dispatch(registerUser({name, email, password}))
      setName('');
      setEmail('');
      setPassword('');
      navigate("/");
    } else {
      alert("All fields must be filled");
    }


  }

  return (
    <>
      <div className={css.overlay} onClick={() => navigate("/")} />
      <div className={css.body}>
      <div className={css.form_container}>
          <div className={css.close} onClick={() => navigate("/")}>
            <svg>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
            </svg>
          </div>
        
        <form className={css.form} onSubmit={handleSubmit}>
            <h2 className={css.title}>Create Account</h2>

            <span className={css.input_span}>
            <label className={css.label} id="name">Name</label>
            <input id="name" name="name" type="text" 
            onChange={hadleChange} 
            value={name} 
            autoComplete='off'
            pattern="([A-Za-z]+[\-\s]?){7,25}"
            title="Enter your first and last name" 
            />
            </span>

            <span className={css.input_span}>
            <label className={css.label} id="email">Email</label>
            <input id="email" name="email" type="email" 
            onChange={hadleChange} 
            value={email} 
            autoComplete='off'
            title="Example of valid email address: qwerty1@example.com"            
            />
            </span>

            <span  className={css.input_span}>
            <label  className={css.label} id="password">Password</label>
            <input id="password" name="password" type="password" 
            onChange={hadleChange} 
            value={password} 
            autoComplete='off' 
            pattern="[0-9a-fA-F]{7,24}"
            title="Password should contains at least 7 symbols"
            /></span>

            

            <input value="Get Started" type="submit" className={css.submite}/>

            <div className={css.span}>Already have an account? <a href="login">Sign in</a></div>
        </form>
      </div>
    </div>
    </>


  );
}

export default UsersFormSignUp;