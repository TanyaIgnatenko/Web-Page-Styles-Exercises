import React from 'react';

import './MainSection.scss';


const MainSection = props => (
    <div className="jumbotron jumbotron-fluid bg-info text-light">
        <div className="container text-center pt-3">
            <h1 className="display-2"><strong>Full Stack Conf</strong></h1>
            <p className="lead"><strong>A one-day conference about All Things JavaScript</strong></p>
            <div className="btn-group mt-2" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#registerForm">
                    Register now
                </button>
                <a type="button" className="btn btn-light btn-lg" href='#speakers'>See speakers</a>
            </div>
        </div>
    </div>
);

export default MainSection;
