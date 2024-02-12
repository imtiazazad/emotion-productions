import React from 'react';
import { ServicesData } from '../../../Data/ServicesData';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import { t } from 'i18next';

const OurServices = () => {
    return (
        <div className='container h-full w-full mx-auto pt-5 md:pt-10 py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">{t("homepage.ourServices.title")}</h3>
            <p className="w-full md:w-2/3 text-white mx-auto">{t("homepage.ourServices.desc")}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-10 w-full md:w-5/6 mx-auto">
                {
                    ServicesData?.map(data => (
                        <div key={data?.id} className="bg-[#1E1E1E] rounded flex justify-between items-center px-7 py-10">
                            <Spin>
                                <img src={data?.icon} alt="" className="object-cover w-10" />
                            </Spin>
                            <Fade right>
                                <p className="text-white text-md">{data?.title}</p>
                            </Fade>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default OurServices;