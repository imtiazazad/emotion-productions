import React from 'react';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/6tm3mb4/home-banner.png')] backdrop-saturate-125 bg-white/30 h-screen w-full bg-cover bg-center">
            <div className="flex flex-col justify-center items-center h-full">
                <Fade bottom>
                    <div className="hero-content w-full h-full text-center text-neutral-content">
                        {/* <label htmlFor="my-modal-5" className="w-full modal-button">
                            <h1 className="bg-white w-full h-full hover:bg-white btn hover:bg-opacity-60 bg-opacity-40 btn-circle text-white text-3xl">
                                <img width="120" height="120" src="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png" class="attachment-full size-full" alt="" srcset="https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon.png 120w, https://edusphere.radiantthemes.com/wp-content/uploads/2020/06/Video-Icon-100x100.png 100w" sizes="(max-width: 120px) 100vw, 120px" data-no-retina="" /> */}
                                {/* <i className="fa-solid fa-circle-play bg-red-600 rounded-full"></i> */}
                                <ReactPlayer
                                    width={"100%"}
                                    height={"100%"}
                                    controls
                                    light="https://i.ibb.co/6tm3mb4/home-banner.png"
                                    url={`https://www.youtube.com/embed/NsWz_3KmCdY`}
                                    playing
                                    config={{
                                        youtube: {
                                            playerVars: {
                                                showinfo: 0,
                                                fs: 0,
                                            },
                                            modestbranding: 1,
                                            preload: true,
                                            rel: 0
                                        },
                                    }}
                                />
                            {/* </h1>
                        </label> */}
                    </div>
                </Fade>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl rounded-lg bg-base-300 p-4">
                        <iframe
                            className="mx-auto w-full lg:h-96 h-48 md:h-96 rounded-lg"
                            src="https://www.youtube.com/embed/NsWz_3KmCdY"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <div className="modal-action mt-3">
                            <label htmlFor="my-modal-5" className="btn btn-primary btn-sm text-white">
                                Close
                            </label>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;