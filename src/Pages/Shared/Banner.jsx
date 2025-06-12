import React, { useEffect } from 'react';
import { Link } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    const { user } = UseAuth()

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative h-[90vh]  flex items-center justify-center overflow-hidden text-white">

            {/* Pattern Background Layer */}
            <div className="absolute container w-full h-full z-0">
            </div>

            {/* Banner Content */}
            <div data-aos="fade-up" className="relative z-10 text-base-content space-y-5 text-center px-4">
                <h1  className="text-3xl md:text-6xl font-bold w-10/12 signika-font mx-auto">Share, collaborate, and scale your blogs and ideas.</h1>
                <p className="mt-4 text-xl w-9/12 mx-auto playfair-font">Effortlessly build blogs, API docs, and product guides with Hashnode, with the flexibility of a headless CMS and more.</p>
                <div className='space-x-5'>
                    <button className='btn invert rounded-full text-lg px-7 py-6'>
                        <Link to='/articles'>Explore Articles</Link>
                    </button>
                    {
                        user ? '' : <button className='btn rounded-full text-lg px-7 py-6'>
                            <Link to='/auth/signIn'>Sign up for free</Link>
                        </button>
                    }

                </div>



            </div>
        </div>
    );
};

export default Banner;