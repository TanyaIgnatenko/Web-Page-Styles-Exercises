import React from 'react';
import classNames from 'classnames';

import UserIcon from '@/assets/images/user.png';
import EmailIcon from '@/assets/images/mail.png';
import PasswordIcon from '@/assets/images/lock.png';

import styles from './SignupForm.scss';

function SignupForm() {
  return (
    <div className={styles.container}>
      <h1>Create account</h1>
      <ul className={styles.socialMediaContainer}>
        <li className={styles.googlePlusIcon}>
          <a href='#'>
            <i className='fab fa-google-plus-g' />
          </a>
        </li>
        <li className={styles.facebookIcon}>
          <a href='#'>
            <i className='fab fa-facebook-f' />
          </a>
        </li>
        <li className={styles.twitterIcon}>
          <a href='#'>
            <i className='fab fa-twitter' />
          </a>
        </li>
      </ul>
      <p>Or use email for registration:</p>
      <div className={classNames(styles.innerAddon, styles.leftAddon)}>
        <img src={UserIcon} className={styles.inputIcon} />
        <input type='text' placeholder='Name' />
      </div>
      <div className={classNames(styles.innerAddon, styles.leftAddon)}>
        <img src={EmailIcon} className={styles.inputIcon} />
        <input type='email' placeholder='Email' />
      </div>
      <div className={classNames(styles.innerAddon, styles.leftAddon)}>
        <img src={PasswordIcon} className={styles.inputIcon} />
        <input type='password' placeholder='Password' />
      </div>
      <button className={styles.signupBtn}>SIGN UP</button>
    </div>
  );
}

export default SignupForm;
