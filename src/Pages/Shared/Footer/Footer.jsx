import React from 'react';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <div className='container w-full mx-auto pt-10 pb-7'>
            <div className=" flex flex-col md:flex-row gap-5 w-full md:w-5/6 mx-auto overflow-hidden">
                <div className='space-y-3 w-full md:w-1/4 mx-auto'>
                    <Rotate top left>
                        <img className='px-5 md:px-0' src="https://i.ibb.co/tstmn7Z/Logo-PNG.png" alt="" />
                    </Rotate>
                    <Zoom>
                        <p className="text-white ml-4 md:text-left">Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem
                            Ipsum has been the industry.</p>
                    </Zoom>
                </div>
                <div className='flex items-center text-white text-left justify-around w-full md:w-2/4 mx-auto'>
                    <div>
                        <ul>
                            <Bounce>
                                <li className='text-xl font-bold pb-5'><a href="">Company</a></li>
                            </Bounce>
                        </ul>
                        <ul>
                            <Slide left>
                                <li><a href="">About Us</a></li>
                            </Slide>
                        </ul>
                        <ul>
                            <Slide right>
                                <li><a href="">Contract Us</a></li>
                            </Slide>
                        </ul>
                        <ul>
                            <Slide left>
                                <li><a href="">Project</a></li>
                            </Slide>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Bounce>
                                <li className='text-xl font-bold pb-5'><a href="">Quick Link</a></li>
                            </Bounce>
                        </ul>
                        <ul>
                            <Slide right>
                                <li><a href="">Contract Us</a></li>
                            </Slide>
                        </ul>
                        <ul>
                            <Slide left>
                                <li><a href="">Terms of Service</a></li>
                            </Slide>
                        </ul>
                        <ul>
                            <Slide right>
                                <li><a href="">Privacy Policy</a></li>
                            </Slide>
                        </ul>
                    </div>
                </div>
                <div className=' w-full md:w-1/4 mx-auto space-y-3'>
                    <Bounce>
                        <h1 className="text-xl font-bold pb-5 md:text-left text-white">Follow Hypnobond</h1>
                    </Bounce>
                    <div className='flex items-center justify-center md:justify-left'>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <Jump>
                                <img src="https://i.ibb.co/nPkKWVw/f-1.png" alt="" />
                            </Jump>
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <Jump>
                                <img src="https://i.ibb.co/yFyjvfr/instagram.png" alt="" />
                            </Jump>
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <Jump>
                                <img src="https://i.ibb.co/bBYDSBK/linkedin.png" alt="" />
                            </Jump>
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <Jump>
                                <img src="https://i.ibb.co/J72ZqSm/Icon-awesome-youtube.png" alt="" />
                            </Jump>
                        </span>
                        <span className="w-8 h-7 bg-white rounded flex justify-center items-center mr-3">
                            <Jump>
                                <img src="https://i.ibb.co/fDqBgNZ/tik-tok.png" alt="" />
                            </Jump>
                        </span>
                    </div>
                    <Fade left>
                    <h1 className="text-white text-center md:text-left">Showroom</h1>
                    </Fade>
                    <Fade right>
                    <h1 className="text-white text-center md:text-left">  Richterlaan 10, 9207JT, DrachtenThe Netherlands</h1>
                    </Fade>
                    <Fade left>
                    <h1 className="text-white text-center md:text-left">Bezoek op Afspraak</h1>
                    </Fade>
                </div>
            </div>
            <div className="w-full mx-auto pt-5">
                <img className='w-4/5 mx-auto py-3' src="https://i.ibb.co/L8m7FdK/Rectangle-1515.png" alt="" />
                <Slide bottom>
                <p className="text-white">©Emotion Productions. All rights reserved</p>
                </Slide>
            </div>

         </div >
    );
};

export default Footer;