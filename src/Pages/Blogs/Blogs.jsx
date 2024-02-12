import React from 'react';
import OtherBlogs1 from '../../Components/Blogs/OtherBlogs1';
import OtherBlogs2 from '../../Components/Blogs/OtherBlogs2';
import PopularBlog from '../../Components/Blogs/PopularBlog';
import TopBlog from '../../Components/Blogs/TopBlog';
import RubberBand from 'react-reveal/RubberBand';

const Blogs = () => {
    return (
        <div className='container w-full mx-auto py-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">Blogs</h3>
            <p className="text-white">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.consetetur sadipscing elitr</p>
            <div className="">
                <PopularBlog />
                <OtherBlogs1 />
                <TopBlog />
                <OtherBlogs2 />
            </div>
            <div className="">
                <RubberBand>
                    <button className="px-5 py-2 border text-white hover:border-primary hover:duration-150 rounded w-[170px] mx-auto">See More</button>
                </RubberBand>
            </div>
        </div>
    );
};

export default Blogs;