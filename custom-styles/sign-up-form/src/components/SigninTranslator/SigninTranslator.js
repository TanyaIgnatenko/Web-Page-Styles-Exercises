import React from 'react';

import logoIcon from '@/assets/images/logo.svg';
import styles from './SigninTranslator.scss';

function SigninTranslator() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoIcon} />
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>Welcome Back!</h1>
        <p className={styles.text}>
          To keep connected with us please login with your personal info
        </p>
        <button className={styles.signinBtn}>SIGN IN</button>
      </div>
    </div>
  );
}

export default SigninTranslator;
