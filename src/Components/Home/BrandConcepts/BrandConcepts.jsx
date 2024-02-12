import { t } from 'i18next';
import React from 'react';
import Bounce from 'react-reveal/Bounce';

const BrandConcepts = () => {
    return (
        <div className='container overflow-hidden p-3 w-full mx-auto'>
            <div className=" w-full md:w-5/6 mx-auto py-10">
                <div className="bg-[url('https://i.ibb.co/t8CFcyX/rNr-1.png')] relative rounded-3xl w-full flex items-center md:w-2/3 h-[80vh] md:h-[75vh] bg-cover p-7">
                    <Bounce right>
                        <div className="bg-[#211F20] text-white rounded-2xl p-5 m-5 md:w-2/3 text-start absolute -right-0 md:-right-52">
                            <h3 className="text-2xl">{t("homepage.brandConcepts.title")}</h3>
                            <div className="text-start pt-3 space-y-3 text-[#C9C9C9]">
                                <p className="text-sm">{t("homepage.brandConcepts.desc1")}</p>
                                <p className="text-sm">{t("homepage.brandConcepts.desc2")}</p>
                            </div>
                        </div>
                    </Bounce>
                </div>
            </div>
        </div>
    );
};

export default BrandConcepts;