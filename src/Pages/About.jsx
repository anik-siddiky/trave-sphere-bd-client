import React from 'react';
import aboutImage1 from '../assets/aboutImages/aboutImage1.jpg';
import aboutImage2 from '../assets/aboutImages/aboutImage2.jpg';
import aboutImage3 from '../assets/aboutImages/aboutImage3.jpg';
import { Link } from 'react-router';
import Loading from '../Components/Loading';

const About = () => {
    return (
        <div className='min-h-screen md:px-0 px-4 py-8 md:py-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-center text-black dark:text-white'>Why Travel Sphere?</h2>
            <p className='px-4 md:px-24 lg:px-96 text-center mt-4 text-sm md:text-base text-gray-900 dark:text-white'>
                Travel Sphere is more than just a travel website. It's your gateway to unforgettable experiences. We believe travel should be easy, inspiring, and tailored to your dreams. Whether you're exploring hidden gems, booking curated travel packages, or planning your next big adventure, Travel Sphere brings the world to your fingertips.
            </p>

            <div className='my-8 md:my-10 md:space-y-0 space-y-3'>

                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 bg-[#2C3892] p-6 md:p-0 md:flex items-center justify-center order-1 md:order-none'>
                        <div className='space-y-3 md:px-8 lg:px-16 xl:px-24 max-w-3xl'>
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-white'>See Nature in a new way</h3>
                            <p className='text-white text-sm md:text-base'>
                                Immerse yourself in breathtaking landscapes where mountains meet the sky and forests whisper ancient secrets. Our nature experiences go beyond typical tours - we'll guide you to hidden waterfalls, teach you to read animal tracks, and help you witness sunrise from vantage points few travelers ever see. Reconnect with the earth in ways that will transform how you see the world forever.
                            </p>
                            <Link to="/all-packages">
                                <button className="btn px-6 md:px-8 bg-[#FA951E] text-white font-normal shadow-none border-none text-sm md:text-base">
                                    All Packages
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 order-0 md:order-none'>
                        <img
                            className='w-full h-auto md:h-full object-cover max-h-96 md:max-h-none'
                            src={aboutImage1}
                            alt="Nature scenery"
                        />
                    </div>
                </div>


                <div className='flex flex-col md:flex-row'>

                    <div className='w-full md:w-1/2 order-0 md:order-none'>
                        <img
                            className='w-full h-auto md:h-full object-cover max-h-96 md:max-h-none'
                            src={aboutImage2}
                            alt="Nature scenery"
                        />
                    </div>

                    <div className='w-full md:w-1/2 bg-[#FA951E] p-6 md:p-0 md:flex items-center justify-center order-1 md:order-none'>
                        <div className='space-y-3 md:px-8 lg:px-16 xl:px-24 max-w-3xl'>
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold'>Make your own Adventure</h3>
                            <p className='text-sm md:text-base'>
                                Break free from rigid itineraries and scripted tours. With Travel Sphere, you craft the journey of your dreams. Whether that means summiting remote peaks at dawn, stumbling upon hidden local cafes, or spending an extra day wherever your heart leads. Mix adrenaline-packed activities with leisurely exploration, all on your schedule.
                            </p>
                            <Link to="/all-packages">
                                <button className="btn px-6 md:px-8 bg-[#2C3892] text-white font-normal shadow-none border-none text-sm md:text-base">
                                    All Packages
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 bg-[#2C3892] p-6 md:p-0 md:flex items-center justify-center order-1 md:order-none'>
                        <div className='space-y-3 md:px-8 lg:px-16 xl:px-24 max-w-3xl'>
                            <h3 className='text-xl md:text-2xl lg:text-3xl font-semibold text-white'>Family friendly Tours</h3>
                            <p className='text-white text-sm md:text-base'>
                                Swap screen time for waterfall climbs and campfire stories. Our guides specialize in keeping kids energized (and parents relaxed) with scavenger hikes, paddleboarding lessons, and cozy cabins with s’more kits. Even picky eaters cheer for our picnic lunches!
                            </p>
                            <Link to="/all-packages">
                                <button className="btn px-6 md:px-8 bg-[#FA951E] text-white font-normal shadow-none border-none text-sm md:text-base">
                                    All Packages
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className='w-full md:w-1/2 order-0 md:order-none'>
                        <img
                            className='w-full h-auto md:h-full object-cover max-h-96 md:max-h-none'
                            src={aboutImage3}
                            alt="Nature scenery"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default About;