import React, {Fragment} from 'react';

import NavBar from "../NavBar/NavBar";
import MainSection from "../MainSection/MainSection";
import AboutSection from "../AboutSection/AboutSection";

const LandingPage = props => (
    <Fragment>
        <NavBar/>
        <MainSection/>
        <AboutSection/>
        {/*<SpeakersSection/>*/}
        {/*<ScheduleSection/>*/}
        {/*<RegisterButton/>*/}
        {/*<SubscribeSection/>*/}
        {/*<Footer/>*/}
    </Fragment>
);

export default LandingPage;
