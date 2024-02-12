import React from 'react';
import { useNavigate } from 'react-router';
import data from '../../Data/BlogsData.json';
import LightSpeed from 'react-reveal/LightSpeed';

const OtherBlogs1 = () => {
    const othersBlog = data?.filter(blog => (blog?.category !== "popular" && blog?.category !== "top"));
    const navigate = useNavigate();

    // console.log(othersBlog);

    return (
        <div className='container overflow-hidden py-10 w-full md:w-5/6 mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mx-auto">
                {
                    othersBlog?.slice(0, 6)?.map(blog => (
                        <LightSpeed>
                            <div onClick={() => navigate(`/blogs/${blog?.id}`)} key={blog?.id} className="cursor-pointer">
                                <div className='w-full flex flex-col gap-3 mx-auto py-7'>
                                    <div className="w-full mx-auto">
                                        <img src={blog?.blogImg} alt="" className="object-cover" />
                                    </div>
                                    <div className="w-full mx-auto text-start space-y-3 px-3">
                                        <h3 className="text-xl font-bold text-white">{blog?.title}</h3>
                                        <div className="flex justify-between items-center gap-3">
                                            <div className="flex justify-start items-center gap-3 pt-3">
                                                <img src={blog?.authorImg} alt="" className="w-8 h-8 rounded-full" />
                                                <p className="text-white">By {blog?.author}</p>
                                            </div>
                                            <span className="bg-[#707070] text-white rounded-3xl px-5 py-2">{blog?.badge}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </LightSpeed>
                    ))
                }
            </div>
        </div>
    );
};

export default OtherBlogs1;