import React from "react";
import '../globals.css';
import Image from 'next/image';

function Homepage() {
    return (
        <> 
        <section className="h-screen w-screen px-5 py-24 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] md:w-screen">
        <div className="flex justify-start">
    <div className=" inline w-full max-w-screen-lg p-6 bg-purple-100 border border-gray-200 rounded-lg">
        <div className="w-1/3 max-w-screen-lg p-6 bg-transparent border-dashed border-2 border-gray-200 rounded-lg ">
      <h5 className="mb-2 text-3xl text-center font-bold font-serif tracking-tight text-purple-950">Enter desired product</h5>
      <a href="#" className="inline-flex justify-center items-center px-3 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-purple-700 dark:hover:bg-purple-950">
        Browse Files
      </a></div>
            </div>
            </div>
        </section>
        </>
    );
}
export default Homepage;