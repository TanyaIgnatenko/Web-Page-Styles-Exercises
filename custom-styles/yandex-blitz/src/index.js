import React from 'react';
import { render } from 'react-dom';

import Logo from './components/Logo/Logo';

import './index.scss';

const logoNode = document.getElementById('logo-node');
render(<Logo />, logoNode);
