import React from 'react';
import Flip from 'react-reveal/Flip';

const TrustedBy = () => {
    return (
        <div className='container p-3 md:p-1 w-full md:w-5/6 h-full mx-auto pb-10'>
            <h3 className="text-2xl md:text-3xl text-white font-bold">Trusted By</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-10">
                <Flip top>
                    <div className="bg-[#707070] rounded flex justify-center items-center px-7 py-10">
                        <img src="https://svgshare.com/i/rN9.svg" alt="" className="object-cover" />
                    </div>
                </Flip>
                <Flip bottom>
                    <div className="bg-[#707070] rounded flex justify-center items-center px-7 py-10">
                        <img src="https://svgshare.com/i/rMS.svg" alt="" className="object-cover" />
                    </div>
                </Flip>
                <Flip top>
                    <div className="bg-[#707070] rounded flex justify-center items-center px-7 py-10">
                        <img src="https://svgshare.com/i/rP3.svg" alt="" className="object-cover" />
                    </div>
                </Flip>
                <Flip bottom>
                    <div className="bg-[#707070] rounded flex justify-center items-center px-7 py-10">
                        <img src="https://svgshare.com/i/rNh.svg" alt="" className="object-cover" />
                    </div>
                </Flip>
            </div>
        </div>
    );
};

export default TrustedBy;