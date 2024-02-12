import React from 'react';
import { useNavigate } from 'react-router';
import data from '../../Data/BlogsData.json';
import Fade from 'react-reveal/Fade';

// console.log(data);

const PopularBlog = () => {
    const navigate = useNavigate();

    const popularBlog = data?.filter(blog => blog?.category === "popular");

    const pBlog = popularBlog && popularBlog[0];
    // console.log(pBlog?.title);

    return (
        <div onClick={() => navigate(`/blogs/${pBlog?.id}`)} className='w-full md:w-5/6 overflow-hidden flex flex-col md:flex-row gap-3 mx-auto py-20'>
            <div className="w-full md:w-3/6 mx-auto">
                <Fade left>
                    <img src={pBlog?.blogImg} alt="" className="object-cover" />
                </Fade>
            </div>
            <Fade right>
                <div className="w-full md:w-3/6 mx-auto text-start py-10 space-y-3">
                    <span className="bg-[#707070] text-white rounded-3xl px-5 py-2">{pBlog?.badge}</span>
                    <h3 className="text-2xl md:text-3xl text-white py-2">{pBlog?.title}</h3>
                    <p className="text-[#C9C9C9]">{pBlog?.blogText}</p>
                    <div className="flex justify-start items-center gap-3 pt-3">
                        <img src={pBlog?.authorImg} alt="" className="w-8 h-8 rounded-full" />
                        <p className="text-white">By {pBlog?.author}</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default PopularBlog;