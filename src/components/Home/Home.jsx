import React from 'react';

import css from './Home.module.css';

const Home = () => {
  return (
    <>
        <div className={css.background}></div>
        <h1 className={css.title}>Hello, I'm your Contact Book!</h1> 
        <p className={css.post_title}>I save all your important contacts for you...</p>

    </>

  )
}

export default Home;