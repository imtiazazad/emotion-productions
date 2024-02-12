import React from 'react';
import { useParams } from 'react-router';
import data from '../../../Data/BlogsData.json';
import RelatedArticle from './RelatedArticle';


const SingleBlog = () => {
    const { id } = useParams();

    const blog = data?.find(b => b?.id === Number(id));
    // console.log(blog);

    return (
        <div className='container py-10 w-full md:w-5/6 mx-auto'>
            <div className="">
                <div className="pb-3">
                    <h3 className="text-2xl md:text-4xl text-white text-start py-2">{blog?.title}</h3>
                    <div className="flex w-full md:w-1/3 justify-between items-center gap-3">
                        <div className="flex justify-start items-center gap-3 pt-3">
                            <img src={blog?.authorImg} alt="" className="w-8 h-8 rounded-full" />
                            <p className="text-white">By {blog?.author}</p>
                        </div>
                        <span className="bg-[#707070] text-white rounded-3xl px-5 py-2">{blog?.badge}</span>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="w-full md:w-5/6 h-96 py-7">
                        <img src={blog?.blogImg} alt="" className="object-cover w-full rounded-t-3xl h-96" />
                    </div>
                    <div className="w-full py-7">
                        <p className="text-[#C9C9C9]">{blog?.blogText}</p>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <RelatedArticle blog={blog} />
            </div>
        </div>
    );
};

export default SingleBlog;