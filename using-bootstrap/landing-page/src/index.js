import React from 'react';
import {render} from 'react-dom';

import LandingPage from "./components/LandingPage/LandingPage";

import './index.scss';


const landingPageNode = document.getElementById('landing-page-node');
render(<LandingPage/>, landingPageNode);
