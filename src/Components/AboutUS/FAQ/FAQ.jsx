import { t } from 'i18next';
import React from 'react';
import { Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='container w-full p-2 py-10 md:w-4/5 flex flex-col gap-3 md:flex-row justify-center overflow-hidden items-center mx-auto'>

            <div className='w-full md:w-3/6 order-2 px-3 md:order-1 mx-auto md:text-left overflow-hidden'>
                <Bounce>
                    <div className="text-[#C9C9C9] space-y-2 text-start">
                        <div id="accordionExample" className='space-y-3'>
                            <div
                                class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600">
                                <h2 class="mb-0" id="headingOne" className=''>
                                    <button
                                        class="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-natural-800 rounded-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne">
                                        {t("aboutUsPage.faq.t1")}
                                        <span
                                            class="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    class="!visible"
                                    data-te-collapse-item
                                    data-te-collapse-show
                                    aria-labelledby="headingOne"
                                    data-te-parent="#accordionExample">
                                    <div class="py-4 px-5 text-gray-600">
                                    {t("aboutUsPage.faq.d1")}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600">
                                <h2 class="mb-0" id="headingTwo">
                                    <button
                                        class="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-natural-800 rounded-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        {t("aboutUsPage.faq.t2")}
                                        <span
                                            class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="headingTwo"
                                    data-te-parent="#accordionExample">
                                    <div class="py-4 px-5 text-gray-600">
                                    {t("aboutUsPage.faq.d2")}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600">
                                <h2 class="accordion-header mb-0" id="headingThree">
                                    <button
                                        class="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-natural-800 rounded-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree">
                                        {t("aboutUsPage.faq.t3")}
                                        <span
                                            class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="headingThree"
                                    data-te-parent="#accordionExample">
                                    <div class="py-4 px-5 text-gray-600">
                                    {t("aboutUsPage.faq.d3")}
                                    </div>
                                </div>
                            </div>
                            <div
                                class="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600">
                                <h2 class="accordion-header mb-0" id="headingThree">
                                    <button
                                        class="group relative flex w-full items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-white dark:text-natural-800 rounded-none [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                                        type="button"
                                        data-te-collapse-init
                                        data-te-collapse-collapsed
                                        data-te-target="#collapseFour"
                                        aria-expanded="false"
                                        aria-controls="collapseFour">
                                        {t("aboutUsPage.faq.t4")}
                                        <span
                                            class="ml-auto -mr-1 h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="h-6 w-6">
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </span>
                                    </button>
                                </h2>
                                <div
                                    id="collapseFour"
                                    class="!visible hidden"
                                    data-te-collapse-item
                                    aria-labelledby="headingFour"
                                    data-te-parent="#accordionExample">
                                    <div class="py-4 px-5 text-gray-600">
                                    {t("aboutUsPage.faq.d4")}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Bounce>
            </div>
            <Bounce>
                <div className='w-full md:w-3/6 order-1 -p-2 md:order-2 mx-auto text-start px-3 rounded'>
                    <h3 className="text-white text-5xl font-bold">{t("aboutUsPage.faq.title")}</h3>
                    <p className="py-5 text-sm text-white">{t("aboutUsPage.faq.desc")}</p>
                    <div className="pt-5 flex justify-start">
                        <Link to="meeting" className="text-center text-white">
                            <h3 className="px-5 py-2 border flex justify-center items-center hover:border-primary hover:duration-150 rounded w-[200px] mx-auto">Make a Meeting <span className="text-white pl-2">&rarr;</span></h3>
                        </Link>
                    </div>
                </div>
            </Bounce>
        </div>
    );
};

export default FAQ;