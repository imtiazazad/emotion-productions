import React from 'react';

const OrderSomething = () => {
    return (
        <div className="bg-[url('https://illustrator.qodeinteractive.com/wp-content/uploads/2017/01/pages-parallax-img-8a.jpg')] bg-fixed h-screen w-full bg-cover bg-center">

            <div className="flex flex-col justify-center items-center h-full">
                {/* <a class="video-link absolute" target="_blank" href="https://www.youtube.com/watch?v=ad9A4JvEgNc" rel="nofollow"><img width="120" height="120" src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png" class="attachment-full size-full" alt="" srcset="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png 120w, https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon-100x100.png 100w" sizes="(max-width: 120px) 100vw, 120px" data-no-retina="" /></a> */}
                <div className="text-white flex flex-col justify-start items-center p-10 h-full w-full">
                    <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
                        <div className="w-full">
                            <h3 className="text-3xl md:text-5xl font-bold">LIKE TO ORDER SOMETHING?</h3>
                        </div>
                        <div className="w-full">
                            <h3 className="text-xl md:text-3xl ">Order a poster from something thet you designed, or make a request to our artists</h3>
                        </div>
                        <div className="w-full pt-5">
                            <button className="text-gray-700 bg-white px-7 py-3 rounded-3xl">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderSomething;