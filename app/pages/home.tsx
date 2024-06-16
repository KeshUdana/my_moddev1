import React from "react";
import '../globals.css';
import Icon  from "./Icon";
import Image from 'next/image';

function Homepage() {
    return (
        <> 
            <section className="min-h-screen px-5 py-24 bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] flex items-center justify-center">
                <div className="flex w-full max-w-screen-xl">

                    {/* Left Column */}
                    <div className="flex flex-col justify-center items-center w-1/3 p-6 rounded-lg bg-white/20 shadow-xl backdrop-blur-xl z-40">
                        <h5 className="mb-2 text-3xl text-center font-bold font-serif tracking-tight text-purple-950">Enter desired product</h5>
                        <div className="max-w-sm p-10 bg-purple-500/20 border-dashed border-2 border-purple-950 rounded-lg">
                            <div className="flex justify-center">
                                <ul>
                                    <li className="text-xl font-sans font-semibold text-purple-950">Drag and drop image</li>
                                    <li className="text-center text-2xl font-sans font-semibold text-purple-950">OR</li>
                                </ul>
                            </div>
                            <a href="$">
                                <Icon name='bx bxs-plus-circle bx-md text-purple-700 flex justify-center hover:text-purple-950' />
                            </a>
                            <br />
                            <div className="flex justify-center">
                                <a href="#" className="inline-flex justify-center items-center px-3 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-purple-700 dark:hover:bg-purple-950">
                                    Browse Files
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center items-center w-1/2 space-x-4 z-20">
                      
                        <div className="max-w-screen-xl  rounded-lg bg-white shadow-xl backdrop-blur-xl w-full">
                            <Image src="/Rectangle 54.png" alt="Image 1" width={300} height={200} />
                        </div>
                        <div className="max-w-screen-xl rounded-lg bg-white shadow-xl backdrop-blur-xl w-full">
                            <Image src="/Rectangle 55.png" alt="Image 2" width={300} height={200} />
                        </div>
                        <div className="max-w-screen-xl rounded-lg bg-white shadow-xl backdrop-blur-xl w-full">
                            <Image src="/image1.jpg" alt="Image 3" width={400} height={400} />
                        </div>
                        <div className="max-w-screen-xl rounded-lg bg-white shadow-xl backdrop-blur-xl w-full">
                            <Image src="/image2.jpg" alt="Image 3" width={300} height={200} />
                        </div>
                        </div>
                    </div>

                
            </section>

        </>
    );                                                                                      
}
export default Homepage;