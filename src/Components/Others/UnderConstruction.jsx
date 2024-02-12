import React from 'react';

const UnderConstruction = () => {
    return (
        <div className=''>
            <div class="flex items-center justify-center h-screen">
                <div class="flex flex-col items-center justify-center max-w-2xl">
                    <img src="https://cdn.pixabay.com/photo/2017/06/20/08/12/maintenance-2422173__340.png"
                        alt="tailwindcss maintenance" />
                    <h1 class="mb-3 text-5xl font-bold text-center text-rose-600">Under <span className="text-white">Maintenance</span></h1>
                    <p class="text-center font-semibold text-xl text-gray-500">The Page you are looking for is currently under maintenance and will be
                        back soon.</p>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;