import React from 'react';
import AboutEmotion from '../../Components/AboutUS/AboutEmotion/AboutEmotion';
import FAQ from '../../Components/AboutUS/FAQ/FAQ';
import MissionVision from '../../Components/AboutUS/MissionVision/MissionVision';
import ReadyToTalk from '../../Components/AboutUS/ReadyToTalk/ReadyToTalk';
import OurServices from '../../Components/Home/OurServices/OurServices';

const AboutUS = () => {
    return (
        <div className=''>
            <AboutEmotion />
            <MissionVision />
            <OurServices />
            <ReadyToTalk />
            <FAQ />
        </div>
    );
};

export default AboutUS;