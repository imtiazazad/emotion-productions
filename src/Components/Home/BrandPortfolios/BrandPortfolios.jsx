import React from 'react';

const BrandPortfolios = () => {
    return (
        <div className='container h-full w-full mx-auto pt-5 md:pt-10 py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">Brand Portfolios</h3>
            {/* <div className="md:bg-[url('https://i.ibb.co/myqPCyR/Path-14173.jpg')] relative flex items-center w-full h-screen md:h-[80vh] bg-cover p-7"> */}
            <div className="relative flex items-center w-full h-screen md:h-[80vh] bg-cover p-7">
                <div className="bg-transparent text-white flex gap-3 rounded-2xl p-5 m-5 text-start absolute -left-0">
                    <div className="w-full md:w-3/6 mx-auto flex flex-col md:flex-row gap-3 overflow-hidden">
                        <div class="group relative h-[35vh] md:h-[70vh] w-full md:w-2/5 overflow-hidden rounded-3xl">
                            <img class="rounded-3xl h-[35vh] md:h-[70vh] object-cover group-hover:scale-110 duration-200"
                                src="https://i.ibb.co/6tm3mb4/home-banner.png" alt="" />
                            <div
                                class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#60cd9896] rounded-3xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                <a class="mt-5 px-8 py-3 rounded-full duration-300" href="!#"><img className='w-16 hover:w-14 duration-300' src="https://svgshare.com/i/rRC.svg" alt="link" /></a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 h-[70vh] md:w-3/5">
                            <div class="group relative h-[35vh] w-full overflow-hidden rounded-3xl">
                                <img class="rounded-3xl h-[35vh] w-full object-cover group-hover:scale-110 duration-200"
                                    src="https://i.ibb.co/bQLjHND/2-1-1.jpg" alt="" />
                                <div
                                    class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#60cd9896] rounded-3xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                    <a class="mt-5 px-8 py-3 rounded-full duration-300" href="!#"><img className='w-16 hover:w-14 duration-300' src="https://svgshare.com/i/rRC.svg" alt="link" /></a>
                                </div>
                            </div>
                            <div class="group relative h-[35vh] w-full overflow-hidden rounded-3xl">
                                <img class="rounded-3xl h-[35vh] w-full object-cover group-hover:scale-110 duration-200"
                                    src="https://i.ibb.co/tPLwZdS/3-1.png" alt="" />
                                <div
                                    class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#60cd9896] rounded-3xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                    <a class="mt-5 px-8 py-3 rounded-full duration-300" href="!#"><img className='w-16 hover:w-14 duration-300' src="https://svgshare.com/i/rRC.svg" alt="link" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/6 mx-auto flex flex-col md:flex-row gap-3 overflow-hidden">
                        <div class="group relative h-[35vh] md:h-[70vh] w-full md:w-2/5 overflow-hidden rounded-3xl">
                            <img class="rounded-3xl h-[35vh] md:h-[70vh] w-full object-cover group-hover:scale-110 duration-200"
                                src="https://i.ibb.co/R38cgFc/4-2-1.jpg" alt="" />
                            <div
                                class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#60cd9896] rounded-3xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                <a class="mt-5 px-8 py-3 rounded-full duration-300" href="!#"><img className='w-16 hover:w-14 duration-300' src="https://svgshare.com/i/rRC.svg" alt="link" /></a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 h-[70vh] md:w-3/5">
                            <div class="group relative h-[35vh] w-full overflow-hidden rounded-3xl">
                                <img class="rounded-3xl h-[35vh] w-full object-cover group-hover:scale-110 duration-200"
                                    src="https://i.ibb.co/GHJZQfV/5-1-1.jpg" alt="" />
                                <div
                                    class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#60cd9896] rounded-3xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                    <a class="mt-5 px-8 py-3 rounded-full duration-300" href="!#"><img className='w-16 hover:w-14 duration-300' src="https://svgshare.com/i/rRC.svg" alt="link" /></a>
                                </div>
                            </div>
                            <div class="group relative h-[35vh] w-full overflow-hidden rounded-3xl">
                                <img class="rounded-3xl h-[35vh] w-full object-cover group-hover:scale-110 duration-200"
                                    src="https://i.ibb.co/THmGyyN/6-1-1.jpg" alt="" />
                                <div
                                    class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#60cd9896] rounded-3xl opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                                    <a class="mt-5 px-8 py-3 rounded-full duration-300" href="!#"><img className='w-16 hover:w-14 duration-300' src="https://svgshare.com/i/rRC.svg" alt="link" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandPortfolios;