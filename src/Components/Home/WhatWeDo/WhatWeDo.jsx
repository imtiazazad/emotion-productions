import React from 'react';
import Wobble from 'react-reveal/Wobble';
import Jump from 'react-reveal/Jump';

const WhatWeDo = () => {
    return (
        <div className='container w-full mx-auto h-full pt-5 md:pt-10 py-10'>
            <Jump>
                <h3 className="text-2xl md:text-3xl text-white font-bold pb-10">What We Do</h3>
            </Jump>
            <div className="bg-[#707070] w-full md:w-3/5 mx-auto rounded-xl">
                <Wobble>
                    <img src="https://i.ibb.co/jVFsXZ1/rQy-1.png" alt="" className="object-cover" />
                </Wobble>
            </div>
        </div>
    );
};

export default WhatWeDo;