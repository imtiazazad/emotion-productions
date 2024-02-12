import React from 'react';
import ProgressLine from './ProgressLine';
import { Fade } from 'react-reveal';

const Progress = () => {
    return (
        <div className='container w-full md:space-y-10 pt-10'>
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <Fade left>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="flex text-xl justify-between items-center gap-3 -mb-5">
                            <h3 className="text-white">HTML 5</h3>
                            <h3 className="text-white">95%</h3>
                        </div>
                        <ProgressLine visualParts={[{ percentage: "95%", color: "deepskyblue" }]} />
                    </div>
                </Fade>
                <Fade right>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="flex text-xl justify-between items-center gap-3 -mb-5">
                            <h3 className="text-white">ILLUSTRATOR</h3>
                            <h3 className="text-white">70%</h3>
                        </div>
                        <ProgressLine visualParts={[{ percentage: "70%", color: "deepskyblue" }]} />
                    </div>
                </Fade>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <Fade left>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="flex text-xl justify-between items-center gap-3 -mb-5">
                            <h3 className="text-white">JAVASCRIPT</h3>
                            <h3 className="text-white">75%</h3>
                        </div>
                        <ProgressLine visualParts={[{ percentage: "75%", color: "deepskyblue" }]} />
                    </div>
                </Fade>
                <Fade right>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="flex text-xl justify-between items-center gap-3 -mb-5">
                            <h3 className="text-white">PHOTOSHOP</h3>
                            <h3 className="text-white">95%</h3>
                        </div>
                        <ProgressLine visualParts={[{ percentage: "95%", color: "deepskyblue" }]} />
                    </div>
                </Fade>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-full">
                <Fade left>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="flex text-xl justify-between items-center gap-3 -mb-5">
                            <h3 className="text-white">PHP</h3>
                            <h3 className="text-white">85%</h3>
                        </div>
                        <ProgressLine visualParts={[{ percentage: "85%", color: "deepskyblue" }]} />
                    </div>
                </Fade>
                <Fade right>
                    <div className="w-full md:w-2/5 mx-auto">
                        <div className="flex text-xl justify-between items-center gap-3 -mb-5">
                            <h3 className="text-white">SONY VEGAS</h3>
                            <h3 className="text-white">90%</h3>
                        </div>
                        <ProgressLine visualParts={[{ percentage: "90%", color: "deepskyblue" }]} />
                    </div>
                </Fade>
            </div>

        </div>
    );
};

export default Progress;