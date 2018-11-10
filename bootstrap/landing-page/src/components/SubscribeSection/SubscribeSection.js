import React, {Fragment} from 'react';

const SubscribeSection = (props) => (
    <Fragment>
        <hr/>
        <div className="row p-y-2 text-muted">
            <div className="col-md-6 col-xl-5">
                <p><strong>About Treehouse</strong></p>
                <p>
                    Treehouse brings affordable technology education to people everywhere to help them achieve their
                    dreams and change the world.
                </p>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-2">
                <p><strong>Stay up-to-date on Full Stack Conf</strong></p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Email"/>
                    <span className="input-group-btn">
			        <button className="btn btn-primary" type="button">Sign up</button>
                </span>
                </div>
            </div>
        </div>
        <hr/>
    </Fragment>
);

export default SubscribeSection;
