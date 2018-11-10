import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => (
    <div className='row p-y-1'>
        <div className='col-md-7'>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Tracks</a>
                </li>
                <li className="nav-item">
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn-light">Other confs</button>
                        <button type="button" className="btn btn-light dropdown-toggle dropdown-toggle-split"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">CSS conf</a>
                            <a className="dropdown-item" href="#">Python conf</a>
                            <a className="dropdown-item" href="#">Java conf</a>
                            <a className="dropdown-item" href="#">Swift conf</a>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className='col-md-5 text-md-right'>
            <small>&copy; Full Stack Conf &amp; Treehouse</small>
        </div>
    </div>
);

export default Footer;
