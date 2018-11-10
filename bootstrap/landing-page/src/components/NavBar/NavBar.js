import React from 'react';

import './NavBar.scss';


function NavBar(props) {
    document.body.setAttribute('id', 'home');
    document.body.setAttribute('data-spy', 'scroll');
    document.body.setAttribute('data-target', '.navbar');
    document.body.setAttribute('data-offset', '200');

    return (
        <nav className='navbar navbar-expand-sm navbar-dark bg-primary fixed-top mb-5'>
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
                            <a className='nav-link' href='#home'>Home<span className='sr-only'>(current)</span></a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#speakers'>Speakers</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#schedule'>Schedule</a>
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
}

export default NavBar;
