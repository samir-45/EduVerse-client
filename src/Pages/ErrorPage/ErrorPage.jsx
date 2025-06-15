import Lottie from 'lottie-react';
import React from 'react';
import errorLottie from "../../assets/lotties/error-lottie.json";
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-amber-50 h-screen w-full relative'>
            <div className='top-1/2 w-full flex justify-center absolute z-10'>
            <Link to='/' className='btn btn-primary'>Back to Home</Link>
            </div>
            
            <div className=' flex justify-center w-full items-center'>
                <Lottie className='w-xl' animationData={errorLottie} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default ErrorPage;