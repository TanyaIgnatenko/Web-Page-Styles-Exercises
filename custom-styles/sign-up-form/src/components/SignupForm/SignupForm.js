import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './SignupForm.scss';

function SignupForm(props) {
  return (
    <div className={classNames(styles.container, props.className)}>
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

SignupForm.propTypes = {
  className: PropTypes.string.isRequired,
};

export default SignupForm;
