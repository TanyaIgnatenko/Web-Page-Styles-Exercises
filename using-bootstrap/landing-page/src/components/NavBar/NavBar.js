import React from 'react';

import './NavBar.scss';


const NavBar = (props) => (
    <nav className='navbar navbar-expand-sm navbar-dark bg-primary'>
        <button type='button'
                className='navbar-toggler'
                data-toggle='collapse'
                data-target='#navbarItems'
                aria-controls='navbarItems'
                aria-expanded='false'
                aria-label='Toggle navigation'
        >
            <span className='navbar-toggler-icon'></span>
        </button>
        <div id='navbarItems'
             className='collapse navbar-collapse'
        >
            <div className='container'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <a className='nav-link' href='#Home'>Home<span className='sr-only'>(current)</span></a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#About'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#Speakers'>Speakers</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link' href='#Schedule'>Schedule</a>
                    </li>
                </ul>
            </div>
            <a className='navbar-brand d-none d-md-block mr-0'
               href='https://teamtreehouse.com/'
            >
                Presented by Treehouse
            </a>
        </div>
    </nav>
);

export default NavBar;
