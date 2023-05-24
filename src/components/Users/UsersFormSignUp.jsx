import React from 'react';

import css from './UsersForm.module.css';

const UsersForm = ({closeForm}) => {
  return (
    <div className={css.body}>
      <div className={css.form_container}>
          <div className={css.close} onClick={closeForm}>
            <svg>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
            </svg>
          </div>
        
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

            <div className={css.span}>Already have an account? <span>Sign in</span></div>
        </form>
      </div>
    </div>

  );
}

export default UsersForm;