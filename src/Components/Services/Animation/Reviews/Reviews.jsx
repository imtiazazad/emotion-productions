import React from "react";
// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Slide } from 'react-reveal';
import Fade from 'react-reveal/Fade';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Reviews.css";

// import required module
import { EffectCoverflow, Pagination } from "swiper";

const Reviews = () => {
  return (
    <div className="">
      <div className="px-12 lg:pb-16 py-10 pt-2  bg-[#252525] border-b border-neutral hero-overlay bg-opacity-50">

        <div className="md:w-5/6 mx-auto text-center pb-20">
          <Slide top>
            <h3 className="text-[70px] md:text-[150px] text-center flex mx-auto w-full justify-center uppercase font-bold text-black"><Slide top duration={1000}>R</Slide> <Slide top duration={1500}>E</Slide> <Slide top duration={2000}>V</Slide> <Slide top duration={2500}>I</Slide> <Slide top duration={3000}>E</Slide> <Slide top duration={4000}>W</Slide> <Slide top duration={4500}>S</Slide></h3>
          </Slide>
          <Fade bottom>
            <h4 className="text-2xl md:text-5xl text-center w-full font-bold text-white capitalize md:uppercase -mt-10 md:-mt-24 tracking-[7px] leading-10" style={{ fontFamily: "Rajdhani" }}>WE HAVE CUSTOMERS WORLDWIDE -
              READ WHAT THEY SAY</h4>
          </Fade>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            "@0.25": {
              slidesPerView: 2,
              spaceBetween: -100,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // "@1.25": {
            //   slidesPerView: 4,
            //   spaceBetween: 30,
            // },
            // "@1.75": {
            //   slidesPerView: 4,
            //   spaceBetween: 30,
            // },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="card mb-8 shadow-xl">
            <div className="space-y-2 text-start bg-[#252525] px-5 py-2 rounded">
              <h3 className="font-bold text-xl text-gray-300">The Process is Pragmatic and their team collaborates well to make sure requirements and understood.</h3>
              <p className="text-sm text-gray-100 pt-3">Our Results have been exceptional. We use in different ways to create marketting page and websites for our clients. we send them our own designs to develop which we found to work better.</p>
              <div className="flex justify-between gap-3 items-center w-full">
                <div className="flex flex-row gap-3 items-center w-3/5">
                  <div className="w-16 h-16">
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Photos.png" alt="" className="w-7 h-7" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-gray-100">Anna Ingrosso</h3>
                    <p className="text-indigo-500 text-xl">UI/UX Designer</p>
                  </div>
                </div>
                <div className="w-1/3 p-5">
                  <img src="https://www.pngmart.com/files/9/Text-Message-PNG-HD.png" alt="" className="w-32" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
          <div className="space-y-2 text-start bg-[#252525] px-5 py-2 rounded">
              <h3 className="font-bold text-xl text-gray-300">The Process is Pragmatic and their team collaborates well to make sure requirements and understood.</h3>
              <p className="text-sm text-gray-100 pt-3">Our Results have been exceptional. We use in different ways to create marketting page and websites for our clients. we send them our own designs to develop which we found to work better.</p>
              <div className="flex justify-between gap-3 items-center w-full">
                <div className="flex flex-row gap-3 items-center w-3/5">
                  <div className="w-16 h-16">
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" alt="" className="w-7 h-7" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-gray-100">John Doe</h3>
                    <p className="text-indigo-500 text-xl">Web Developer</p>
                  </div>
                </div>
                <div className="w-1/3 p-5">
                  <img src="https://www.pngmart.com/files/9/Text-Message-PNG-HD.png" alt="" className="w-32" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
          <div className="space-y-2 text-start bg-[#252525] px-5 py-2 rounded">
              <h3 className="font-bold text-xl text-gray-300">The Process is Pragmatic and their team collaborates well to make sure requirements and understood.</h3>
              <p className="text-sm text-gray-100 pt-3">Our Results have been exceptional. We use in different ways to create marketting page and websites for our clients. we send them our own designs to develop which we found to work better.</p>
              <div className="flex justify-between gap-3 items-center w-full">
                <div className="flex flex-row gap-3 items-center w-3/5">
                  <div className="w-16 h-16">
                    <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" alt="" className="w-7 h-7" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-gray-100">Richard Sid</h3>
                    <p className="text-indigo-500 text-xl">Web Designer</p>
                  </div>
                </div>
                <div className="w-1/3 p-5">
                  <img src="https://www.pngmart.com/files/9/Text-Message-PNG-HD.png" alt="" className="w-32" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card mb-8 shadow-xl">
          <div className="space-y-2 text-start bg-[#252525] px-5 py-2 rounded">
              <h3 className="font-bold text-xl text-gray-300">The Process is Pragmatic and their team collaborates well to make sure requirements and understood.</h3>
              <p className="text-sm text-gray-100 pt-3">Our Results have been exceptional. We use in different ways to create marketting page and websites for our clients. we send them our own designs to develop which we found to work better.</p>
              <div className="flex justify-between gap-3 items-center w-full">
                <div className="flex flex-row gap-3 items-center w-3/5">
                  <div className="w-16 h-16">
                    <img src="https://img.freepik.com/free-icon/avatar_318-201560.jpg" alt="" className="w-7 h-7" />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-bold text-gray-100">Lisa Ingrosso</h3>
                    <p className="text-indigo-500 text-xl">Graphics Designer</p>
                  </div>
                </div>
                <div className="w-1/3 p-5">
                  <img src="https://www.pngmart.com/files/9/Text-Message-PNG-HD.png" alt="" className="w-32" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}; SwiperCore.use([Autoplay]);

export default Reviews;
