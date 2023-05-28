import React, { useState } from 'react';
import { useDispatch } from 'react-redux';



import css from './UsersForm.module.css';
import {logInUser} from "../../redux/operetions";
import { useNavigate } from 'react-router-dom';


const UsersFormSignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const toggleCurrentFormType = "signup";

 const hadleChange = ({ target: { name, value }}) => {
   if (name === "password") {setPassword(value);}
   if (name === "email") {setEmail(value);}
 }

 const handleSubmit = (e) => {
   e.preventDefault();

   if (password && email) {
     dispatch(logInUser({email, password}))
     setPassword('');
     setEmail('');
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
            <h2 className={css.title}>Login to your Account</h2>

            <div className={css.input_span}>
            <label className={css.label} id="email">Email</label>
            <input id="email" name="email" type="email"
                        onChange={hadleChange} 
                        value={email} 
                        autoComplete='off'
                        title="Example of valid email address: qwerty1@example.com"
                        />
            </div>

            <span  className={css.input_span}>
            <label  className={css.label} id="password">Password</label>
            <input id="password" name="password" type="password" 
            onChange={hadleChange} 
            value={password} 
            autoComplete='off' 
            pattern="[0-9a-fA-F]{7,12}"
            title="Password should contains at least 7 symbols"
            /></span>

            

            <input value="Log in" type="submit" className={css.submite}/>

            <div className={css.span}>Don't have an account?  <a href="register"  onClick={() => {}}>Sign up</a></div>
        </form>
      </div>
    </div>
    </>

  );
}

export default UsersFormSignIn;