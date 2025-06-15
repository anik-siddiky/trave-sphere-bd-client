import React from 'react';
import HeroSection from './HeroSection';
import FeaturedPackages from './FeaturedPackages';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <HeroSection></HeroSection>
            <FeaturedPackages></FeaturedPackages>
        </div>
    );
};

export default Home;