import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className="relative h-[90vh]  flex items-center justify-center overflow-hidden text-white">

            {/* Pattern Background Layer */}
            <div className="absolute container inset-0 z-0">
            </div>

            {/* Banner Content */}
            <div className="relative z-10 text-base-content space-y-5 text-center px-4">
                <h1 className="text-3xl md:text-6xl font-bold w-10/12 signika-font mx-auto">Share, collaborate, and scale your blogs and ideas.</h1>
                <p className="mt-4 text-xl w-9/12 mx-auto playfair-font">Effortlessly build blogs, API docs, and product guides with Hashnode, with the flexibility of a headless CMS and more.</p>
                <div className='space-x-5'>
                                    <button className='btn invert rounded-full text-lg px-7 py-6'>
                    <Link  to='/'>Explore Articles</Link>
                </button>
                <button className='btn rounded-full text-lg px-7 py-6'>
                    <Link  to='/'>Sign up for free</Link>
                </button>
                </div>



            </div>
        </div>
    );
};

export default Banner;