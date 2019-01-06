import React from 'react';
import classNames from 'classnames';

import SignupForm from '../SignupForm/SignupForm';
import Translator from '../Translator/Translator';

import styles from './App.scss';

class App extends React.Component {
  state = {
    reordered: false,
  };

  handleSignIn = () => {
    this.setState(state => ({
      reordered: !state.reordered,
    }));
  };

  render() {
    const { reordered } = this.state;
    return (
      <div className={styles.container}>
        <Translator
          className={classNames(
            styles.translator,
            reordered && styles.reordered,
          )}
          onSignIn={this.handleSignIn}
        />
        <SignupForm
          className={classNames(styles.form, reordered && styles.reordered)}
        />
      </div>
    );
  }
}

export default App;
