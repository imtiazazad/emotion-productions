// import { signOut } from "firebase/auth";
import React, { useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, NavLink } from "react-router-dom";
// import auth from "../../../firebase.init";
import { HiBars3CenterLeft } from "react-icons/hi2";
import logo from '../../../Assets/Public/Logo.png';
import { useForm } from "react-hook-form";
import { FaFacebook, FaGlobeAsia, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';


const Navbar = ({ currentLanguageCode, languages }) => {
    // const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    // const logout = () => {
    //     signOut(auth);
    //     //Token Remove
    //     localStorage.removeItem("accessToken");
    // };

    const manuItems = (
        <>
            <li>
                <NavLink className="hover:rounded-none" to="/"> Home </NavLink>
            </li>
            <li class="dropdown">
                <span> Services </span>
                <ul class="dropdown-menu transition-all origin-top duration-300">
                    <div className='mb-1 -ml-52 -mt-4 px-7 py-3 bg-[#211f20] flex items-start rounded'>
                        <div>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/digitalbrand">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/L6Jkztx/Path-2.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Digital Brand </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/webdesign">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/9bzLHG5/Group-792.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Web Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>

                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/packaging">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://svgshare.com/i/rRP.svg" alt="" />
                                    </span>
                                    <p className="flex items-center"> Packaging </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/animation">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/k9pRjt1/animation.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Animation </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                        </div>
                        <div className='ml-24 mt-0 flex flex-col items-start'>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/contantshotting">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/pZtx1mq/Design-32.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Content Shotting </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/uiuxdesign">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/zP51JbF/ux-design.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> UX UI Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/prototype">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://i.ibb.co/0V2cnpt/prototype.png" alt="" />
                                    </span>
                                    <p className="flex items-center"> Prototype </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/accessories">
                                    <span className='w-12 p-3 h-12 group-hover:bg-[#707070] flex items-center rounded-full'>
                                        <img className='w-7' src="https://svgshare.com/i/rRP.svg" alt="" />
                                    </span>
                                    <p className="flex items-center"> Accessories </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:translate-x-5 duration-200">&rarr;</span>
                                </NavLink>
                            </li>

                        </div>
                    </div>
                </ul>
            </li>
            <li>
                <NavLink to="aboutus">About US</NavLink>
            </li>
            <li>
                <NavLink to="blogs">Blogs</NavLink>
            </li>

            <div className="">

                <div className="dropdown dropdown-end p-0">
                    <label tabIndex={0} className="btn bg-transparent outline-none border-none text-white focus:bg-transparent hover:bg-transparent btn-sm"><span className={`fi ${(currentLanguageCode === "nl" && "fi-nl") || (currentLanguageCode === "en" && "fi-us")}`}></span><span className="pl-1">{(currentLanguageCode === "nl" && "Dutch") || (currentLanguageCode === "en" && "English")}</span></label>
                    <ul tabIndex={0} className="dropdown-content text-sm z-[1] menu p-1 shadow bg-base-100 rounded">
                        {languages?.map(({ code, name, flag }) => (
                            <li className='p-1' key={code} >
                                <button className={`${code === currentLanguageCode && 'bg-primary text-white'} p-2 text-black`} onClick={() => { i18next.changeLanguage(code) }}
                                    disabled={code === currentLanguageCode} > <span className={`fi fi-${flag}`}></span>{name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );

    const mobileManuItems = (
        <>
            <li>
                <NavLink className="hover:rounded-none" to="/"> Home </NavLink>
            </li>
            <li class="dropdown">
                <span>Services &rarr;</span>
                <ul class="dropdown-menu">
                    <div className='mb-1 -ml-40 -mt-32 z-20 bg-[#211f20] flex flex-col items-start rounded'>
                        <div>
                            <li className='flex items-center group transition-all'>
                                <NavLink to="service/digitalbrand">
                                    <p className="flex items-center"> Digital Brand </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white group-hover:scale-110 duration-200">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="service/webdesign">
                                    <p className="flex items-center"> Web Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="service/packaging">
                                    <p className="flex items-center"> Packaging </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="service/animation">
                                    <p className="flex items-center"> Animation </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                        </div>
                        <div className='flex flex-col items-start'>
                            <li className='flex items-center group'>
                                <NavLink to="service/contantshotting">
                                    <p className="flex items-center"> Content Shotting </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="service/uiuxdesign">
                                    <p className="flex items-center"> UX UI Design </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="service/prototype">
                                    <p className="flex items-center"> Prototype </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>
                            <li className='flex items-center group'>
                                <NavLink to="service/accessories">
                                    <p className="flex items-center"> Accessories </p>
                                    <span class="text-transparent text-4xl -pt-5 group-hover:text-white">&rarr;</span>
                                </NavLink>
                            </li>

                        </div>
                    </div>
                </ul>
            </li>
            <li>
                <NavLink to="aboutus">About US</NavLink>
            </li>
            <li>
                <NavLink to="blogs">Blogs</NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar sticky top-0 w-full z-50 lg:px-10 bg-[#211f20] backdrop-filter backdrop-blur-lg border-b-[0.5px] border-gray-500">
            <div className="navbar-start">
                <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
                    <div className="">
                        <ul tabIndex="0" className="bg-[#211f20] h-screen">
                            <Link to="/">
                                <div className="flex items-center w-full">
                                    {/* <img className="w-9 ml-3" src={wslogo} alt="image" /> */}
                                    <div className="ml-1 text-md font-sub font-bold mt-1">
                                        <img className="h-[70px]" src={logo} alt="" />
                                    </div>
                                </div>
                            </Link>
                            <ul className="menu menu-compact text-white py-7 text-xl">
                                {mobileManuItems}
                            </ul>
                            {/* <li>
                                {user ? (
                                    <div>
                                        <div className="flex flex-nowrap items-center cursor-pointer border-b border-neutral w-full">
                                            <label className="avatar">
                                                <div className="w-7 mx-2 my-2 rounded-full border border-gray-200">
                                                    <img
                                                        src={`${user?.photoURL
                                                            ? user?.photoURL
                                                            : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                                            }`}
                                                        alt=""
                                                    />
                                                </div>
                                            </label>
                                        </div>
                                        <ul className="menu menu-compact">
                                            <li>
                                                <NavLink className="hover:rounded-none" to={"profile"}>
                                                    <i className="ml-4 fa-solid fa-user" />
                                                    Profile
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="hover:rounded-none" to={"mycourse"}>
                                                    <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink className="hover:rounded-none" to={"mybooks"}>
                                                    <i className="ml-4 fa-solid fa-book"></i>My Books
                                                </NavLink>
                                            </li>
                                            <li>
                                                <a href="!#" className=" hover:rounded-none" onClick={logout}>
                                                    <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                                                    Logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                ) : (
                                    <div className="border-t border-neutral">
                                        <li>
                                            <Link
                                                className="mt-3 mx-3 w-56 btn-info btn-sm btn rounded-full text-white hover:rounded-full font-thin"
                                                to="Login"
                                            >
                                                Login
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="bg-[#494FC1] hover:bg-[#4a4e94] my-3 mx-3 w-56 hover:rounded-full btn-sm btn rounded-full text-white font-thin"
                                                to="Signup"
                                            >
                                                Register
                                            </Link>
                                        </li>
                                    </div>
                                )}
                            </li> */}

                            <li>
                                <label htmlFor="my-modal-3" className="mx-auto text-white">
                                    <h3 className="px-5 py-2 cursor-pointer border hover:border-primary hover:duration-150 rounded w-[170px] mx-auto">Make a Meeting</h3>
                                </label>
                            </li>
                        </ul>
                    </div>
                </Drawer>
                <Link to="/">
                    <div className="flex items-center">
                        {/* <img className="w-9 ml-3" src={wslogo} alt="image" /> */}
                        <div className="ml-1 text-md font-header font-bold">
                            <img className="h-[70px]" src={logo} alt="" />
                        </div>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-white menu-horizontal menu-compact p-0 gap-3 uppercase">
                    {manuItems}
                </ul>
            </div>

            {/* <div className="navbar-end hidden lg:flex">

                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-9 rounded-full">
                                <img
                                    src={`${user?.photoURL
                                        ? user?.photoURL
                                        : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                        }`}
                                    alt=""
                                />
                            </div>
                        </label>
                        <ul
                            tabIndex="0"
                            className="mt-3 shadow menu menu-compact dropdown-content rounded-md w-56 bg-base-100 text-warning"
                        >
                            <div className="mx-auto mt-3">
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        <img
                                            src={`${user?.photoURL
                                                ? user?.photoURL
                                                : "https://github.com/MShafiMS/admission/blob/gh-pages/profile.png?raw=true"
                                                }`}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="border-b border-neutral">
                                <h1 className="text-lg text-center">
                                    {
                                </h1>
                                <p className="text-xs mb-2 text-center">Student</p>
                            </div>
                            <li>
                                <NavLink to={"profile"} className=" hover:rounded-none">
                                    <i className="ml-4 fa-solid fa-user" />
                                    Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"mycourse"} className="hover:rounded-none">
                                    <i className="ml-4 fa-solid fa-bolt"></i>My Courses
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:rounded-none" to={"mybooks"}>
                                    <i className="ml-4 fa-solid fa-book"></i>My Books
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/orders"} className="hover:rounded-none">
                                    <i className="ml-4 fa-solid fa-clock"></i>Payment History
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="!#"
                                    onClick={logout}
                                    className="hover:rounded-b-md hover:rounded-none text-red-600"
                                >
                                    <i className="ml-4 fa-solid fa-right-from-bracket"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex">
                        <a href="!#" className="btn-accent btn-sm btn rounded-md text-white font-thin">
                            <Link to="Login">Login</Link>
                        </a>
                        <div className="divider lg:divider-horizontal"></div>
                        <a href="!#" className="bg-[#494FC1] hover:bg-[#4a4e94] btn-sm btn rounded-md text-white font-thin">
                            <Link to="SignUp">Register</Link>
                        </a>
                    </div>
                )}
            </div> */}

            <li className="navbar-end hidden lg:flex">
                <label htmlFor="my-modal-3" className="mx-auto text-white">
                    <h3 className="px-5 py-2 border hover:border-primary cursor-pointer hover:duration-150 rounded w-[170px] mx-auto">Make a Meeting</h3>
                </label>
            </li>

            <div className="navbar-end lg:hidden flex">

                <div className="dropdown">
                    <label
                        onClick={toggleDrawer}
                        tabIndex="0"
                        className="mx-4 text-3xl lg:hidden cursor-pointer"
                    >
                        <HiBars3CenterLeft className="text-white" />
                    </label>
                </div>
            </div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

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

export default Navbar;