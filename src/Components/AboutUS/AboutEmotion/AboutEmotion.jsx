import { t } from 'i18next';
import React from 'react';
import { Bounce } from 'react-reveal';

const AboutEmotion = () => {
    const bg = "https://i.ibb.co/DkhRFn0/aboutbn.png";

    return (
        <div className='w-full p-2 py-10 md:w-4/5 flex flex-col md:flex-row justify-center overflow-hidden items-center mx-auto'>

            <div className='w-full md:w-3/5 order-2 md:order-1 mx-auto md:text-left'>
                <Bounce left>
                    <h2 className='text-white font-bold text-3xl pb-2'>{t("aboutUsPage.aboutEP.title")}</h2>
                    <div className="text-[#C9C9C9] space-y-2 text-start">
                        <p className='mt-2' >{t("aboutUsPage.aboutEP.desc1")}</p>
                        <p className='mt-1'>{t("aboutUsPage.aboutEP.desc2")}</p>
                        <p className='mt-1'>{t("aboutUsPage.aboutEP.desc3")}</p>
                        <p className='mt-1'>{t("aboutUsPage.aboutEP.desc4")}</p>
                        <p className='mt-1'>{t("aboutUsPage.aboutEP.desc5")}</p>

                    </div>
                </Bounce>
            </div>
            <Bounce right>
                <div className='w-full md:w-2/5 order-1 -p-2 md:order-2 mx-auto rounded'>
                    <img className='object-cover pt-2' src={bg} alt="" />
                </div>
            </Bounce>
        </div>
    );
};

export default AboutEmotion;