import React from 'react';
import UserIcon from '../../assets/images/user.png';
import EmailIcon from '../../assets/images/mail.png';
import PasswordIcon from '../../assets/images/lock.png';

import './SignupForm.scss';


const SignupForm = (props) => (
    <div className='container pt-5'>
        <h1 className='text-center display-3'><strong>Create account</strong></h1>
        <div className='container mt-4 mb-4'>
            <div className="social-media">
                <ul className="social-media-icons">
                    <li className="google">
                        <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                    </li>
                    <li className="facebook">
                        <a href="#">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="twitter">
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <p className='text-center mt-3'>Or use email for registration:</p>
        <div className="inner-addon left-addon col-6 offset-3 mb-2">
            <img src={UserIcon} className='img'/>
            <input type="text" className="form-control"/>
        </div>
        <div className="inner-addon left-addon col-6 offset-3 mb-2">
            <img src={EmailIcon} className='img'/>
            <input type="text" className="form-control"/>
        </div>
        <div className="inner-addon left-addon col-6 offset-3">
            <img src={PasswordIcon} className='img'/>
            <input type="text" className="form-control"/>
        </div>
        <button className='btn btn-lg text-light offset-4 col-4 mt-4'>SIGN UP</button>
    </div>
);

export default SignupForm;
