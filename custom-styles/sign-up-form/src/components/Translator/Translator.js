import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import logoIcon from '@/assets/images/logo.svg';
import styles from './Translator.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Translator extends React.Component {
  render() {
    const { onSignIn } = this.props;
    return (
      <div className={classNames(styles.container, this.props.className)}>
        <img className={styles.logo} src={logoIcon} />
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Welcome Back!</h1>
          <p className={styles.text}>
            To keep connected with us please login with your personal info
          </p>
          <button className={styles.signinBtn} onClick={onSignIn}>
            SIGN IN
          </button>
        </div>
      </div>
    );
  }
}

Translator.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Translator.defaultProps = {
  className: '',
};

export default Translator;
