import { t } from 'i18next';
import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Strategy = () => {
    return (
        <div className='w-full h-full mt-14 overflow-hidden py-10'>
            <div className='w-full h-full p-2'>
                <div className="w-full h-full relative mx-auto">
                    <div className="md:w-5/6 mx-auto text-center pb-10">
                        <Slide top>
                            <h3 className="text-[70px] md:text-[150px] text-center flex mx-auto w-full justify-center uppercase font-bold text-[#1E1E1E]"><Slide top duration={1000}>S</Slide> <Slide top duration={1500}>T</Slide> <Slide top duration={2000}>R</Slide> <Slide top duration={2500}>A</Slide> <Slide top duration={3000}>T</Slide> <Slide top duration={4000}>E</Slide> <Slide top duration={4500}>G</Slide> <Slide top duration={5000}>Y</Slide></h3>
                        </Slide>
                        <Fade bottom>
                            <h4 className="text-2xl md:text-5xl text-center w-full font-bold text-white capitalize md:uppercase -mt-10 md:-mt-24 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>{t("services.animationPage.whyChoose.title")}</h4>
                            <p className="text-md text-center w-full font-semibold text-white capitalize tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>{t("services.animationPage.whyChoose.desc")}</p>
                        </Fade>
                    </div>
                    <div className="relative w-full h-full">
                        <img draggable="false" style={{ animation: `bounce2 15s infinite` }} className='w-2/3 mx-auto relative h-[50vh] md:h-[100vh]' src="https://i.ibb.co/HgGpJJP/banner-image-1-1-d9080972e9bafe1029b1867172a79135-transformed.png" alt="" />
                        <img draggable="false" style={{ animation: `bounce-in 15s infinite` }} className='w-40 absolute hidden md:block right-40 top-10' src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/coub-img-1.png" alt="" />
                        <div className="md:absolute top-0 left-0 right-0 bottom-0 w-full h-full">

                            <Fade bottom>
                                <div className="w-full flex flex-col md:flex-row justify-around items-center gap-3 mt-10">
                                    <Slide left>
                                        <div className="flex justify-between items-center px-5 py-5 gap-2 group bg-[#2525259c] hover:bg-slate-300 border rounded w-full md:w-2/6">
                                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/ib-icon-1.png" alt="" className="w-10 h-10 md:w-16 md:h-16" />
                                            <div className="space-y-2 text-start pl-5">
                                                <h3 className="md:text-md font-bold uppercase text-teal-700">{t("services.animationPage.whyChoose.card.crd1.title")}</h3>
                                                <p className="text-sm text-white group-hover:text-gray-700">{t("services.animationPage.whyChoose.card.crd1.desc")}</p>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide right>
                                        <div className="flex justify-between items-center px-5 py-5 gap-2 group bg-[#2525259c] hover:bg-slate-300 border rounded w-full md:w-2/6">
                                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/vector-img-6.png" alt="" className="w-10 h-10 md:w-16 md:h-16" />
                                            <div className="space-y-2 text-start pl-5">
                                                <h3 className="md:text-md font-bold uppercase text-teal-700">{t("services.animationPage.whyChoose.card.crd2.title")}</h3>
                                                <p className="text-sm text-white group-hover:text-gray-700">{t("services.animationPage.whyChoose.card.crd2.desc")}</p>
                                            </div>
                                        </div>
                                    </Slide>

                                </div>
                                <div className="w-full flex flex-col md:flex-row justify-around items-center gap-3 mt-10">
                                    <Slide left>
                                        <div className="flex justify-between items-center px-5 py-5 gap-2 md:-ml-20 group bg-[#2525259c] hover:bg-slate-300 border rounded w-full md:w-2/6">
                                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/ib-icon-6.png" alt="" className="w-10 h-10 md:w-16 md:h-16" />
                                            <div className="space-y-2 text-start pl-5">
                                                <h3 className="md:text-md font-bold uppercase text-teal-700">{t("services.animationPage.whyChoose.card.crd3.title")}</h3>
                                                <p className="text-sm text-white group-hover:text-gray-700">{t("services.animationPage.whyChoose.card.crd3.desc")}</p>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide right>
                                        <div className="flex justify-between items-center px-5 py-5 gap-2 md:-mr-20 group bg-[#2525259c] hover:bg-slate-300 border rounded w-full md:w-2/6">
                                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/ib-icon-5.png" alt="" className="w-10 h-10 md:w-16 md:h-16" />
                                            <div className="space-y-2 text-start pl-5">
                                                <h3 className="md:text-md font-bold uppercase text-teal-700">{t("services.animationPage.whyChoose.card.crd4.title")}</h3>
                                                <p className="text-sm text-white group-hover:text-gray-700">{t("services.animationPage.whyChoose.card.crd4.desc")}</p>
                                            </div>
                                        </div>
                                    </Slide>


                                </div>
                                <div className="w-full flex flex-col md:flex-row justify-around items-center gap-3 mt-10">
                                    <Slide left>
                                        <div className="flex justify-between items-center px-5 py-5 gap-2 group bg-[#2525259c] hover:bg-slate-300 border rounded w-full md:w-2/6">
                                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/ib-icon-4.png" alt="" className="w-10 h-10 md:w-16 md:h-16" />
                                            <div className="space-y-2 text-start pl-5">
                                                <h3 className="md:text-md font-bold uppercase text-teal-700">{t("services.animationPage.whyChoose.card.crd5.title")}</h3>
                                                <p className="text-sm text-white group-hover:text-gray-700">{t("services.animationPage.whyChoose.card.crd5.desc")}</p>
                                            </div>
                                        </div>
                                    </Slide>
                                    <Slide right>
                                        <div className="flex justify-between items-center px-5 py-5 gap-2 group bg-[#2525259c] hover:bg-slate-300 border rounded w-full md:w-2/6">
                                            <img src="https://wgl-demo.net/zeptech/wp-content/uploads/2021/07/ib-icon-7.png" alt="" className="w-10 h-10 md:w-16 md:h-16" />
                                            <div className="space-y-2 text-start pl-5">
                                                <h3 className="md:text-md font-bold uppercase text-teal-700">{t("services.animationPage.whyChoose.card.crd6.title")}</h3>
                                                <p className="text-sm text-white group-hover:text-gray-700">{t("services.animationPage.whyChoose.card.crd6.desc")}</p>
                                            </div>
                                        </div>
                                    </Slide>

                                </div>
                            </Fade>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Strategy;