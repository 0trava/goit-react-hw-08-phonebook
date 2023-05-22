import React from 'react';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
        <div className={css.circle}></div>
        <div className={css.circle}></div>
        <div className={css.circle}></div>
        <div className={css.circle}></div>
    </div>
  )
}

export default Loader