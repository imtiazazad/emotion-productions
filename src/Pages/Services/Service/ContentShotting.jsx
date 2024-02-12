import React from 'react';
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ReactPlayer from 'react-player';
import { t } from 'i18next';

const ContentShotting = () => {
    const settings1 = {
        dots: true,
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

    return (
        <div className='container overflow-hidden mx-auto'>
            {/*=====================  carousel start =================*/}
            <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                <div className="w-full md:w-1/2 p-0 md:pl-20 text-left space-y-5">
                    <Slide left duration={1000}>
                        <p className=' text-left text-gray-500 mb-2'>autofocus tracking varies depending on shooting</p>
                    </Slide>
                    <Slide left duration={1500}>
                        <h2 className="text-left font-thin text-3xl md:text-6xl text-white pb-10">{t("services.contentShootingPage.topBanner.title")}</h2>
                    </Slide>
                    <Slide bottom duration={2000}>
                        <button className="text-left text-white relative group">
                            <span className="bg-teal-600 px-7 p-4 z-10 relative group-hover:bg-indigo-950 duration-300">READ MORE</span>
                            <img src="https://svgshare.com/i/rry.svg" alt="" className="z-0 absolute -bottom-7 -right-3 group-hover:-bottom-2 group-hover:-right-0 duration-300" />
                        </button>
                    </Slide>
                </div>

                <div className="w-full md:w-1/2 mx-auto pt-7 md:pt-0 p-0">
                    <img draggable="false" style={{ animation: `bounce-in 5s linear` }} src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png" alt="" className="p-5 animate-bounce" />
                </div>
            </div>

            {/*=====================  creative start =================*/}
            <div className='w-full md:w-5/6 mx-auto py-10'>
                <Fade bottom duration={1000}>
                    <h2 className='text-3xl md:text-6xl md:w-2/3 w-full mx-auto text-center font-black py-7 text-white duration-300'>{t("services.contentShootingPage.creativeMasters.title")}</h2>
                </Fade>
                <div className='flex flex-col md:flex-row justify-center items-start gap-10 my-7'>
                    <Fade left duration={1000}>
                        <p className='inline-block align-middle text-justify   text-white'>{t("services.contentShootingPage.creativeMasters.desc1")}</p>
                    </Fade>
                </div>
                <Fade bottom duration={1000}>
                    <p className='text-white font-mono leading-7 tracking-widest py-7'>{t("services.contentShootingPage.creativeMasters.desc2")}</p>
                </Fade>
            </div>

            {/*=====================  Recent work start =================*/}
            <div className='space-y-3'>
                <Fade bottom duration={1000}>
                    <h2 className='text-4xl md:text-6xl text-center font-black pb-5 text-white'>RECENT WORK</h2>
                </Fade>
                <Fade bottom duration={1000}>
                    <p className='text-white text-center pb-7 font-mono tracking-widest'>{t("services.contentShootingPage.dsForAll.title")}</p>
                    <p className='w-full md:w-4/5 mx-auto pb-7 text-white text-center pt-7 font-sans'>{t("services.contentShootingPage.dsForAll.desc1")}</p>

                </Fade>
                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-7 pb-5'>
                    <div className='w-full md:w-1/2 md:px-20 '>
                        <p className='text-red-600 text-left font-mono'>COMMERCIAL</p>
                        <h2 className='text-2xl md:text-4xl pb-4 text-left font-black text-white'>BUSHWICK SELFIESPORK BELLY LYFT BROOKLYN MESSENG</h2>
                        <p className='text-gray-300 text-left my-4 pr-10'>Narwhal pop-up intelligentsia tbh pinterest, microdosing tilde cloud bread gochujang tattooed leggings cornhole 8-bit. Austin fam chia cold-pressed raw denim. Glossier drinking vinegar portland lo-fi, polaroid bespoke lomo. Banjo art party XOXO, fashion axe sustainable retro ethical gentrify.</p>
                        <div className="">
                            <button className='flex justify-start group items-center bg-white px-7 py-2 text-gray-600 tracking-wider font-semibold text-xl'>
                                <a href="#!">Read More </a><FaArrowRight className='mt-1 group-hover:translate-x-3 duration-300 ml-2' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 overflow-hidden'>
                        <img class="transform hover:scale-110 transition object-cover duration-300" src="https://i.ibb.co/cXg7Dqc/belladi-packaging.jpg" alt="Your" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-13 pb-5'>
                    <div className='w-full md:w-1/2 overflow-hidden'>
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/TBGYp09/bag-with-measurements.jpg" alt="Your" />
                    </div>
                    <div className='w-full md:w-1/2 md:px-20 '>
                        <p className='text-red-600 text-left font-mono'>Graphsic Design</p>
                        <h2 className='text-2xl md:text-4xl pb-4 text-left font-black text-white'>TUMERIC TUMBLR GLUTEN-FREE MAN BUN SMALL</h2>
                        <p className='text-gray-300 text-left my-4 pr-10'>Slow-carb green juice subway tile bicycle rights, fanny pack raclette palo santo put a bird on it mustache actually fam mumblecore iPhone. Iceland post-ironic health goth snackwave, mixtape synth four dollar toast sartorial. Health goth la croix vexillologist, before they sold out shabby chic.</p>
                        <div className="">
                            <button className='flex justify-start group items-center bg-white px-7 py-2 text-gray-600 tracking-wider font-semibold text-xl'>
                                <a href="">Read More </a><FaArrowRight className='mt-1 group-hover:translate-x-3 duration-300 ml-2' />
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-13 pb-5'>
                    <div className='w-full md:w-1/2 md:px-20 '>
                        <p className='text-red-600 text-left font-mono'>BRANDING</p>
                        <h2 className='text-2xl md:text-4xl pb-4 text-left font-black text-white'> BRANDING BATCH KOMBUCHA SUBWAY TILE SALVIA BROOKLYN</h2>
                        <p className='text-gray-300 text-left my-4 pr-10'>Mlkshk YOLO wolf, leggings vinyl crucifix stumptown tousled. Pabst venmo gentrify deep v microdosing migas occupy master cleanse intelligentsia sartorial chia activated charcoal. Iceland small batch live-edge raclette roof party dreamcatcher austin pickled. Chillwave cronut messenger bag truffaut.</p>
                        <div className="">
                            <button className='flex justify-start group items-center bg-white px-7 py-2 text-gray-600 tracking-wider font-semibold text-xl'>
                                <a href="">Read More </a><FaArrowRight className='mt-1 group-hover:translate-x-3 duration-300 ml-2' />
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 overflow-hidden'>
                        <img class="transform hover:scale-110 transition duration-300" src="https://i.ibb.co/t4hX8tS/verpakking-Balteum.jpg" alt="Your" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-around items-center gap-20 my-13 pb-5'>
                    <div className='w-full md:w-1/2 overflow-hidden'>
                        <img class="transform  hover:scale-110 transition duration-300" src="https://i.ibb.co/Rjf09Bm/12.jpg" alt="Your" />
                    </div>
                    <div className='w-full md:w-1/2 md:px-20 '>
                        <p className='text-red-600 text-left font-mono'>WEB DESIGN</p>
                        <h2 className='text-2xl md:text-4xl pb-4 text-left font-black text-white'> ORGANIC ACTIVATED CHARCOAL VAPE VIRAL ENNUI</h2>
                        <p className='text-gray-300 text-left my-4 pr-10'>Tote bag cornhole pork belly swag, cronut hoodie snackwave 90's messenger bag pour-over disrupt chartreuse. Vape ugh cardigan hell of. Vaporware umami master cleanse neutra, chartreuse flexitarian lo-fi selvage hella hoodie freegan gentrify. 8-bit air plant umami asymmetrical franzen semiotics before.</p>
                        <div className="">
                            <button className='flex justify-start group items-center bg-white px-7 py-2 text-gray-600 tracking-wider font-semibold text-xl'>
                                <a href="">Read More </a><FaArrowRight className='mt-1 group-hover:translate-x-3 duration-300 ml-2' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/*=====================  Fine Folks start =================*/}
            <div className='w-full md:w-5/6 mx-auto py-10'>
                <h2 className='text-3xl md:text-5xl w-full md:w-3/5 mx-auto py-7 text-center font-black text-white mb-5'> FINE FOLKS WE'VE WORKED WITH</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mx-auto justify-around items-center'>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/h2T23jS/aed14647-8ecf-4fef-8274-737d79a7ede1.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/6v6q0bk/1c4bfb0e-0b9f-4c19-ba5c-113fb0714514.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/ft6nmp8/4b983c9a-759d-4921-ba60-dbbcaa702ee5.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/qxKGLN6/6e63c653-6997-42c6-b788-28e9fb6d15b7.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/VYYMqwF/7f7b6ede-3a3e-4e17-af25-f881c0121d63.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/MMpqjcr/9a6c570f-d03a-4806-9a30-dddc648707d9.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/Fz6drLb/9c30d6d6-6af9-4fb1-bed3-e5ea4df4c281.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/0MrTg00/69cb9e61-d0b8-4420-b8bd-454c9b9e1dc1.png" alt="" /> </div>
                    <div><img className='w-36 flex mx-auto grayscale hover:grayscale-0' src="https://i.ibb.co/vcp3TFF/858e2e28-faae-441c-bd9c-5c490c72b562.png" alt="" /> </div>
                </div>
            </div>


            {/*=====================  Say Our Client =================*/}
            <div className='w-full md:w-5/6 mx-auto'>
                <Slider {...settings1}>
                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div className=''>
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/ys1FrjC/pexels-photo-809433.jpg" alt="" />
                            </div>
                            <div className='w-full md:w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Chambray enamel pin synth shabby chic palo santo. Franzen 90's man bun wayfarers, put a bird on it twee four loko roof party shabby chic kale chips photo booth salvia mixtape lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui celiac roof party.</p>
                            </div>
                            <span className='text-white text-center md:text-xl flex justify-center '> FRED KINNEY<p className='text-red-700 ml-3'>DESIGNER</p> </span>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div >
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/xjHD78g/pexels-photo-764529.jpg" alt="" />
                            </div>
                            <div className='w-full md:w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Chambray enamel pin synth shabby chic palo santo. Franzen 90's man bun wayfarers, put a bird on it twee four loko roof party shabby chic kale chips photo booth salvia mixtape lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui celiac roof party.</p>
                            </div>
                            <span className='text-white text-center md:text-xl flex justify-center '> BALANCHAEV BALANCH,<p className='text-red-700 ml-3'>INVESTOR</p> </span>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div>
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/bXs2P7N/pexels-photo-894156.jpg" alt="" />
                            </div>
                            <div className='w-full md:w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Chambray enamel pin synth shabby chic palo santo. Franzen 90's man bun wayfarers, put a bird on it twee four loko roof party shabby chic kale chips photo booth salvia mixtape lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui celiac roof party.</p>
                            </div>
                            <span className='text-white text-center md:text-xl flex justify-center '> STEVE KONG,<p className='text-red-700 ml-3'>WEB DEVELOPER</p> </span>
                        </div>
                    </div>

                    <div className='relative'>
                        <div className='flex justify-center bg-stone-900 rotate-45 absolute mt-[108px] ml-[10] left-1/2 -translate-x-2/4 w-12 h-6'></div>
                        <div >
                            <div className='flex justify-center'>
                                <img className='w-24 rounded-full' src="https://i.ibb.co/tDVbWDC/pexels-photo-428340.jpg" alt="" />
                            </div>
                            <div className='w-full md:w-3/4 my-5 mx-auto'>
                                <p className='inline-block align-middle text-justify bg-stone-900 p-5 text-white'> Chambray enamel pin synth shabby chic palo santo. Franzen 90's man bun wayfarers, put a bird on it twee four loko roof party shabby chic kale chips photo booth salvia mixtape lumbersexual. Pug kickstarter hammock unicorn, cardigan ennui celiac roof party.</p>
                            </div>
                            <span className='text-white text-center md:text-xl flex justify-center '> BALANCHAEV BALANCH,<p className='text-red-700 ml-3'>INVESTOR</p> </span>
                        </div>
                    </div>
                </Slider>
            </div>

            {/*=====================  Video =================*/}
            <div className='my-24'>
                <div className="bg-[url('https://i.ibb.co/4YNfWBH/JOR08662.jpg')] hover:bg-blend-darken bg-blend-exclusion backdrop-saturate-125 bg-white/30 h-screen w-full bg-cover bg-center hover:duration-300">
                    <div className="flex flex-col justify-center items-center h-full">
                        <Fade bottom>
                            <div className="hero-content w-full h-full text-center text-neutral-content">
                                {/* <label htmlFor="my-modal-5" className="w-full modal-button">
                            <h1 className="bg-white w-full h-full hover:bg-white btn hover:bg-opacity-60 bg-opacity-40 btn-circle text-white text-3xl">
                                <img width="120" height="120" src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png" class="attachment-full size-full" alt="" srcset="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png 120w, https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon-100x100.png 100w" sizes="(max-width: 120px) 100vw, 120px" data-no-retina="" />
                            </h1>
                        </label> */}
                                <ReactPlayer
                                    width={"100%"}
                                    height={"100%"}
                                    controls
                                    light="https://i.ibb.co/4YNfWBH/JOR08662.jpg"
                                    url={`https://www.youtube.com/embed/XFNSqxa-9gY`}
                                    playing
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                showinfo: 0,
                                                fs: 0,
                                            },
                                            modestbranding: 1,
                                            preload: true,
                                            rel: 0
                                        },
                                    }}
                                />
                            </div>
                        </Fade>
                        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box w-11/12 max-w-5xl rounded-lg bg-base-300 p-4">
                                <iframe
                                    className="mx-auto w-full lg:h-96 h-48 md:h-96 rounded-lg"
                                    src="https://www.youtube.com/embed/XFNSqxa-9gY"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <div className="modal-action mt-3">
                                    <label htmlFor="my-modal-5" className="btn btn-primary btn-sm text-white">
                                        Close
                                    </label>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*=====================  Blogs =================*/}
            {/* 
            <div className=" blog ">
                <h4 className='sm:text-center text-white text-2xl sm:text-4xl text-left' >FROM THE BLOG</h4>
                <p className="text-center p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s.</p>
                <div className='grid grid-cols-1 mt-16 sm:grid-cols-3 place-items-center gap-4'>
                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/3dtzRwC/SL-100321-45940-56.jpg" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/Fgn9XY0/20314239-SL-062121-43900-81.jpg" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>

                    <div className='bg-warning rounded-lg'>
                        <img className='' src="https://i.ibb.co/TtNThMm/20023212-SL-091320-34930-27.jpg" alt="" />
                        <div className=' p-2 -mt-8'>
                            <p className='text-white mt-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <div className='flex justify-between items-center'>
                                <h2 className='text-white'>Timon Eijsink</h2>
                                <button className='text-white bg-info rounded-xl p-3'>Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className='flex justify-end items-center mt-5 '>
                    <a className='text-white font-black text-xl' href="">View All </a>
                    <FaArrowRight className='text-white font-black text-xl ml-3' />
                </span>
            </div> */}

        </div>
    );
};

export default ContentShotting;



