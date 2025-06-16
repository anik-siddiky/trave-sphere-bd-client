import React from 'react';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import errorAnimation from '../assets/animations/error404.json';

const ErrorPage = () => {
    return (
        <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-white dark:bg-black text-center px-4">
            <div className="max-w-md w-full">
                <Lottie
                    animationData={errorAnimation}
                    loop
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto"
                />
                <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3892] mb-4">Page Not Found</h1>
                <p className="mb-6 text-black dark:text-white">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link to="/">
                    <button className="btn bg-[#2C3892] text-white hover:bg-[#FA951E] rounded-none border-none px-6">
                        Go to Homepage
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
