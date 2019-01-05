import React from 'react';

import styles from './SignupForm.scss';

function SignupForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create account</h1>
      <ul className={styles.socialMediaContainer}>
        <li className={styles.icon}>
          <a href='#'>
            <i className='fab fa-google-plus-g' />
          </a>
        </li>
        <li className={styles.icon}>
          <a href='#'>
            <i className='fab fa-facebook-f' />
          </a>
        </li>
        <li className={styles.icon}>
          <a href='#'>
            <i className='fab fa-twitter' />
          </a>
        </li>
      </ul>
      <p className={styles.otherWayTitle}>Or use email for registration:</p>
      <div className={styles.inputsContainer}>
        <input type='text' placeholder='Name' className={styles.name} />
        <input type='email' placeholder='Email' className={styles.email} />
        <input
          type='password'
          placeholder='Password'
          className={styles.password}
        />
      </div>
      <button className={styles.signupBtn}>SIGN UP</button>
    </div>
  );
}

export default SignupForm;
