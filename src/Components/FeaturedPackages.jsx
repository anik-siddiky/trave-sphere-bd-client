import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FPCard from './FPCard';

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
        <div className='px-4 md:px-0 md:max-w-7xl mx-auto my-10 md:my-16'>
            <h1 className=" text-3xl md:text-4xl font-bold my-8">Featured Packages</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    featuredPackages.map(fPackage => <FPCard key={fPackage._id} fPackage={fPackage}></FPCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedPackages;