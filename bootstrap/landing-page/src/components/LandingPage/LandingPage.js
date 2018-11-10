import React, {Fragment} from 'react';

import NavBar from "../NavBar/NavBar";
import MainSection from "../MainSection/MainSection";
import AboutSection from "../AboutSection/AboutSection";
import SpeakersSection from "../SpeakersSection/SpeakersSection";
import ScheduleSection from "../ScheduleSection/ScheduleSection";
import RegisterButton from "../RegisterButton/RegisterButton";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import Footer from "../Footer/Footer";
import RegisterForm from "../RegisterForm/RegisterForm";

const LandingPage = props => (
    <Fragment>
        <NavBar/>
        <MainSection/>
        <div className='container'>
            <AboutSection/>
            <SpeakersSection/>
            <ScheduleSection/>
            <RegisterButton/>
            <SubscribeSection/>
            <Footer/>
        </div>
        <RegisterForm/>
    </Fragment>
);

export default LandingPage;
