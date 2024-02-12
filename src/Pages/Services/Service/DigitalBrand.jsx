import React, { useEffect, useState } from 'react';
import TrustedPartnersAnim from '../../../Components/Services/Animation/TrustedPartnersAnim';
import { Fade, Slide } from 'react-reveal';
import Slider from 'react-slick';
import CountUp from 'react-countup';
import { t } from 'i18next';

const DigitalBrand = () => {
    const [counter, setCounter] = useState(0);

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "red" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (counter < 2) {
                setCounter(counter + 1);
            } else {
                setCounter(0);
            }
        }, 3000);

        return () => clearInterval(intervalId);
    }, [counter]);
    return (
        <div className='container mx-auto overflow-hidden'>
            {/*=========================== carousel  =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                <div className="w-full md:w-1/2 p-0 md:pl-20 text-left space-y-5">
                    <Slide left duration={1000}>
                        <p className=' text-left text-gray-500 mb-2'>{t("services.digitalBrandPage.subTitle")}</p>
                    </Slide>
                    <Slide left duration={1500}>
                        <h2 className="text-left font-thin text-3xl md:text-6xl text-white pb-10">{t("services.digitalBrandPage.title")}</h2>
                    </Slide>
                    <Slide bottom duration={2000}>
                        <button className="text-left text-white relative group">
                            <span className="bg-teal-600 px-7 p-4 z-10 relative group-hover:bg-indigo-950 duration-300">READ MORE</span>
                            <img src="https://svgshare.com/i/rry.svg" alt="" className="z-0 absolute -bottom-7 -right-3 group-hover:-bottom-2 group-hover:-right-0 duration-300" />
                        </button>
                    </Slide>
                </div>

                <div className="w-full md:w-1/2 mx-auto pt-7 md:pt-0 p-0">
                    <Slider {...settings}>
                        <div>
                            <img className='md:h-[85vh] w-full object-cover' src={"https://i.ibb.co/zfrHFBp/17.png"} alt='' />
                        </div>
                        <div>
                            <img className='md:h-[85vh] w-full object-cover' src={"https://i.ibb.co/Q9qyYg9/14.png"} alt='' />
                        </div>
                        <div>
                            <img className='md:h-[85vh] w-full object-cover' src={"https://i.ibb.co/Lpx3MFV/4.png"} alt='' />
                        </div>
                    </Slider>
                </div>
            </div>
            
            {/*===========================our  Goal  =======================*/}
            <div className='grid grid-cols-1  sm:grid-cols-3 place-items-center mt-36 gap-5 w-full md:w-5/6 mx-auto'>

                <Slide bottom duration={1000}>
                    <div className='flex justify-center items-start'>
                        <span className='mr-4'>
                            <img className='' src="https://i.ibb.co/Qn8Kttw/images-removebg-preview.png" alt="" />
                        </span>
                        <span className=''>
                            <h2 className='text-left text-white font-black'>{t("services.digitalBrandPage.topCrd.crd1.title")}</h2>
                            <p className='text-white text-justify'>{t("services.digitalBrandPage.topCrd.crd1.desc")}</p>
                            <button className='text-gray-500 flex pt-2 justify-items-end bottom-1 border-b'>Explore</button>
                        </span>
                    </div>
                </Slide>
                <Slide top duration={1500}>
                    <div className='flex justify-center items-start'>
                        <span className='mr-4'>
                            <img src="https://i.ibb.co/Qn8Kttw/images-removebg-preview.png" alt="" />
                        </span>
                        <span>
                            <h2 className='text-left text-white font-black'>{t("services.digitalBrandPage.topCrd.crd2.title")}</h2>
                            <p className='text-white text-justify'>{t("services.digitalBrandPage.topCrd.crd2.desc")}</p>
                            <button className='text-gray-500 flex pt-2 justify-items-end bottom-1 border-b'>Explore</button>
                        </span>
                    </div>
                </Slide>
                <Slide bottom duration={1000}>
                    <div className='flex justify-center items-start'>
                        <span className='mr-4'>
                            <img src="https://i.ibb.co/Qn8Kttw/images-removebg-preview.png" alt="" />
                        </span>
                        <span>
                            <h2 className='text-left text-white font-black'>{t("services.digitalBrandPage.topCrd.crd3.title")}</h2>
                            <p className='text-white text-justify'>{t("services.digitalBrandPage.topCrd.crd3.desc")}</p>
                            <button className='text-gray-500 flex pt-2 justify-items-end bottom-1 border-b'>Explore</button>
                        </span>
                    </div>
                </Slide>
            </div>

            {/*=========================== Goal end content =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-36 w-full md:w-5/6 mx-auto'>

                <div className='w-full p-4'>
                    <Fade bottom>
                        <img className=' w-full h-96 object-cover rounded' src="https://i.ibb.co/t4hX8tS/verpakking-Balteum.jpg" alt="" />
                    </Fade>
                </div>


                <div class="w-1 rounded-xl hidden md:block h-40 bg-gray-200"></div>


                <div className='w-full p-4 space-y-3 text-start'>
                    <Slide right duration={1000}>
                        <h2 className='text-left text-white text-3xl md:text-5xl'>{t("services.digitalBrandPage.digitalStart.title")}</h2>
                    </Slide>
                    <Slide right duration={1500}>
                        <p className='inline-block text-white align-middle  text-justify sm:text-left pt-3'>
                        {t("services.digitalBrandPage.digitalStart.desc")}
                        </p>
                    </Slide>
                </div>
            </div>

            {/*=========================== Strategy =======================*/}
            <div className='grid grid-cols-1 sm:grid-cols-3 place-items-center mt-36  gap-24 w-full md:w-5/6 mx-auto'>
                <Fade bottom duration={1000}>
                    <div className=''>
                        <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                            <span className='flex justify-start'>
                                <img className='' src="https://i.ibb.co/SBxcwVG/ezgif-com-gif-maker.png" alt="" />
                            </span>
                        </span>
                        <span className=''>
                            <h2 className='mt-2 text-left text-white font-black'>{t("services.digitalBrandPage.digitalStart.cards.crd1.title")}</h2>
                            <p className='text-white text-left '>{t("services.digitalBrandPage.digitalStart.cards.crd1.desc")}</p>
                        </span>
                    </div>
                </Fade>
                <Fade bottom duration={1500}>
                    <div className=''>
                        <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                            <span className='flex justify-start'>
                                <img className='' src="https://i.ibb.co/sQPTxd2/ezgif-com-gif-maker-1.png" alt="" />
                            </span>
                        </span>
                        <span className=''>
                            <h2 className='mt-2 text-left text-white font-black'>{t("services.digitalBrandPage.digitalStart.cards.crd2.title")}</h2>
                            <p className='text-white text-left '>{t("services.digitalBrandPage.digitalStart.cards.crd2.desc")}</p>
                        </span>
                    </div>
                </Fade>
                <Fade bottom duration={2000}>
                    <div className=''>
                        <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                            <span className='flex justify-start'>
                                <img className='' src="https://i.ibb.co/8DFvvBd/ezgif-com-gif-maker-4.png" alt="" />
                            </span>
                        </span>
                        <span className=''>
                            <h2 className='mt-2 text-left text-white font-black'>{t("services.digitalBrandPage.digitalStart.cards.crd3.title")}</h2>
                            <p className='text-white text-left '>{t("services.digitalBrandPage.digitalStart.cards.crd3.desc")}</p>
                        </span>
                    </div>
                </Fade>
                <Fade bottom duration={2500}>
                    <div className=''>
                        <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                            <span className='flex justify-start'>
                                <img className='' src="https://i.ibb.co/Tbbr8dm/ezgif-com-gif-maker.png" alt="" />
                            </span>
                        </span>
                        <span className=''>
                            <h2 className='mt-2 text-left text-white font-black'>{t("services.digitalBrandPage.digitalStart.cards.crd4.title")}</h2>
                            <p className='text-white text-left '>{t("services.digitalBrandPage.digitalStart.cards.crd4.desc")}</p>
                        </span>
                    </div>
                </Fade>
                <Fade bottom duration={3000}>
                    <div className=''>
                        <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                            <span className='flex justify-start'>
                                <img className='' src="https://i.ibb.co/8M59J1Q/ezgif-com-gif-maker-1.png" alt="" />
                            </span>
                        </span>
                        <span className=''>
                            <h2 className='mt-2 text-left text-white font-black'>{t("services.digitalBrandPage.digitalStart.cards.crd5.title")}</h2>
                            <p className='text-white text-left '>{t("services.digitalBrandPage.digitalStart.cards.crd5.desc")}</p>
                        </span>
                    </div>
                </Fade>
                <Fade bottom duration={3500}>
                    <div className=''>
                        <span className='w-16 h-16 bg-slate-700 flex justify-center items-center rounded-full p-3'>
                            <span className='flex justify-start'>
                                <img className='' src="https://i.ibb.co/tz4MXQF/ezgif-com-gif-maker-2.png" alt="" />
                            </span>
                        </span>
                        <span className=''>
                            <h2 className='mt-2 text-left text-white font-black'>{t("services.digitalBrandPage.digitalStart.cards.crd6.title")}</h2>
                            <p className='text-white text-left '>{t("services.digitalBrandPage.digitalStart.cards.crd6.desc")}</p>
                        </span>
                    </div>
                </Fade>

            </div>

            {/*=========================== Goal end content =======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-36 w-full md:w-5/6 mx-auto'>
                <div className='w-full p-4'>
                    <Slide bottom duration={1000}>
                        <h2 className='text-center text-white text-2xl sm:text-5xl sm:text-left'>{t("services.digitalBrandPage.digitalStart.innApp.title")}</h2>
                    </Slide>
                    <Slide bottom duration={1500}>
                        <p className='inline-block text-white align-middle  text-justify sm:text-left pt-3'>{t("services.digitalBrandPage.digitalStart.innApp.desc")}
                        </p>
                    </Slide>
                </div>
                <div className='w-full p-4'>
                    <Slide right duration={1000}>
                        <img className=' w-full h-96 object-cover rounded' src="https://i.ibb.co/cXg7Dqc/belladi-packaging.jpg" alt="" />
                    </Slide>
                </div>
            </div>

            {/*=========================== Experts=======================*/}
            <div className='flex flex-col md:flex-row justify-between items-center  mt-32 w-full md:w-5/6 mx-auto'>
                <div className='w-full p-4 space-y-5'>
                    <Slide bottom duration={1000}>
                        <h2 className='text-center text-white text-2xl sm:text-5xl sm:text-left'>{t("services.digitalBrandPage.digitalStart.digiExp.title")}</h2>
                    </Slide>
                    <Slide bottom duration={1500}>
                        <p className='text-left text-white '>{t("services.digitalBrandPage.digitalStart.digiExp.desc")}
                        </p>
                    </Slide>
                </div>
                <div className='w-full p-4'>
                    <Slide right duration={1000}>
                        <div class="p-8 w-full ">
                            <div class="flex items-center justify-between">
                                <span class="text-slate-400 font-black "> Development</span>
                                <span class="px-2 py-1 rounded-lg text-xl text-white font-medium min-w-[46px] text-center"><CountUp delay={2} end={60} />%</span>
                            </div>

                            <div class="w-full bg-slate-100 h-2 mb-6 mt-2">
                                <div class="bg-teal-400 h-2 rounded" style={{ width: "60%" }}></div>
                            </div>

                            <div class="flex items-center justify-between">
                                <span class="text-slate-400 font-black ">Design</span>
                                <span class="px-2 py-1 rounded-lg text-xl text-white font-medium min-w-[46px] text-center"><CountUp delay={2} end={85} />%</span>
                            </div>

                            <div class="w-full bg-slate-100 h-2 mb-6 mt-2">
                                <div class="bg-teal-400 h-2 rounded" style={{ width: "85%" }}></div>
                            </div>

                            <div class="flex items-center justify-between">
                                <span class="text-slate-400 font-black">Art</span>
                                <span class="px-2 py-1 rounded-lg text-xl text-white font-medium min-w-[46px] text-center"><CountUp delay={2} end={50} />%</span>
                            </div>

                            <div class="w-full bg-slate-100 h-2 mb-6 mt-2">
                                <div class="bg-teal-400 h-2 rounded" style={{ width: "55%" }}></div>
                            </div>

                            <div class="flex items-center justify-between">
                                <span class="text-slate-400 font-black">Business</span>
                                <span class="px-2 py-1 rounded-lg text-xl text-white font-medium min-w-[46px] text-center"><CountUp delay={2} end={75} />%</span>
                            </div>

                            <div class="w-full bg-slate-100 h-2 mb-6 mt-2">
                                <div class="bg-teal-400 h-2 rounded" style={{ width: "75%" }}></div>
                            </div>

                            <div class="flex items-center justify-between">
                                <span class="text-slate-400 font-black">LTS</span>
                                <span class="px-2 py-1 rounded-lg text-xl text-white font-medium min-w-[46px] text-center"><CountUp delay={2} end={100} />%</span>
                            </div>

                            <div class="w-full bg-slate-100 h-2 mt-2">
                                <div class="bg-teal-400 h-2 rounded" style={{ width: "100%" }}></div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            {/*===========================   showcase your business=======================*/}
            <div >
                <Slide bottom duration={1000}>
                    <div className='flex flex-col md:flex-row justify-between items-center  mt-36 w-full md:w-5/6 mx-auto'>
                        <div class="w-64 h-80 overflow-hidden">
                            <img class="transform object-cover hover:scale-110 transition duration-300" src="https://i.ibb.co/JcFk1nn/Carabinier.jpg" alt="Your" />
                        </div>
                        <div class="w-64 h-80 overflow-hidden">
                            <img class="transform object-cover hover:scale-110 transition duration-300" src="https://i.ibb.co/jGgmfN6/Carabinier-black.jpg" alt="Your" />
                        </div>
                        <div class="w-64 h-80 overflow-hidden">
                            <img class="transform object-cover hover:scale-110 transition duration-300" src="https://i.ibb.co/N6PdV7z/carabinier-Black-red.jpg" alt="Your" />
                        </div>
                        <div class="w-64 h-80 overflow-hidden">
                            <img class="transform object-cover hover:scale-110 transition duration-300" src="https://i.ibb.co/gZvmtB3/3d-view-2.jpg" alt="Your" />
                        </div>
                    </div>

                </Slide>
                <Slide top duration={1000}>
                    <h2 className='text-white text-center text-2xl md:text-4xl font-black my-5 pb-4 pt-10'>{t("services.digitalBrandPage.digitalStart.showcase.title")}</h2>
                </Slide>
                <button className="text-left text-white relative group">
                    <span className="bg-teal-600 px-7 p-4 z-10 relative group-hover:bg-indigo-950 duration-300">Contact US</span>
                    <img src="https://svgshare.com/i/rry.svg" alt="" className="z-0 absolute -bottom-7 -right-3 group-hover:-bottom-2 group-hover:-right-0 duration-300" />
                </button>
            </div>

            {/*=========================== Briefing =======================*/}
            <Slide top duration={1000}>
                <div className='flex flex-col md:flex-row justify-between items-center mb-36 px-3 mt-32 w-full md:w-5/6 mx-auto'>
                    <div class="indicator">
                        <span class="indicator-item badge w-16 h-16  rounded-none bg-slate-600 ">
                            <h2 className=" text-white text-6xl font-bold">1</h2>
                        </span>
                        <div class="grid gap-1 w-72 h-72 border place-items-center">
                            <h2 className="text-white text-xl font-black text-left">{t("services.digitalBrandPage.digitalStart.showcase.cards.crd1.title")}</h2>
                            <p className="text-white text-sm -mt-20">{t("services.digitalBrandPage.digitalStart.showcase.cards.crd1.desc")}</p>
                        </div>
                    </div>

                    <div class="indicator">
                        <span class="indicator-item badge w-16 h-16 rounded-none bg-zinc-500 ">
                            <h2 className=" text-white text-6xl font-bold">2</h2>
                        </span>
                        <div class="grid gap-1 w-72 h-72 border place-items-center">
                            <h2 className="text-white text-xl font-black text-left">{t("services.digitalBrandPage.digitalStart.showcase.cards.crd2.title")}</h2>
                            <p className="text-white text-sm -mt-20">{t("services.digitalBrandPage.digitalStart.showcase.cards.crd2.desc")}</p>
                        </div>
                    </div>


                    <div class="indicator">
                        <span class="indicator-item badge w-16 h-16 rounded-none bg-base-500 ">
                            <h2 className=" text-white text-6xl font-bold">3</h2>
                        </span>
                        <div class="grid gap-1 w-72 h-72 border place-items-center">
                            <h2 className="text-white font-black text-xl text-left">{t("services.digitalBrandPage.digitalStart.showcase.cards.crd3.title")}</h2>
                            <p className="text-white text-sm -mt-20">{t("services.digitalBrandPage.digitalStart.showcase.cards.crd3.desc")}</p>
                        </div>
                    </div>

                </div>
            </Slide>

            {/*===========================   showcase your business=======================*/}
            {/* <div className='flex flex-col md:flex-row justify-between items-center mb-36 mt-36 w-full md:w-5/6 mx-auto'>
                <div><img src="https://i.ibb.co/4NrZzv1/ezgif-com-gif-maker-4-removebg-preview.png" alt="" /></div>
                <div><img src="https://i.ibb.co/WsKZKPb/ezgif-com-gif-maker-1.png" alt="" /></div>
                <div><img src="https://i.ibb.co/1qnrkFR/ezgif-com-gif-maker-removebg-preview-1.png" alt="" /></div>
                <div><img src="https://i.ibb.co/64bjn0M/ezgif-com-gif-maker-removebg-preview.png" alt="" /></div>
                <div><img src="https://i.ibb.co/ysQTR1Z/ezgif-com-gif-maker-1-removebg-preview.png" alt="" /></div>
                <div><img src="https://i.ibb.co/whs0bgS/ezgif-com-gif-maker-2-removebg-preview.png" alt="" /></div>
            </div> */}

            <TrustedPartnersAnim />

        </div>
    );
};

export default DigitalBrand;