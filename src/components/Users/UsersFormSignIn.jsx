import React from 'react';

import css from './UsersForm.module.css';


const UsersForm = (closeForm) => {

  return (
    <div className={css.body}>
    <div className={css.form_container}>
        <form className={css.form}>
            <div className={css.close} onClick={closeForm()}>
                <svg>
                <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
                </svg>
            </div>

            <h2 className={css.title}>Login to your Account</h2>
            <div className={css.input_span}>
            <label className={css.label} for="email">Email</label>
            <input id="email" name="email" type="email"/>
            </div>

            <span  className={css.input_span}>
            <label  className={css.label} for="password">Password</label>
            <input id="password" name="password" type="password"/></span>

            <input value="Log in" type="submit" className={css.submite}/>

            <div className={css.span}>Don't have an account? <span>Sign up</span></div>
        </form>
    </div>
    </div>
  );
}

export default UsersForm;