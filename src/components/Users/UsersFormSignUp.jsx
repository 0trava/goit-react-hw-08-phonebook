import React from 'react';

import css from './UsersForm.module.css';

const UsersForm = () => {
  return (
    <div className={css.body}>
      <div className={css.form_container}>
        <form className={css.form}>
            <h2 className={css.title}>Create Account</h2>

            <div className={css.input_span}>
            <label className={css.label} for="email">User name</label>
            <input id="email" name="email" type="email"/>
            </div>

            <div className={css.input_span}>
            <label className={css.label} for="email">Email</label>
            <input id="email" name="email" type="email"/>
            </div>

            <span  className={css.input_span}>
            <label  className={css.label} for="password">Password</label>
            <input id="password" name="password" type="password"/></span>

            

            <input value="Get Started" type="submit" className={css.submite}/>

            <span className={css.span}>Already have an account? <a href="#">Sign in</a></span>
        </form>
      </div>
    </div>

  );
}

export default UsersForm;