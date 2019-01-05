import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App';

import './index.scss';

const signupFormNode = document.getElementById('sign-up-form-node');
render(<App />, signupFormNode);
