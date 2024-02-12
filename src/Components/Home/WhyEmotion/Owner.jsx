import { t } from 'i18next';
import React from 'react';
import { Bounce } from 'react-reveal';

const Owner = () => {
    const bg = "https://i.ibb.co/N9cR31F/Picture-prive-foto.png";
    return (
        <div className='w-full p-2 md:w-4/5 flex flex-col md:flex-row mx-auto'>

            <div className='w-full md:w-2/5 order-2 md:order-1 mx-auto md:text-left'>
                <Bounce left>
                    <h2 className='text-white text-2xl pb-2'>Timon Eijsink</h2>
                    <div className="text-[#C9C9C9] space-y-2 text-start">
                        <p className='mt-2' >{t("homepage.owner.desc1")}</p>
                        <p className='mt-1'>{t("homepage.owner.desc1")}</p>
                        <p className='mt-1'>{t("homepage.owner.desc1")}</p>
                    </div>
                </Bounce>
            </div>
            <Bounce right>
                <div className='w-2/3 md:w-2/5 order-1 -p-2 md:order-2 mx-auto bg-[#272727] rounded'>
                    <img className='object-cover pt-2' src={bg} alt="" />
                </div>
            </Bounce>
        </div>
    );
};

export default Owner;