import React from 'react';
import { useForm } from 'react-hook-form';
import Flash from 'react-reveal/Flash';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { t } from 'i18next';


const EPServices = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();


    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='container w-full mx-auto p-3'>
            <div className='w-full md:w-5/6 flex flex-col md:flex-row justify-between items-center gap-3 mx-auto py-10'>
                <div className="text-white text-start w-full md:w-3/6 mx-auto p-2">
                    <RubberBand>
                        <h3 className="text-3xl md:text-5xl pb-3">{t("homepage.epServices.title")}</h3>
                    </RubberBand>
                    <div className="space-y-2 py-2 text-sm">
                        <Slide top>
                            <p className="">{t("homepage.epServices.desc1")}</p>
                        </Slide>
                        <Slide bottom>
                            <p className="">{t("homepage.epServices.desc2")}</p>
                        </Slide>
                        <Slide top>
                            <p className="">{t("homepage.epServices.desc3")}</p>
                        </Slide>
                        <Slide bottom>
                            <p className="">{t("homepage.epServices.desc4")}</p>
                        </Slide>
                        <Slide top>
                            <p className="">{t("homepage.epServices.desc5")}</p>
                        </Slide>
                        <Slide bottom>
                            <p className="pb-7">{t("homepage.epServices.desc6")}</p>
                        </Slide>
                    </div>
                    <RubberBand>
                        <label htmlFor="my-modal-3" className="mx-auto text-white">
                            <h3 className="px-5 py-2 border hover:border-primary cursor-pointer hover:duration-150 rounded w-[170px]">{t("homepage.epServices.mkMeeting")}</h3>
                        </label>
                    </RubberBand>
                </div>
                <div className="w-full md:w-3/6 mx-auto p-2">
                    <Flash>
                        <img src="https://i.ibb.co/XYQSQF3/Group-763.png" alt="" className="" />
                    </Flash>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal z-50 h-screen w-full overflow-hidden">
                <div className="modal-box w-11/12 max-w-5xl bg-[url('https://i.ibb.co/g6RtRmC/JOR08547-1.jpg')] bg-cover overflow-hidden relative bg-[#000000] ">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="text-white">
                        <div className="flex items-center min-h-full p-4 lg:justify-center">
                            <div className="flex flex-col overflow-hidden mx-auto bg-transparent rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md drop-shadow-2xl">
                                <div className="hidden p-3 text-white text-start bg-transparent md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
                                    <h3 className="text-5xl font-bold text-start">Contact US</h3>
                                    <h3 className="text-2xl font-semibold">We'd Love to Hear from You</h3>
                                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quo commodi ratione obcaecati dolores quos sunt sed rerum laborum? Vel!</p>
                                    <div className="flex gap-2">
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaInstagram /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaFacebook /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaYoutube /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaTwitter /></span>
                                        <span className="text-xl p-1 bg-white text-gray-600"><FaLinkedin /></span>
                                    </div>
                                </div>
                                <div className="p-3 bg-transparent md:flex-1">
                                    <h3 className="my-4 text-3xl font-bold text-yellow-300 text-center ">
                                        Contact Form
                                    </h3>
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        action="#"
                                        className="flex flex-col space-y-2"
                                    >
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("name", {
                                                    required: {
                                                        value: true,
                                                        message: "Name is require",
                                                    }
                                                })}
                                            />
                                            {/* <label className="label">
                                                {errors.name?.type === "required" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.name.message}
                                                    </span>
                                                )}
                                                {errors.name?.type === "pattern" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.name.message}
                                                    </span>
                                                )}
                                            </label> */}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="phone"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="phone"
                                                placeholder="Phone Number"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("phone", {
                                                    required: {
                                                        value: true,
                                                        message: "Phone Number is require",
                                                    }
                                                })}
                                            />
                                            {/* <label className="label">
                                                {errors.phone?.type === "required" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                                {errors.phone?.type === "pattern" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.phone.message}
                                                    </span>
                                                )}
                                            </label> */}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="px-4 py-2 transition duration-300 border border-gray-300 text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("email", {
                                                    required: {
                                                        value: true,
                                                        message: "Email is require",
                                                    },
                                                    pattern: {
                                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                        message: "Provide a valid Email",
                                                    },
                                                })}
                                            />
                                            {/* <label className="label">
                                                {errors.email?.type === "required" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.email.message}
                                                    </span>
                                                )}
                                                {errors.email?.type === "pattern" && (
                                                    <span className="label-text-alt text-red-700">
                                                        {errors.email.message}
                                                    </span>
                                                )}
                                            </label> */}
                                        </div>
                                        <div className="flex flex-col space-y-1">
                                            <label
                                                htmlFor="messege"
                                                className="text-sm font-semibold text-white text-start"
                                            >
                                                Messege
                                            </label>
                                            <textarea
                                                type="text"
                                                placeholder="Messege"
                                                className="px-4 py-2 transition duration-300 border border-gray-300  text-black rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                                                {...register("messege", {
                                                    required: {
                                                        value: true,
                                                        message: "Messege is require",
                                                    },
                                                    minLength: {
                                                        value: 6,
                                                        message: "Must be 6 characters or longer",
                                                    },
                                                })}
                                            />

                                        </div>

                                        <div className="pt-3">

                                            <button
                                                type="submit"
                                                className="w-full px-4 py-2 text-lg font-semibold text-gray-700 transition-colors duration-300 bg-gradient-to-r from-[#bfcc35] to-[#fff30a] rounded-md shadow  hover:bg-gradient-to-l focus:outline-none focus:ring-blue-200 focus:ring-4"
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EPServices;