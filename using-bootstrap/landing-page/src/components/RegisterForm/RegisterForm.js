import React from 'react';

const RegisterForm = (props) => (
    <div id='registerForm' className='modal fade'>
        <div className='modal-dialog' role='document'>
            <div className='modal-content'>
                <div className='modal-header bg-info'>
                    <h4 className='modal-title text-light text-center'>
                        Register for Full Stack Conf
                    </h4>
                    <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                    </button>
                </div>
                <div className='modal-body'>
                    <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                        <button type='button' className='close' data-dismiss='alert' aria-label='Close'>
                            <span aria-hidden='true'>&times;</span>
                        </button>
                        <strong>Hurry!</strong> Early bird registration ends in 2 days.
                    </div>

                    <form>
                        <h5 className='mb-2'>Basic Info</h5>
                        <fieldset className='form-group'>
                            <label htmlFor='name'>Name:</label>
                            <input type='text' className='form-control' id='name'/>
                        </fieldset>
                        <fieldset className='form-group has-danger'>
                            <label htmlFor='mail' className='form-control-label pl-0'>Email:</label>
                            <input type='email' className='form-control form-control-danger' id='mail'/>
                        </fieldset>
                        <fieldset className='form-group'>
                            <label htmlFor='role'>Job Role:</label>
                            <select className='c-select form-control' id='role' name='user_role'>
                                <option value='full stack js developer'>Full Stack JavaScript Developer</option>
                                <option value='front end developer'>Front End Developer</option>
                                <option value='back end developer'>Back End Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='student'>Student</option>
                            </select>
                        </fieldset>

                        <hr className='my-2'/>
                        <h5 className='mb-2'>Which Topics Interest You Most?</h5>

                        <div className='form-check'>
                            <input className="form-check-input" type="checkbox" value="" id="1"/>
                            <label className="form-check-label" htmlFor="1">
                                JavaScript Frameworks
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className="form-check-input" type="checkbox" value="" id="2"/>
                            <label className="form-check-label" htmlFor="2">
                                JavaScript Libraries
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className="form-check-input" type="checkbox" value="" id="3"/>
                            <label className="form-check-label" htmlFor="3">
                                Node.js
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className="form-check-input" type="checkbox" value="" id="4"/>
                            <label className="form-check-label" htmlFor="4">
                                Build Tools
                            </label>
                        </div>
                        <div className='form-check'>
                            <input className="form-check-input" type="checkbox" value=""
                                   id="5"/>
                            <label className="form-check-label" htmlFor="5">
                                ES2015
                            </label>
                        </div>

                        <hr className='mb-2'/>
                        <h5 className='mb-2'>Payment Info</h5>

                        <div className='row'>
                            <div className='col-lg-6 form-group has-success'>
                                <label className='form-control-label pl-0' htmlFor='cc-num'>Card Number:</label>
                                <input className='form-control form-control-success' id='cc-num' type='text'/>
                            </div>

                            <div className='col-lg-3 form-group'>
                                <label htmlFor='zip'>Zip Code:</label>
                                <input className='form-control' id='zip' type='text'/>
                            </div>

                            <div className='col-lg-3 form-group'>
                                <label htmlFor='cvv'>CVV:</label>
                                <input className='form-control' id='cvv' type='text'/>
                            </div>
                        </div>

                        <div className='row'>
                            <label className='col-lg-12'>Expiration Date:</label>

                            <div className='col-lg-8 form-group'>
                                <select className='c-select form-control' id='exp-month'>
                                    <option value='1'>1 - January</option>
                                    <option value='2'>2 - February</option>
                                    <option value='3'>3 - March</option>
                                    <option value='4'>4 - April</option>
                                    <option value='5'>5 - May</option>
                                    <option value='6'>6 - June</option>
                                    <option value='7'>7 - July</option>
                                    <option value='8'>8 - August</option>
                                    <option value='9'>9 - September</option>
                                    <option value='10'>10 - October</option>
                                    <option value='11'>11 - November</option>
                                    <option value='12'>12 - December</option>
                                </select>
                            </div>
                            <div className='col-lg-4 form-group'>
                                <select className='c-select form-control' id='exp-year'>
                                    <option value='2016'>2016</option>
                                    <option value='2017'>2017</option>
                                    <option value='2018'>2018</option>
                                    <option value='2019'>2019</option>
                                    <option value='2020'>2020</option>
                                </select>
                            </div>
                        </div>

                        <hr className='mb-2'/>
                        <button type='submit' className='btn btn-primary btn-lg'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default RegisterForm;
