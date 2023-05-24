import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './UsersForm.module.css';
import UsersFormSignUp from './UsersFormSignUp';
import UsersFormSignIn from './UsersFormSignIn';
import { toggleForm, toggleFormType } from '../../redux/user/userSlice';


const UserForm = () => {
    const dispatch = useDispatch();
    const { showForm, formType } = useSelector(({ user }) => user);

    const closeForm = () => dispatch(toggleForm(false));
    const toggleCurrentFormType = (type) => dispatch(toggleFormType(type));


  return showForm ? (
    <>
      <div className={css.overlay} onClick={closeForm} />
      {formType === "signup" ? (
        <UsersFormSignUp
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      ) : (
        <UsersFormSignIn
          toggleCurrentFormType={toggleCurrentFormType}
          closeForm={closeForm}
        />
      )}
    </>
  ) : (
    <></>
  );
}

export default UserForm;