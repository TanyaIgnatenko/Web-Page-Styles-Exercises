import React from 'react';

import SigninTranslator from '../SigninTranslator/SigninTranslator';
import SignupForm from '../SignupForm/SignupForm';

import styles from './App.scss';

function App() {
  return (
    <div className={styles.container}>
      <SigninTranslator />
      <SignupForm />
    </div>
  );
}

export default App;
