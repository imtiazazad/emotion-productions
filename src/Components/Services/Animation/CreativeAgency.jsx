import React from 'react';
import { Fade, Slide } from 'react-reveal';

const CreativeAgency = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 pb-32 overflow-hidden'>
            <div className='w-full md:w-3/6 p-0'>
                <div className="relative py-10 p-5">
                    <img draggable="false" style={{ animation: `bounce-in 10s` }} className='w-4/5 mx-auto p-5 absolute top-0 left-0' src="https://droitthemes.com/html/wavee/img/home_one/circle_line.png" alt="" />
                    <div className="">
                        <Slide top>
                            <h3 className="text-[50px] md:text-[120px] flex font-bold text-[#ffffff]"><Slide top duration={1000}>C</Slide> <Slide top duration={1500}>r</Slide> <Slide top duration={2000}>e</Slide> <Slide top duration={2500}>a</Slide> <Slide top duration={3000}>t</Slide> <Slide top duration={4000}>i</Slide> <Slide top duration={4500}>v</Slide> <Slide top duration={4500}>e</Slide></h3>
                        </Slide>
                        <Fade bottom>
                            <h3 className="text-[50px] md:text-[120px] -mt-7 md:-mt-20 flex font-bold text-[#ffffff]"><Slide top duration={1000}>A</Slide> <Slide top duration={1500}>g</Slide> <Slide top duration={2000}>e</Slide> <Slide top duration={2500}>n</Slide> <Slide top duration={3000}>c</Slide> <Slide top duration={4000}>y</Slide> </h3>
                        </Fade>
                    </div>
                    <img draggable="false" style={{ animation: `rubberBand 5s infinite` }} className='w-28 mx-auto p-5 absolute rotate-3 top-0 left-0' src="https://static.vecteezy.com/system/resources/previews/021/815/633/original/triangle-shape-icon-sign-free-png.png" alt="" />
                </div>
            </div>
            <div className='w-full md:w-3/6 p-0 '>
                <div className="w-full relative py-10">
                    <img draggable="false" style={{ animation: `bounce-in 10s` }} className='w-full mx-auto p-5' src="https://www.exposure.com/Customer-Content/www/CMS/files/marketing-agency.png" alt="" />
                    <img draggable="false" style={{ animation: `rubberBand 5s infinite` }} className='w-28 mx-auto p-5 mt-7 absolute bottom-0 right-0' src="https://static.vecteezy.com/system/resources/previews/021/815/633/original/triangle-shape-icon-sign-free-png.png" alt="" />

                </div>
            </div>

        </div>
    );
};

export default CreativeAgency;