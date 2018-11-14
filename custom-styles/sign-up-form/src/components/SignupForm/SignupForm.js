import React from 'react';
import UserIcon from '../../assets/images/user.png';
import EmailIcon from '../../assets/images/mail.png';
import PasswordIcon from '../../assets/images/lock.png';

import './SignupForm.scss';


const SignupForm = (props) => (
    <div className='signup-form__container'>
        <h1 className={'signup-form__title'}>Create account</h1>
                <ul className='signup-form__social-media-icons'>
                    <li className='signup-form__google-icon'>
                        <a href='#'>
                            <i className='fab fa-google-plus-g'></i>
                        </a>
                    </li>
                    <li className='signup-form__facebook-icon'>
                        <a href='#'>
                            <i className='fab fa-facebook-f'></i>
                        </a>
                    </li>
                    <li className='signup-form__twitter-icon'>
                        <a href='#'>
                            <i className='fab fa-twitter'></i>
                        </a>
                    </li>
                </ul>
        <p className='signup-form__paragraph'>Or use email for registration:</p>
        <div className='inner-addon left-addon signup-form__input-container'>
            <img src={UserIcon} className='input-icon'/>
            <input type='text' placeholder='Name'/>
        </div>
        <div className='inner-addon left-addon signup-form__input-container'>
            <img src={EmailIcon} className='input-icon'/>
            <input type='email' placeholder='Email'/>
        </div>
        <div className='inner-addon left-addon signup-form__input-container'>
            <img src={PasswordIcon} className='input-icon'/>
            <input type='password' placeholder='Password'/>
        </div>
        <button className='submit'>SIGN UP</button>
    </div>
);

export default SignupForm;
