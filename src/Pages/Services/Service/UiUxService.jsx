import { t } from 'i18next';
import React from 'react';
const UiUxService = () => {

    const image = "https://i.ibb.co/7Q7PHrd/5726865.png";
    const logo = "https://i.ibb.co/W0MzfHS/Ellipse-12.png";

    return (
        <div className="container px-7 mx-auto w-full text-white">
            <div className='flex flex-col md:flex-row justify-between items-center mt-14 pb-10'>
                <div className='w-full md:w-3/6 p-0 sm:p-5'>
                    <h2 className='text-center text-2xl sm:text-5xl sm:text-left'>{t("services.uiUxDesignPage.topBanner.title")}</h2>
                    <p className='text-center sm:text-left pt-3'>{t("services.uiUxDesignPage.topBanner.desc1")}</p>
                    <p className='text-center sm:text-left pt-3'>{t("services.uiUxDesignPage.topBanner.desc2")}</p>
                    <p className='text-center sm:text-left pt-3'>{t("services.uiUxDesignPage.topBanner.desc3")}</p>
                </div>
                <div className='w-full md:w-3/6 mx-auto p-4'>
                    <img className=' w-full' src={image} alt="" />
                </div>
            </div>

            <div className='w-full md:w-3/5 flex flex-col gap-3 space-y-4 justify-start items-center text-left py-12'>
                <h2 className='text-left w-full text-3xl md:text-6xl'>{t("services.uiUxDesignPage.whatWeDo.title")}</h2>
                <p className='text-left'>{t("services.uiUxDesignPage.whatWeDo.desc1")}</p>
                <p className='text-left'>{t("services.uiUxDesignPage.whatWeDo.desc2")}</p>
            </div>
            <div className="pt-10 space-y-4">
                <h1 className='text-left w-full text-2xl md:text-4xl md:text-left'>{t("services.uiUxDesignPage.interactiveExp.title")}</h1>
                <p className='text-left'>{t("services.uiUxDesignPage.interactiveExp.desc")}</p>
            </div>

            <div className='flex flex-col md:flex-row gap-3 justify-center items-center mt-14 '>
                <div className=' w-full md:w-3/6 mx-auto p-2 space-y-3'>
                    <h2 className='text-center text-3xl sm:text-6xl sm:text-left'>{t("services.uiUxDesignPage.mobileWeb.title")}</h2>
                    <p className='text-center pr-5 sm:text-left'>{t("services.uiUxDesignPage.mobileWeb.desc")}</p>

                    <div className="space-y-1">
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">UI Design</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">UX Design</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Interaction Design</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Prototyping </a></li>
                    </div>
                </div>
                <div className=' w-full md:w-3/6 mx-auto'>
                    <img className=' w-full' src="https://i.ibb.co/KqBW8rM/5810325.png" alt="" />

                </div>
            </div>
            <div className='sm:flex inline-block justify-center items-center mt-14'>
                <div className="mt-4">
                    <img className='sm:w-10/12 mb-10 w-full ' src="https://i.ibb.co/YNv6Tvc/01.png" alt="" />
                    <img className='sm:w-10/12 w-full' src="https://i.ibb.co/pjqRNzZ/5806461.png" alt="" />
                </div>
                <div className='mt-4'>
                    <img className='sm:w-10/12 w-full' src="https://i.ibb.co/8s6BN0m/5810609.png" alt="" />
                </div>
            </div>

            <div className='mt-20 w-full pb-28 discus space-y-3'>
                <div className="w-full md:w-3/5 mx-auto p-2">
                    <h3 className='text-center text-white pt-28 text-3xl md:text-5xl font-bold'>
                    {t("services.uiUxDesignPage.letsDiscuss.title")}
                    </h3>
                    <p className='text-center md:text-xl py-5'>
                    {t("services.uiUxDesignPage.letsDiscuss.desc")}
                    </p>
                    <button className='text-center p-3 border text-white border-white hover:text-gray-700 hover:bg-white rounded-lg duration-300'>{t("services.uiUxDesignPage.letsDiscuss.btn")}</button>

                </div>
            </div>

            <div className='mb-16 mt-20'>
                <h2 className='sm:text-center text-2xl sm:text-4xl text-left pb-5' >{t("services.uiUxDesignPage.toolsUse.title")}</h2>
                <p className="py-5 text-center">{t("services.uiUxDesignPage.toolsUse.desc")}</p>
                <div className="sm:flex inline-block justify-around items-start">
                    <div className='space-y-2'>
                        <p className='text-left'>UI/UX</p>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Sketch</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Adob XD</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Photoshop</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Illustrator </a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Figma </a></li>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-left'>Prototyping</p>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Adob XD</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Invision Studio</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Figma</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Sketch </a></li>
                    </div>
                    <div className='space-y-2'>
                        <p className='text-left'>Illustrator& Graphic Design</p>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Illustrator</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Photoshop</a></li>
                        <li className='flex items-center list'> <img className='w-5 mr-2' src={logo} alt="" />  <a href="">Sketch </a></li>
                    </div>
                </div>
            </div>
            {/* <div className="sm:flex inline-block justify-around items-center"> */}
            <div className="grid grid-cols-2 mb-20 sm:grid-cols-5 place-items-center gap-4">
                <img className='w-24' src="https://i.ibb.co/QfYhx1P/ezgif-com-gif-maker.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/Y8cfKgX/ezgif-com-gif-maker-1.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/BnNHcJz/ezgif-com-gif-maker-2.png" alt="" />
                <img className='w-24' src="https://i.ibb.co/BgqkZXZ/sketch.png" alt="" />
                <img className='w-20' src="https://i.ibb.co/S3XcPhs/figma.png" alt="" />
            </div>

            {/* <div className=" service mb-36">
                <h2 className="text-center">Our Services</h2>
                <p className="text-center p-3 sm:pl-40 sm:pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,.</p>
                <div className='grid grid-cols-1 mt-16 sm:grid-cols-4 place-items-center gap-4'>
                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/L6Jkztx/Path-2.png" alt="" />
                            <button className="text-white text-xl">Digital Brand</button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src=" https://i.ibb.co/9bzLHG5/Group-792.png" alt="" />
                            <button className="text-white text-xl">Web Design </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://svgshare.com/i/rRP.svg" alt="" />
                            <button className="text-white text-xl">Packaging </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/k9pRjt1/animation.png" alt="" />
                            <button className="text-white text-xl">Animation </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/pZtx1mq/Design-32.png" alt="" />
                            <button className="text-white text-xl">Content Shooting </button>
                        </div>
                    </div>
                    <div className="w-64 pb-9 pt-9 bg-info rounded-2xl">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/zP51JbF/ux-design.png" alt="" />
                            <button className="text-white text-xl">UX UI Design  </button>
                        </div>
                    </div>

                    <div className="w-64 pb-9 pt-9 rounded-2xl bg-info">
                        <div className="flex justify-evenly item-center">
                            <img className="w-7" src="https://i.ibb.co/0V2cnpt/prototype.png" alt="" />
                            <button className="text-white text-xl">Prototyping  </button>
                        </div>
                    </div>
                </div>
            </div> */}




        </div>
    );
};

export default UiUxService;