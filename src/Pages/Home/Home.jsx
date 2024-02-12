import React from 'react';
import Banner from '../../Components/Home/Banner';
import BrandConcepts from '../../Components/Home/BrandConcepts/BrandConcepts';
import BrandEmpowerment from '../../Components/Home/BrandEmpowerment/BrandEmpowerment';
import BrandPortfolios from '../../Components/Home/BrandPortfolios/BrandPortfolios';
import EPServices from '../../Components/Home/EPServices/EPServices';
import MakingHappyEveryday from '../../Components/Home/MakingHappyEveryday/MakingHappyEveryday';
import OurServices from '../../Components/Home/OurServices/OurServices';
import OurWorks from '../../Components/Home/OurWorks/OurWorks';
import TrustedBy from '../../Components/Home/TrustedBy/TrustedBy';
import WhatWeDo from '../../Components/Home/WhatWeDo/WhatWeDo';
import WhyEmotion from '../../Components/Home/WhyEmotion/WhyEmotion';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyEmotion/>
            <TrustedBy/>
            <OurWorks/>
            <BrandConcepts/>
            <BrandEmpowerment/>
            <EPServices/>
            <BrandPortfolios/>
            <WhatWeDo/>
            <OurServices/>
            <MakingHappyEveryday/>
        </div>
    );
};

export default Home;
