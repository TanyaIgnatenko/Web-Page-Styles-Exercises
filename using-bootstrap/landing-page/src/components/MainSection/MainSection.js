import React from 'react';

import './MainSection.scss';


const MainSection = props => (
    <div className='jumbotron bg-info text-light text-center pt-3'>
        <h1 className='display-2'>
            <strong>Full Stack Conf</strong>
        </h1>
        <p className='lead'>
            <strong>A one-day conference about All Things JavaScript</strong>
        </p>
        <div className="btn-group btn-group-lg mt-2" role="group">
            <button type='button'
                    className='btn btn-primary'
            >
                Register now
            </button>
            <a className='btn btn-light'
               href='#Speakers'
               role='button'
            >
                See speakers
            </a>
        </div>
    </div>
);

export default MainSection;
