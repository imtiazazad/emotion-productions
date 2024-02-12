import React from 'react';
import { ProductData } from '../../../Data/ProductData';

const ProductsSec1 = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full md:px-10 mx-auto py-10'>
            {
                ProductData?.slice(0,8)?.map(pd => (
                    <div key={pd?.id} className="bg-[#252525c3] w-full group mx-auto pb-5">
                        <div className="relative h-80 overflow-hidden">
                            <img className='transform h-full w-full object-fill group-hover:scale-110 relative transition duration-300' src={pd?.picture} alt="" />
                            <button className="bg-black text-white py-2 w-full group-hover:opacity-100 group-hover:translate-y-0 translate-y-10 transform transition duration-300 ease-in-out absolute bottom-0 left-0">View Product</button>
                        </div>
                        <div className="space-y-3 px-2">
                            <h3 className="text-2xl text-white pt-7">{pd?.title}</h3>
                            <h3 className="text-xl text-gray-300">{pd?.desc}</h3>
                            <h5 className="text-white text-xl tracking-wide font-bold">${pd?.price}</h5>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};

export default ProductsSec1;