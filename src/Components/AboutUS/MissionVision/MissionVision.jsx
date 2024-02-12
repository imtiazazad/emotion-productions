import { t } from 'i18next';
import React from 'react';
import { Bounce } from 'react-reveal';

const MissionVision = () => {
    const mission = "https://i.ibb.co/SQ4RFDC/mission.png";
    const vision = "https://i.ibb.co/ydsZ0QL/vision.png";

    return (
        <div className='bg-[#252525] w-full'>
            <div className="container w-full mx-auto">
                {/* mission & vision */}
                <div className='w-full p-2 py-10 md:w-4/5 flex flex-col md:flex-row justify-center overflow-hidden items-center mx-auto'>
                    <Bounce top>
                        <div className='w-full md:w-2/5 order-2 -p-2 md:order-1 mx-auto rounded'>
                            <img className='object-cover pt-2' src={mission} alt="" />
                        </div>
                    </Bounce>

                    <div className='w-full md:w-3/5 order-1 md:order-2 mx-auto md:text-left px-3'>
                        <Bounce bottom>
                            <h2 className='text-white font-bold text-3xl pb-2'>{t("aboutUsPage.mission.title")}</h2>
                            <div className="text-[#C9C9C9] space-y-2 text-start">
                                <p className='mt-2' >{t("aboutUsPage.mission.desc")}</p>
                            </div>
                        </Bounce>
                    </div>

                </div>
                {/* career */}
                <div className='w-full p-2 py-10 md:w-4/5 flex flex-col md:flex-row justify-center overflow-hidden items-center mx-auto'>
                    <Bounce right>
                        <div className='w-full md:w-2/5 order-1 -p-2 md:order-2 mx-auto rounded'>
                            <img className='object-cover pt-2' src={vision} alt="" />
                        </div>
                    </Bounce>

                    <div className='w-full md:w-3/5 order-2 md:order-1 mx-auto md:text-left px-3'>
                        <Bounce left>
                            <h2 className='text-white font-bold text-3xl pb-2'>{t("aboutUsPage.vision.title")}</h2>
                            <div className="text-[#C9C9C9] space-y-2 text-start">
                                <p className='mt-2' >{t("aboutUsPage.vision.desc")}</p>
                            </div>
                        </Bounce>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MissionVision;