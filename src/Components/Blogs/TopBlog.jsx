import React from 'react';
import { useNavigate } from 'react-router';
import data from '../../Data/BlogsData.json';
import Zoom from 'react-reveal/Zoom';

const TopBlog = () => {
    const navigate = useNavigate();

    const topBlog = data?.filter(blog => blog?.category === "top");

    const tBlog = topBlog && topBlog[0];
    // console.log(tBlog?.title);

    return (
        <div onClick={() => navigate(`/blogs/${topBlog?.id}`)} className='w-full md:w-5/6 flex flex-col md:flex-row gap-3 mx-auto py-20'>
            <div className="w-full md:w-3/6 mx-auto">
                <Zoom top>
                    <img src={tBlog?.blogImg} alt="" className="object-cover" />
                </Zoom>
            </div>
            <Zoom bottom>
                <div className="w-full md:w-3/6 mx-auto text-start py-10 space-y-3">
                    <span className="bg-[#707070] text-white rounded-3xl px-5 py-2">{tBlog?.badge}</span>
                    <h3 className="text-2xl md:text-3xl text-white py-2">{tBlog?.title}</h3>
                    <p className="text-[#C9C9C9]">{tBlog?.blogText}</p>
                    <div className="flex justify-start items-center gap-3 pt-3">
                        <img src={tBlog?.authorImg} alt="" className="w-8 h-8 rounded-full" />
                        <p className="text-white">By {tBlog?.author}</p>
                    </div>
                </div>
            </Zoom>
        </div>
    );
};

export default TopBlog;