import { t } from 'i18next';
import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const TopBannerAnim = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-3 mt-14 overflow-hidden'>
            <div className='w-full md:w-3/6 p-0 '>
                <img draggable="false" style={{ animation: `bounce-in 20s infinite` }} className='w-16 mx-auto flex items-start ' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/vector-img-2-1.png" alt="" />
                <div className="">
                    <div className="">
                        <Slide top>
                            <h3 className="text-[70px] md:text-[150px] flex uppercase font-bold text-[#1E1E1E]"><Slide top duration={1000}>D</Slide> <Slide top duration={1500}>I</Slide> <Slide top duration={2000}>G</Slide> <Slide top duration={2500}>I</Slide> <Slide top duration={3000}>T</Slide> <Slide top duration={4000}>A</Slide> <Slide top duration={4500}>L</Slide></h3>
                        </Slide>
                        <Fade bottom>
                            <h4 className="text-3xl md:text-5xl font-bold text-white uppercase text-start -mt-24 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>{t("services.animationPage.topBanner.title")}</h4>
                            <p className="text-gray-200 text-xl font-thin py-5 text-start">{t("services.animationPage.topBanner.desc")}</p>
                            <hr />
                        </Fade>
                        <Fade bottom>
                            <div className="w-full flex flex-col md:flex-row justify-around items-center gap-3 mt-10">
                                <button className="py-3 px-7 rounded bg-indigo-600 hover:bg-indigo-400 duration-300 hover:scale-110 text-white text-xl">Get Started</button>
                                <button className="py-3 px-7 rounded duration-300 hover:scale-110 text-white text-xl  flex items-center gap-3"> <span className="text-indigo-600 text-4xl"><FaTelegram /></span> Join us on Telegram</button>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='w-full relative md:w-3/6 mx-auto p-4'>
                <div draggable="false" style={{ animation: `bounce-in 5s linear` }} className="bg-[url('https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/3d-handhold-phone-mobile.png')] relative rounded-3xl flex flex-col justify-center items-center w-52 md:w-full mx-auto h-52 md:h-[90vh] bg-cover">
                    <img draggable="false" style={{ animation: `bounce2 15s infinite` }} className='w-2/6 absolute bottom-20 -left-3' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/coub-img-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBannerAnim;