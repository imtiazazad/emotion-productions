import { t } from 'i18next';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';

const CardAnim = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center shadow-2xl gap-3 mt-14 py-10 overflow-hidden'>
            <div className="flex flex-col md:flex-row w-full bg-[#1E1E1E] rounded-2xl">
                <Fade bottom>
                    <div className="grid card rounded-box place-items-center">
                        <div className="grid card rounded-box place-items-center p-3 space-y-2">
                            <img src="https://i.ibb.co/c2LyLcF/1.png" alt="" className="p-5" />
                            <h3 className="text-2xl leading-tight">{t("services.animationPage.topBanner.card.crd1.title")}</h3>
                            <p className="pb-3 px-3">{t("services.animationPage.topBanner.card.crd1.desc")?.slice(0,120)}</p>
                            <button className="text-indigo-500 group flex gap-2 hover:gap-7 items-center justify-center font-semibold duration-300"> <span className="hidden group-hover:block group-hover:translate-x-5 group-hover:gap-7 duration-300"><FaArrowRight /></span> <span className="text-indigo-500 group-hover:text-indigo-600 -mt-1 group-hover:gap-7 duration-300">Learn More</span> <span className="block group-hover:hidden group-hover:translate-x-5 duration-300"><FaArrowRight /></span> </button>
                        </div>
                    </div>
                </Fade>
                <div className="divider"></div>
                <Fade top>
                    <div className="grid card rounded-box place-items-center">
                        <div className="grid card rounded-box place-items-center p-3 space-y-2">
                            <img src="https://i.ibb.co/tY8KFJp/2.png" alt="" className="p-5" />
                            <h3 className="text-2xl leading-tight">{t("services.animationPage.topBanner.card.crd2.title")}</h3>
                            <p className="pb-3 px-3">{t("services.animationPage.topBanner.card.crd2.desc")?.slice(0,120)}</p>
                            <button className="text-indigo-500 group flex gap-2 hover:gap-7 items-center justify-center font-semibold duration-300"> <span className="hidden group-hover:block group-hover:translate-x-5 group-hover:gap-7 duration-300"><FaArrowRight /></span> <span className="text-indigo-500 group-hover:text-indigo-600 -mt-1 group-hover:gap-7 duration-300">Learn More</span> <span className="block group-hover:hidden group-hover:translate-x-5 duration-300"><FaArrowRight /></span> </button>
                        </div>
                    </div>
                </Fade>
                <div className="divider"></div>
                <Fade bottom>
                    <div className="grid card rounded-box place-items-center">
                        <div className="grid card rounded-box place-items-center p-3 space-y-2">
                            <img src="https://i.ibb.co/JxR4ZBN/3.png" alt="" className="p-5" />
                            <h3 className="text-2xl leading-tight">{t("services.animationPage.topBanner.card.crd3.title")}</h3>
                            <p className="pb-3 px-3">{t("services.animationPage.topBanner.card.crd3.desc")?.slice(0,120)}</p>
                            <button className="text-indigo-500 group flex gap-2 hover:gap-7 items-center justify-center font-semibold duration-300"> <span className="hidden group-hover:block group-hover:translate-x-5 group-hover:gap-7 duration-300"><FaArrowRight /></span> <span className="text-indigo-500 group-hover:text-indigo-600 -mt-1 group-hover:gap-7 duration-300">Learn More</span> <span className="block group-hover:hidden group-hover:translate-x-5 duration-300"><FaArrowRight /></span> </button>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default CardAnim;



