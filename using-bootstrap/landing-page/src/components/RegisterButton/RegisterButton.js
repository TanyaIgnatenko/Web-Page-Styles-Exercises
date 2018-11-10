import React from 'react';


const RegisterButton = (props) => (
    <button type="button"
            className="btn btn-outline-info btn-lg d-block mx-auto my-3"
            data-toggle='modal'
            data-target='#registerForm'>
        Don't miss out, register now!
    </button>
);

RegisterButton.propTypes = {};

export default RegisterButton;
