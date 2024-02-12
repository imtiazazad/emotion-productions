import { t } from 'i18next';
import React from 'react';
import { Bounce } from 'react-reveal';

const Company = () => {
    return (
        <div className='w-full p-2 md:w-3/5 mx-auto text-white'>
            <Bounce left>
                <p className="">{t("homepage.company.desc1")}</p>
            </Bounce>
            <div className="p-3 w-full md:w-3/5 pt-10 mx-auto gap-10">
                <Bounce right>
                    <img src="https://svgshare.com/i/rLg.svg" alt="made-in-italy" className="object-cover" />
                </Bounce>
            </div>
        </div>
    );
};

export default Company;