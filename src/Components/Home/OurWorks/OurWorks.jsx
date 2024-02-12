import { t } from 'i18next';
import React from 'react';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

const OurWorks = () => {
    return (
        <div className='container p-3 md:p-1 w-full md:w-5/6 mx-auto py-10'>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:py-20">
                <div className="text-white md:text-start order-2 md:order-1">
                    <Zoom left>
                        <h3 className="text-3xl md:text-4xl">{t("homepage.digitalSuccess.title")}</h3>
                    </Zoom>
                    <div className="pt-5">
                        <Zoom bottom>
                            <p className="tracking-widest text-justify">{t("homepage.digitalSuccess.desc1")}</p> <br />
                            <p className="tracking-widest text-justify">{t("homepage.digitalSuccess.desc2")}</p> <br />
                        </Zoom>
                    </div>
                </div>
                <div className="text-xl order-1 md:order-2">
                    <Rotate>
                        <div className="">
                            <p className="text-white">Services</p>
                            <p className="text-[#959595]">Packaging</p>
                            <p className="text-[#959595]">Design</p>
                            <p className="text-[#959595]">Production</p>
                        </div>
                    </Rotate>
                </div>
            </div>
        </div >
    );
};

export default OurWorks;