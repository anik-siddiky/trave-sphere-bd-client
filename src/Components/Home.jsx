import React from 'react';
import HeroSection from './HeroSection';
import FeaturedPackages from './FeaturedPackages';
import SpecialFeaturesSection from './SpecialFeaturesSection';
import CompanyStats from './CompanyStats';
import LocationSection from './LocationSection';

const Home = () => {
    return (
        <div className='min-h-screen bg-white dark:bg-black'>
            <section>
                <HeroSection></HeroSection>
            </section>
            <section>
                <FeaturedPackages></FeaturedPackages>
            </section>
            <section>
                <SpecialFeaturesSection></SpecialFeaturesSection>
            </section>
            <section>
                <CompanyStats></CompanyStats>
            </section>
            <section className='pb-0 lg:pb-10'>
                <LocationSection></LocationSection>
            </section>
        </div>
    );
};

export default Home;