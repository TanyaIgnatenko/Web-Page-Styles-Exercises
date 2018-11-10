import React from 'react';

import PortlandImage from '../../assets/images/portland.jpg';

const AboutSection = (props) => (
    <div className='row'>
        <div className='col-md-4 order-md-2'>
            <h3 className='mb-4' id='about'>About Full Stack Conf</h3>
            <img className='mb-3 img-fluid img-rounded d-none d-sm-block' src={PortlandImage}/>
            <p>The beautiful city of Portland, Oregon will be the host city for Full Stack Conf!</p>
            <p>Explore the future of JavaScript with a lineup of industry professionals. Discover new techniques to
                advance your career as a web developer.</p>
        </div>
        <div className='col-md-4 order-md-1'>
            <h3 className='mb-4'>Expert Speakers</h3>
            <p>Our expert speaker lineup was just announced, so don't wait too long before grabbing your tickets!</p>
            <p>Want to meet the international JavaScript community and share skills with some of the world's top
                experts, hackers, and makers? Be the first to know what to expect for the future of JavaScript.</p>
            <p>Full Stack Conf is committed to being inclusive and welcoming for everyone. We look forward to another
                intensive day of learning and sharing.</p>
        </div>
        <div className='col-md-4 order-3'>
            <h3 className="mb-4">What You'll Learn</h3>
            <div className="list-group">
                <a href="#" className="list-group-item"><strong>MongoDB</strong>: NoSQL database</a>
                <a href="#" className="list-group-item"><strong>Angular</strong>: JavaScript framework </a>
                <a href="#" className="list-group-item"><strong>Express</strong>: Framework for Node</a>
                <a href="#" className="list-group-item"><strong>Node.js</strong>: JavaScript environment</a>
                <a href="#" className="list-group-item"><strong>ES2015</strong>: Latest version of JavaScript</a>
                <a href="#" className="list-group-item"><strong>Babel</strong>: JavaScript compiler</a>
            </div>
        </div>
    </div>
);

export default AboutSection;
