import React from 'react';

import css from './UsersForm.module.css';

const UsersForm = () => {
  return (
    <div className={css.form_container}>
        <form className={css.form}>
            <h2 className={css.title}>Login to your Account</h2>
            <div className={css.input_span}>
            <label className={css.label} for="email">Email</label>
            <input id="email" name="email" type="email"/>
            </div>

            <span  className={css.input_span}>
            <label  className={css.label} for="password">Password</label>
            <input id="password" name="password" type="password"/></span>

            <input value="Log in" type="submit" className={css.submite}/>

            <span className={css.span}>Don't have an account? <a href="#">Sign up</a></span>
        </form>
    </div>
  );
}

export default UsersForm;