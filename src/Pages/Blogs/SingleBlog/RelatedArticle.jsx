import React from 'react';
import { useNavigate } from 'react-router';
import data from '../../../Data/BlogsData.json';

const RelatedArticle = ({blog}) => {
    const navigate = useNavigate();

    const disMatchId = data?.filter(cr => cr?.id !== blog?.id);
    // console.log(disMatchId);

    return (
        <div className='container'>
            <h3 className="text-2xl md:text-3xl text-white text-start font-bold pb-10">Related Article</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    disMatchId?.slice(0, 3)?.map(blog => (
                        <div onClick={() => navigate(`/blogs/${blog?.id}`)} key={blog?.id} className="group cursor-pointer">
                            <div className='w-full flex flex-col gap-3 mx-auto py-7'>
                                <div className="w-full mx-auto h-52 overflow-hidden">
                                    <img src={blog?.blogImg} alt="" className="object-cover group-hover:scale-105 group-hover:duration-300" />
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
                    ))
                }
            </div>
        </div>
    );
};

export default RelatedArticle;