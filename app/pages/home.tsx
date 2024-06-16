import React from "react";
import '../globals.css';
import Icon  from "./Icon";
import Image from 'next/image';

function Homepage() {
    return (
        <> 
            <section className="h-screen w-screen px-5 py-24 otate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)] md:w-screen">
  <div className="flex justify-start items-center container mx-auto px-4 py-8 h-full">
    <div className="inline max-w-screen-xl p-6 rounded-lg bg-white/0 shadow-xl backdrop-blur-xl">
    <h5 className="mb-2 text-3xl text-center font-bold font-serif tracking-tight text-purple-950">Enter desired product</h5>
    <div className="max-w-sm p-6 bg-purple-100 border-dashed border-2 border-purple-950 rounded-lg">
        <div className="flex justify-center">
            <ul>
            <li className="text-xl font-sans font-semibold text-purple-950">Drag and drop image</li>
            <li className="text-center text-2xl font-sans font-semibold text-purple-950">OR</li>
            </ul>
          </div>
          <Icon name='bx bxs-plus-circle bx-md text-purple-700 flex justify-center hover:text-purple-950' />

        <br />
        <div className="flex justify-center">
          <a href="#" className="inline-flex justify-center items-center px-3 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 dark:bg-purple-700 dark:hover:bg-purple-950">
            Browse Files
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );                                                                                      
}
export default Homepage;