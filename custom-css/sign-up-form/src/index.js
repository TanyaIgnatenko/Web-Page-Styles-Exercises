import React from 'react';
import {render} from 'react-dom';

import SignupForm from "./components/SignupForm/SignupForm";

import './index.scss';


const signupFormNode = document.getElementById('sign-up-form-node');
render(<SignupForm/>, signupFormNode);
