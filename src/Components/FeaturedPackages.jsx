import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FPCard from './FPCard';
import { Link } from 'react-router';

const FeaturedPackages = () => {
    const [featuredPackages, setFeaturedPackages] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/sixpackages`)
            .then(res => {
                setFeaturedPackages(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    return (
        <div className='px-4 lg:px-0 md:max-w-7xl mx-auto my-10 md:my-16'>
            <h1 className=" text-3xl md:text-4xl font-bold my-8 text-black dark:text-white">Featured Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    featuredPackages.map(fPackage => <FPCard key={fPackage._id} fPackage={fPackage}></FPCard>)
                }
            </div>
            <Link to="/all-packages" className='flex justify-center items-center my-10'>
                <button className="bg-[#2C3892] text-white px-6 py-3 md:px-16 md:py-6 btn border-none rounded-none md:text-lg font-medium shadow-md hover:bg-[#FA951E] hover:scale-105 transition duration-300 ease-in-out">
                    View All Packages
                </button>
            </Link>
        </div>
    );
};

export default FeaturedPackages;