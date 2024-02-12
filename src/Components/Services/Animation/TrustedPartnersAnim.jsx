import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PartnersData } from '../../../Data/PartnersData';
import Fade from 'react-reveal/Fade';
import { t } from 'i18next';

const TrustedPartnersAnim = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 7000,
        autoplaySpeed: 0,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full h-full md:w-5/6 mx-auto'>
            <Fade bottom duration={2000}>
                <h3 className="text-white text-2xl font-semibold text-center pb-10">{t("services.animationPage.joinCo")}</h3>
            </Fade>
            <Fade bottom duration={2000}>
                <div className="">
                    <Slider className='' {...settings}>
                        {
                            PartnersData?.map((item) => {
                                return (
                                    <div key={item.alt} className="py-10 d-flex justify-content-center align-items-center gap-5">
                                        <div style={{ position: 'relative', width: '150px', height: '150px', }} className="d-flex justify-content-center mx-auto">
                                            <img
                                                style={{ objectFit: 'cover' }}
                                                className='d-flex grayscale hover:grayscale-0 justify-content-center align-items-center py-5 px-7'
                                                src={item?.imageURL}
                                                title={item?.alt}
                                                alt={item?.alt}
                                                fill={true}
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </Slider>
                </div>
            </Fade>
        </div>
    );
};

export default TrustedPartnersAnim;