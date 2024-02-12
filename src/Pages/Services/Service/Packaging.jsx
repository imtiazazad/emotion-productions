import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaBox, FaBoxes, FaCheck, FaChevronDown, FaChevronUp, FaCut, FaEnvelope, FaPhone, FaTruck, } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Fade, Slide } from 'react-reveal';
import { t } from 'i18next';
// import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/solid";

const questions = [
    {
        id: 1,
        question: t("services.packagingPage.needMoreInfo.faqs.t1"),
        answer: t("services.packagingPage.needMoreInfo.faqs.d1"),
    },
    {
        id: 2,
        question: t("services.packagingPage.needMoreInfo.faqs.t2"),
        answer:t("services.packagingPage.needMoreInfo.faqs.d2"),
    },
];

const Packaging = () => {
    const [counter, setCounter] = useState(0);

    const settings1 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,
    };

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

    const [activeQuestion, setActiveQuestion] = useState(null);

    const handleQuestionClick = (id) => {
        if (activeQuestion === id) {
            setActiveQuestion(null);
        } else {
            setActiveQuestion(id);
        }
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



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='container mx-auto overflow-hidden'>
            <div className='w-full mx-auto'>
                {/*====================================== Food Packaging  =============================*/}
                <div className='flex flex-col md:flex-row justify-around items-center gap-3 w-full md:w-5/6 mx-auto py-10 '>
                    {/*====================================== Food Packaging Left side  =============================*/}
                    <div className="w-full md:w-4/6 mx-auto">
                        <Fade left duration={1000}>
                            <h2 className="text-left text-3xl md:text-5xl font-bold text-white">{t("services.packagingPage.aboutFoodPackaging.title")}</h2>
                        </Fade>
                        <Fade left duration={1500}>
                            <p className='text-gray-200 text-left py-5'>{t("services.packagingPage.aboutFoodPackaging.desc1")}</p>
                            <p className='text-gray-200 text-left py-5'>{t("services.packagingPage.aboutFoodPackaging.desc2")}</p>
                        </Fade>
                        <div className=" ">
                            <Slider {...settings}>
                                <div>
                                
                                    <img src="https://i.ibb.co/cy0R42J/bag-with-measurements.jpg" alt="slide 1" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/mqCqZLf/Verpakking-Brando-zijkant.jpg" alt="slide 2" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/1ZL483C/Vi-Balteum-Kaartje.png" alt="slide 3" />
                                </div>
                                <div>
                                    <img src="https://i.ibb.co/YhXFPR9/Vi-Balteum-Less-is-more-design-box.png" alt="slide 4" />
                                </div>

                            </Slider>
                        </div>
                        <div className='mt-9 flex flex-col md:flex-row gap-2 justify-around items-center'>
                            <div>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span className='text-red-500'> <FaCheck className='' /> </span>
                                    <span> <h3 className='text-white font-mono font-thin ml-3'>Design Packaging</h3></span>
                                </li>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span className='text-red-500'> <FaCheck className='' /> </span>
                                    <span> <h3 className='text-white font-mono font-thin ml-3'>High quality Materials </h3></span>
                                </li>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span className='text-red-500'> <FaCheck className='' /> </span>
                                    <span> <h3 className='text-white font-mono font-thin ml-3'>Food Grade </h3></span>
                                </li>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span className='text-red-500'> <FaCheck className='' /> </span>
                                    <span> <h3 className='text-white font-mono font-thin ml-3'>100% recyclable  </h3></span>
                                </li>
                            </div>

                            <div>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span> <FaCheck className='text-red-500' /> </span>
                                    <span> <h3 className='text-white font-thin font-mono ml-3'>Flexible & Cost-Effective</h3></span>
                                </li>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span> <FaCheck className='text-red-500' /> </span>
                                    <span> <h3 className='text-white font-thin font-mono ml-3'>VIP & Annual Pass Programs</h3></span>
                                </li>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span> <FaCheck className='text-red-500' /> </span>
                                    <span> <h3 className='text-white font-thin font-mono ml-3'>Over 250,000 cleans</h3></span>
                                </li>
                                <li className='flex justify-start text-start text-sm md:text-md items-center mb-5'>
                                    <span> <FaCheck className='text-red-500' /> </span>
                                    <span> <h3 className='text-white  font-mono font-thin ml-3'>Satisfaction Guarantee</h3></span>
                                </li>
                            </div>
                        </div>
                        <p className='text-gray-300 text-left mt-3  pr-9 divide-y-4 divide-sky-400'>{t("services.packagingPage.whyChoosePackaging.desc1")}</p>
                        <hr
                            class="my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                        <div className='grid grid-cols-1  sm:grid-cols-3 place-items-center gap-5'>
                            <Fade top duration={1000}>
                                <div className=''>
                                    <div className='pt-5 pb-3'>
                                        <img className='w-12 hover:-translate-y-3 duration-300' src="https://i.ibb.co/X8tKd9n/11.jpg" alt="" />
                                    </div>
                                    <div className=''>
                                        <h2 className='my-2 text-left text-gray-200 text-2xl font-black'>{t("services.packagingPage.whyChoosePackaging.card.crd1.title")}</h2>
                                        <p className='text-gray-400 text-left '>{t("services.packagingPage.whyChoosePackaging.card.crd1.desc")}</p>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom duration={2000}>
                                <div className=''>
                                    <div className='pt-5 pb-3'>
                                        <img className='w-12 hover:-translate-y-3 duration-300' src="https://i.ibb.co/sQPTxd2/ezgif-com-gif-maker-1.png" alt="" />
                                    </div>
                                    <div className=''>
                                        <h2 className='my-2 text-left text-gray-200 text-2xl font-black'>{t("services.packagingPage.whyChoosePackaging.card.crd2.title")}</h2>
                                        <p className='text-gray-400 text-left '>{t("services.packagingPage.whyChoosePackaging.card.crd2.desc")}</p>
                                    </div>
                                </div>
                            </Fade>
                            <Fade top duration={1000}>
                                <div className=''>
                                    <div className='pt-5 pb-3'>
                                        <img className='w-8 hover:-translate-y-3 duration-300' src="https://i.ibb.co/X8tKd9n/11.jpg" alt="" />
                                    </div>
                                    <div className=''>
                                        <h2 className='my-2 text-left text-gray-200 text-2xl font-black'>{t("services.packagingPage.whyChoosePackaging.card.crd3.title")}</h2>
                                        <p className='text-gray-400 text-left '>{t("services.packagingPage.whyChoosePackaging.card.crd3.desc")}</p>
                                    </div>
                                </div>
                            </Fade>

                        </div>

                    </div>
                    {/*====================================== Food Packaging Left side  =============================*/}
                    <div className="w-full md:w-2/6 md:-mt-44 ">
                        <Slide bottom duration={1000}>
                            <div className='w-80 mx-auto border-box-5 opacity-100   bg-stone-900 shadow-2xl shadow-stone-900/50 p-4 rounded border'>
                                <h2 className='text-white text-center text-2xl mb-5 font-bold'>This Service Included</h2>
                                <li className='flex justify-start items-center mb-3'>
                                    <span> <FaCut className='text-white font-black' /> </span>
                                    <span> <h3 className='text-white font-bold ml-3'>V-Cute</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-3'>
                                    <span> <FaBox className='text-white font-black' /> </span>
                                    <span> <h3 className='text-white font-bold ml-3'>Finish</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-3'>
                                    <span> <FaTruck className='text-white font-black' /> </span>
                                    <span> <h3 className='text-white font-bold ml-3'>Delivery</h3></span>
                                </li>
                                <li className='flex justify-start items-center mb-5'>
                                    <span> <FaBoxes className='text-white font-black' /> </span>
                                    <span> <h3 className='text-white font-bold ml-3'>500 pcs Packaging</h3></span>
                                </li>
                                <button type="button" class="text-white border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
                                    Book Now
                                    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </button>
                            </div>
                        </Slide>
                        <Slide bottom duration={2000}>
                            <div className='mt-5'>
                                <div className="w-80  h-80 mx-auto relative bg-cover bg-center  flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/X8tKd9n/11.jpg')" }}>
                                    <div className="absolute text-white text-center background">
                                        <h1 className="text-3xl font-bold mb-4">Need For Some Help ?</h1>
                                        <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor</p>

                                        <div className=''>
                                            <li className='flex justify-start items-center mb-6 pl-3'>
                                                <span>
                                                    <FaPhone className='text-4xl mr-5' />
                                                </span>
                                                <span >
                                                    <h2 className='text-left text-4xl' >Phone</h2>
                                                    <p>(+62) 8152 254 239</p>
                                                </span>
                                            </li>

                                            <li className='flex justify-start items-center pl-3'>
                                                <span>
                                                    <FaEnvelope className='text-4xl mr-5' />
                                                </span>
                                                <span >
                                                    <h2 className='text-left text-4xl' >Email</h2>
                                                    <p>support@domain.com</p>
                                                </span>
                                            </li>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </Slide>
                    </div>

                </div>
                {/*====================================== Why Us section  =============================*/}
                <div className='flex flex-col md:flex-row justify-around items-center py-10'>

                    <div className="w-full md:w-1/2 bg-[url('https://i.ibb.co/3W577y0/1.jpg')] h-screen mx-auto relative bg-cover bg-center flex justify-center items-center">
                        <Slide left duration={1000}>
                            <div className="absolute text-white text-center bottom-0 left-0 p-4 md:w-2/3 bg-[#172F3B]">
                                <h1 className="text-2xl md:text-3xl text-left font-bold p-3 ">We Production Best Packaging!</h1>
                                <p className='mb-4 font-thin text-left p-3'>{t("services.packagingPage.wePay")}</p>
                                <li className='list-none text-xl flex p-3 hover:text-red-600 hover:p-4 h-10 hover:translate-x-3 duration-300 items-center text-left '>View Project
                                    <FaArrowRight className='ml-3 mt-1 duration-300' />
                                </li>
                            </div>
                        </Slide>
                    </div>


                    <div className='w-full md:w-1/2 mx-auto bg-[#252525c3] px-5 md:px-20 py-1'>
                        <Slide top>
                            <h3 className="text-[50px] md:text-[120px] w-full mx-auto flex justify-center font-bold text-black"><Slide top duration={1000}>W</Slide> <Slide top duration={1500}>h</Slide> <Slide top duration={2000}>y</Slide> <span className="p-3"></span> <Slide top duration={2500}>U</Slide> <Slide top duration={3000}>s</Slide> </h3>
                        </Slide>
                        <Fade bottom>
                            <h4 className="text-2xl md:text-4xl font-bold text-white uppercase text-center -mt-7 md:-mt-20 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>Accelerating Innovations In Packaging</h4>
                        </Fade>
                        <Fade right duration={1000}>
                            <div className='mb-3 pt-10'>
                                <li className='list-none text-2xl flex p-3 text-white items-center text-left '>
                                    <img className='w-10 ' src="https://i.ibb.co/680ZbjT/Asset-1.png" alt="" />
                                    <h1 className='ml-4 font-black'>Best Quality Of Packaging</h1>
                                </li>
                                <p className='text-white text-left text-sm pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <hr class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </div>
                        </Fade>
                        <Fade right duration={2000}>
                            <div className='mb-3'>
                                <li className='list-none text-2xl flex p-3 text-white items-center text-left '>
                                    <img className='w-10 ' src="https://i.ibb.co/64dyypp/Asset-3.png" alt="" />
                                    <h1 className='ml-4 font-black'>Creative Packaging</h1>
                                </li>
                                <p className='text-white text-left text-sm pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <hr class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </div>
                        </Fade>
                        <Fade right duration={3000}>
                            <div className='mb-3'>
                                <li className='list-none text-2xl flex p-3 text-white items-center text-left '>
                                    <img className='w-10 ' src="https://i.ibb.co/r2f49yF/Asset-2.png" alt="" />
                                    <h1 className='ml-4 font-black'>Environmentally Friendly</h1>
                                </li>
                                <p className='text-white text-left text-sm pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                <hr class="my-1 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                            </div>
                        </Fade>
                    </div>


                </div>
                {/*====================================== Our Service section  =============================*/}
                <div className='w-full py-10'>
                    <div className='flex flex-col md:flex-row justify-around items-center md:p-10 gap-10 '>
                        <div className='w-full md:w-1/2 mx-auto'>
                            <Slide top>
                                <h3 className="text-[50px] md:text-[110px] flex justify-center w-full mx-auto font-bold text-black"><Slide top duration={1000}>O</Slide> <Slide top duration={1500}>u</Slide> <Slide top duration={2000}>r</Slide> <span className="p-3"></span> <Slide top duration={2500}>S</Slide> <Slide top duration={3000}>e</Slide> <Slide top duration={3500}>r</Slide> <Slide top duration={4000}>v</Slide> <Slide top duration={4500}>i</Slide> <Slide top duration={5000}>c</Slide> <Slide top duration={5500}>e</Slide> </h3>
                            </Slide>
                            <Fade bottom>
                                <h4 className="text-2xl flex md:text-4xl font-bold w-full text-white uppercase text-center -mt-5 md:-mt-12 pb-10 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>{t("services.packagingPage.weProvidePack.title")}</h4>
                            </Fade>
                            <div class='flex items-center justify-center mb-10'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt="" class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/0Q6ZC12/LUENGI-Box-design.jpg" />
                                </div>
                            </div>

                            <div class='flex items-center justify-center '>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt="" class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/47Jcyg5/Schermafbeelding-2021-06-01-om-17-15-31.png" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 mx-auto'>
                            <p className='text-white text-left mb-10'>{t("services.packagingPage.weProvidePack.desc")}</p>
                            <div class='flex items-center justify-center mb-10'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt="" class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/MDT3qWv/6.jpg" />
                                </div>
                            </div>

                            <div class='flex items-center justify-center mb-10'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt="" class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/r5RGtkG/3.jpg" />
                                </div>
                            </div>

                            <div class='flex items-center justify-center'>
                                <div class="  aspect-video bg-red-400 cursor-pointer rounded-xl relative group" >
                                    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white flex items-end">
                                        <div>
                                            <div class="p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4  transform transition duration-300 ease-in-out">
                                                <div class="font-bold text-4xl text-left">Jessie Watsica</div>
                                                <div class="opacity-60 text-sm text-left">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                                    elit. Distinctio dolores error iure, perferendis
                                                    sequi totam. Ad aliquam aperiam atque deleniti dolor
                                                    dolorem enim esse et in, inventore itaque, pariatur
                                                    reprehenderit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <img alt="" class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out" src="https://i.ibb.co/7VxrJZh/01.jpg" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-center w-full mx-auto py-7">
                        <li className='list-none text-xl flex p-3 hover:text-red-600 hover:p-4 h-10 text-white hover:translate-x-3 duration-300 items-center text-center '>Click Here
                            <FaArrowRight className='ml-3 mt-1 duration-300' />
                        </li>
                    </div>

                    <div className="">
                        <div className="text-white">
                            <Slide bottom>
                                <h2 className='sm:text-center text-2xl sm:text-5xl text-left'>{t("services.packagingPage.anotherPackOffer.title")}</h2>
                            </Slide>
                            <Fade>
                                <p className="inline-block align-middle p-4 text-justify md:text-center pt-7">{t("services.packagingPage.anotherPackOffer.desc")}</p>
                            </Fade>
                        </div>
                        <div className='flex flex-col md:flex-row gap-3 justify-around items-center py-7 w-full md:w-5/6 mx-auto'>
                            <div className=''>
                                <Slide top duration={1000}>
                                    <h3 className="text-[50px] md:text-[70px] flex justify-start w-full mx-auto font-bold text-black"><Slide top duration={1000}>0</Slide> <Slide top duration={1500}>1</Slide> <span className="p-3"></span> <Slide top duration={2000}>S</Slide> <Slide top duration={2500}>t</Slide> <Slide top duration={3000}>e</Slide> <Slide top duration={3500}>p</Slide> </h3>
                                </Slide>
                                <Fade bottom duration={1500}>
                                    <h2 className='text-left -mt-7 pb-3 md:-mt-12 text-white text-3xl font-semibold'>{t("services.packagingPage.anotherPackOffer.card.crd1.title")}</h2>
                                </Fade>
                                <Fade bottom duration={2000}>
                                    <p className='text-white text-left pr-7'>{t("services.packagingPage.anotherPackOffer.card.crd1.desc")}</p>
                                </Fade>
                            </div>
                            <div className=''>

                                <Slide top duration={1000}>
                                    <h3 className="text-[50px] md:text-[70px] flex justify-start w-full mx-auto font-bold text-black"><Slide top duration={1000}>0</Slide> <Slide top duration={1500}>2</Slide> <span className="p-3"></span> <Slide top duration={2000}>S</Slide> <Slide top duration={2500}>t</Slide> <Slide top duration={3000}>e</Slide> <Slide top duration={3500}>p</Slide> </h3>
                                </Slide>
                                <Fade bottom duration={1500}>
                                    <h2 className='text-left -mt-7 pb-3 md:-mt-12 text-white text-3xl font-semibold'>{t("services.packagingPage.anotherPackOffer.card.crd2.title")}
                                    </h2>
                                </Fade>
                                <Fade bottom duration={2000}>
                                    <p className='text-white text-left pr-7'>{t("services.packagingPage.anotherPackOffer.card.crd2.desc")}</p>
                                </Fade>
                            </div>
                            <div className=''>
                                <Slide top duration={1000}>
                                    <h3 className="text-[50px] md:text-[70px] flex justify-start w-full mx-auto font-bold text-black"><Slide top duration={1000}>0</Slide> <Slide top duration={1500}>3</Slide> <span className="p-3"></span> <Slide top duration={2000}>S</Slide> <Slide top duration={2500}>t</Slide> <Slide top duration={3000}>e</Slide> <Slide top duration={3500}>p</Slide> </h3>
                                </Slide>
                                <Fade bottom duration={1500}>
                                    <h2 className='text-left -mt-7 pb-3 md:-mt-12 text-white text-3xl font-semibold'>{t("services.packagingPage.anotherPackOffer.card.crd3.title")}
                                    </h2>
                                </Fade>
                                <Fade bottom duration={2000}>
                                    <p className='text-white text-left pr-7'>{t("services.packagingPage.anotherPackOffer.card.crd3.desc")}</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className='flex flex-col md:flex-row justify-around items-center  mt-24 mb-24 '>
                        <div className='w-full md:w-1/2 mx-auto'>
                            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                                <div className="max-w-3xl mx-auto">
                                    <Fade left duration={1000}>
                                        <h2 className="text-3xl text-left font-extrabold text-white mb-3 sm:text-4xl">
                                        {t("services.packagingPage.needMoreInfo.title")}
                                        </h2>
                                    </Fade>
                                    <Fade laft duration={2000}>
                                        <p className='text-white text-left'>{t("services.packagingPage.needMoreInfo.desc")}</p>
                                    </Fade>
                                    <div className="mt-12">
                                        <dl className="space-y-8">
                                            {questions?.map((q) => (
                                                <Slide bottom duration={1000}>
                                                    <div key={q.id}>
                                                        <dt className="text-lg leading-6 font-medium bg-black p-3 text-gray-900 duration-300">
                                                            <button
                                                                onClick={() => handleQuestionClick(q.id)}
                                                                className="flex justify-between w-full text-left focus:outline-none"
                                                            >
                                                                <span className='text-white '>{q.question}</span>
                                                                <span className="ml-6 flex-shrink-0">
                                                                    {activeQuestion === q.id ? (
                                                                        <FaChevronUp
                                                                            className="h-5 w-5 text-gray-400"
                                                                            aria-hidden="true"
                                                                        />
                                                                    ) : (
                                                                        <FaChevronDown
                                                                            className="h-5 w-5 text-gray-400"
                                                                            aria-hidden="true"
                                                                        />
                                                                    )}
                                                                </span>
                                                            </button>
                                                        </dt>
                                                        {activeQuestion === q.id && (
                                                            <dd className="mt-2 pr-12">
                                                                <p className="text-base text-white text-left">{q.answer}</p>
                                                            </dd>
                                                        )}
                                                    </div>
                                                </Slide>
                                            ))}
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-screen mx-auto relative bg-cover bg-center  flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/r5RGtkG/3.jpg')" }}>
                            <Slide right duration={1000}>
                                <div className="absolute text-white text-center bottom-0 right-0 p-4 md:w-2/3 bg-[#172F3B]">
                                    <h1 className="text-2xl md:text-3xl text-left font-bold p-3 ">We Production Best Packaging!</h1>
                                    <p className='mb-4 font-thin text-left p-3'>{t("services.packagingPage.wePay")}</p>
                                    <li className='list-none text-xl flex p-3 hover:text-red-600 hover:p-4 h-10 hover:translate-x-3 duration-300 items-center text-left '>View Project
                                        <FaArrowRight className='ml-3 mt-1 duration-300' />
                                    </li>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
                {/*====================================== Testimonials Our Client Said  =============================*/}
            </div>
            {/* <div className='flex flex-col md:flex-row justify-around items-center gap-16 py-10 '>
                <div className="w-full h-screen mx-auto relative bg-cover bg-center flex justify-center items-center  " style={{ backgroundImage: "url('https://i.ibb.co/tz7Fyxz/backgrounds12.jpg')" }}>
                    <div className='container mx-auto h-full '>
                        <Slide left duration={1000}>
                            <div className='w-full md:w-1/2 h-96  top-0 left-0 mt-48 md:ml-2  absolute '>
                                <Slider  {...settings1} >
                                    <div className=' bg-yellow-950 p-5 '>
                                        <p className='text-left text-white mb-4'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto</p>
                                        <img className='w-24' src="https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png" alt="" />
                                        <div className='flex justify-between items-center mt-5 p-3'>
                                            <div className='flex justify-around items-center'>
                                                <img className='w-16 rounded-full' src="https://i.ibb.co/nQH4Mz2/portrait-of-young-businesswoman-e1655091152346.jpg" alt="" />
                                                <span className='ml-2'>
                                                    <h2 className='text-left text-3xl text-white'>Jhon Doe</h2>
                                                    <p className='text-left text-white'>Client</p>
                                                </span>
                                            </div>
                                            <div>
                                                <img className='w-24' src="https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' bg-blue-950 p-5 '>
                                        <p className='text-left text-white mb-4'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, id magnam distinctio, totam vel suscipit numquam minima ab nisi, perspiciatis beatae mollitia. Pariatur quibusdam illo delectus repudiandae sapiente, ipsam minus.</p>
                                        <img className='w-24' src="https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png" alt="" />
                                        <div className='flex justify-between items-center mt-5 p-3'>
                                            <div className='flex justify-around items-center'>
                                                <img className='w-16 rounded-full' src="https://i.ibb.co/6m7BMSy/causal-young-two-businessman-looking-camera-and-front-of-information-room-e1655090842204.jpg" alt="" />
                                                <span className='ml-2'>
                                                    <h2 className='text-left text-3xl text-white'>Jessika Fins</h2>
                                                    <p className='text-left text-white'>Client</p>
                                                </span>
                                            </div>
                                            <div>
                                                <img className='w-24' src="https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className=' bg-green-950 p-5 '>
                                        <p className='text-left text-white mb-4'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto et iusto</p>
                                        <img className='w-24' src="https://i.ibb.co/5MmfbBw/486-4861498-5-star-reviews-pink-5-star-rating-hd-removebg-preview.png" alt="" />
                                        <div className='flex justify-between items-center mt-5 p-3'>
                                            <div className='flex justify-around items-center'>
                                                <img className='w-16 rounded-full' src="https://i.ibb.co/FwpKrW1/young-businessman-smiling-and-looking-at-camera-e1655090996491.jpg" alt="" />
                                                <span className='ml-2'>
                                                    <h2 className='text-left text-3xl text-white'>William Boer</h2>
                                                    <p className='text-left text-white'>Client</p>
                                                </span>
                                            </div>
                                            <div>
                                                <img className='w-24' src="https://i.ibb.co/0sJtjq3/blankstock180700130-removebg-preview.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </Slide>
                        <Slide right duration={2000}>
                            <div className='w-full md:w-1/2 hidden md:block mt-40 text-start h-full p-16 absolute top-0 right-0 space-y-3'>
                                <h2 className='text-5xl text-red-950 font-bold'>Our Client Said</h2>
                                <p className=' text-yellow-950'>Donec mattis odio dui, eget congue diam tempus a. Fusce viverra enim sit amet sagittis ultricies.Pellentesque et scelerisque nunc. Sed vel ipsum auctor, iaculis arcu quis, posuere dui. Duis condimentum nunc metus, maximus porta velit temporin. Intincidunt leo viverra, sodales ex eu, posuere purus. Duis in augue vestibulum</p>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div> */}
        </div >
    );
};

export default Packaging;