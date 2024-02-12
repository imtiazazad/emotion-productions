import React from 'react';
import Slide from 'react-reveal/Slide';

const TopBannerPtt = () => {

    return (
        <div
            id="carouselExampleCaptions"
            class="relative h-[80vh]"
            data-bs-interval="true"
            data-te-carousel-init
            data-te-carousel-slide>
            {/* <!--Carousel indicators--> */}
            <div
                class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators>
                <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="0"
                    data-te-carousel-active
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-current="true"
                    aria-label="Slide 1"></button>
                <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="1"
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 2"></button>
                <button
                    type="button"
                    data-te-target="#carouselExampleCaptions"
                    data-te-slide-to="2"
                    class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                    aria-label="Slide 3"></button>
            </div>

            {/* <!--Carousel items--> */}
            <div
                class="relative w-full h-[80vh] overflow-hidden after:clear-both after:block after:content-['']">
                {/* <!--First item--> */}
                <div
                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-active
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="https://i.ibb.co/TBGYp09/bag-with-measurements.jpg"
                        class="block object-cover mix-blend-overlay duration-75 h-[80vh] w-full"
                        alt="..." />
                    <div class="absolute space-y-5 inset-x-[15%] mb-40 bottom-5 hidden py-5 text-center text-white md:block">
                        <Slide top duration={1500}>
                            <div className="">
                                <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl md:text-7xl font-bold">Amazing Discounts</h5>
                            </div>
                        </Slide>
                        <Slide bottom duration={1500}>
                            <p className='font-semibold capitalize text-xl tracking-wider'>Shop online and get an extra discount for every order today.</p>
                        </Slide>
                    </div>
                </div>
                {/* <!--Second item--> */}
                <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="https://i.ibb.co/zF6YNSN/BELLADI-TAG.jpg"
                        class="block object-cover mix-blend-overlay duration-75 h-[80vh] w-full"
                        alt="..." />
                    <div class="absolute space-y-5 inset-x-[15%] mb-40 bottom-5 hidden py-5 text-center text-white md:block">
                        <Slide top duration={1500}>
                            <div className="">
                                <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl md:text-7xl font-bold">Amazing Discounts</h5>
                            </div>
                        </Slide>
                        <Slide bottom duration={1500}>
                            <p className='font-semibold capitalize text-xl tracking-wider'>Shop online and get an extra discount for every order today.</p>
                        </Slide>
                    </div>
                </div>
                {/* <!--Third item--> */}
                <div
                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                    data-te-carousel-item
                    style={{ backfaceVisibility: "hidden" }}>
                    <img
                        src="https://i.ibb.co/ccp7N5v/Belladi-package-3-D.jpg"
                        class="block object-cover mix-blend-overlay duration-75 h-[80vh] w-full"
                        alt="..." />
                    <div class="absolute space-y-5 inset-x-[15%] mb-40 bottom-5 hidden py-5 text-center text-white md:block">
                        <Slide top duration={1500}>
                            <div className="">
                                <h5 style={{ fontFamily: "Rajdhani" }} class="text-4xl md:text-7xl font-bold">Amazing Discounts</h5>
                            </div>
                        </Slide>
                        <Slide bottom duration={1500}>
                            <p className='font-semibold capitalize text-xl tracking-wider'>Shop online and get an extra discount for every order today.</p>
                        </Slide>
                    </div>
                </div>
            </div>

            {/* <!--Carousel controls - prev item--> */}
            <button
                class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="prev">
                <span class="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span
                >
            </button>
            {/* <!--Carousel controls - next item--> */}
            <button
                class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carouselExampleCaptions"
                data-te-slide="next">
                <span class="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span
                >
            </button>
        </div>
    );
};

export default TopBannerPtt;