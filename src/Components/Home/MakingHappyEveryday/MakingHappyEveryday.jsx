import React from 'react';

const MakingHappyEveryday = () => {

    return (
        <div className='bg-[#1E1E1E] my-10 w-full'>
            <div className="md:bg-[url('https://svgshare.com/i/rUV.svg')] relative rounded-3xl flex flex-col justify-center items-center w-full mx-auto h-[80vh] md:h-[90vh] bg-cover p-7">
                <h3 className="text-center text-white text-3xl font-semibold pb-7">Making Many Happy Everyday </h3>
                <div className="text-center relative w-full md:w-2/3 mx-auto">
                    <div className="pt-10 w-full md:w-3/5 mx-auto">
                        <img src="https://i.ibb.co/tJCcBwC/Icon-metro-quote.png" alt="" className="absolute left-0 top-0 w-12 md:w-20" />
                        <div
                            id="carouselExampleCaptions"
                            class="relative"
                            data-bs-interval="true"
                            data-te-carousel-init
                            data-te-carousel-slide>
                            <div
                                class="absolute right-0 bottom-0 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
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
                            <div
                                class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                                <div
                                    class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-active
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: 'hidden' }}>

                                    <div
                                        class="bottom-5 py-5 text-center space-y-3 text-white h-80">
                                        <p>
                                            Working with Timon Openen me a lot of ways, even when im from miami
                                            we had a great collaboration.
                                        </p>
                                        <p className="w-32 h-1 bg-[#3E3E3E] rounded border-2 mx-auto border-[#AAAAAA]"></p>
                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg"
                                            class="w-24 h-24 object-cover rounded-full mx-auto"
                                            alt="..." />
                                        <h5 class="text-xl">Zhadl</h5>
                                        <p className="">Zhadl Italy,</p>

                                    </div>
                                </div>
                                <div
                                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: 'hidden' }}>

                                    <div
                                        class="bottom-5 py-5 text-center space-y-3 text-white h-80">
                                        <p>
                                            Working with Timon Openen me a lot of ways, even when im from miami
                                            we had a great collaboration.
                                        </p>
                                        <p className="w-32 h-1 bg-[#3E3E3E] rounded border-2 mx-auto border-[#AAAAAA]"></p>

                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg"
                                            class="w-24 h-24 object-cover rounded-full mx-auto"
                                            alt="..." />
                                        <h5 class="text-xl">Zhadl</h5>
                                        <p className="">Zhadl Italy,</p>
                                    </div>
                                </div>
                                <div
                                    class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                    data-te-carousel-item
                                    style={{ backfaceVisibility: 'hidden' }}>

                                    <div class=" bottom-5 py-5 text-center space-y-3 text-white h-80">
                                        <p>
                                            Working with Timon Openen me a lot of ways, even when im from miami
                                            we had a great collaboration.
                                        </p>
                                        <p className="w-32 h-1 bg-[#3E3E3E] rounded border-2 mx-auto border-[#AAAAAA]"></p>

                                        <img
                                            src="https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg"
                                            class="w-24 h-24 object-cover rounded-full mx-auto"
                                            alt="..." />
                                        <h5 class="text-xl">Zhadl</h5>
                                        <p className="">Zhadl Italy,</p>
                                    </div>
                                </div>
                            </div>
                            {/* <button
                                class="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
                            <button
                                class="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
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
                            </button> */}
                        </div>
                        <img src="https://i.ibb.co/m8YpJfJ/Icon-metro-quote-1.png" alt="" className="absolute right-0 bottom-0 w-12 md:w-20" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakingHappyEveryday;