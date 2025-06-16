import React from 'react';
import { motion } from 'framer-motion';
import { Gift, ShieldCheck, Settings, Bike, Hotel, Sun, Moon, Mountain, Waves, } from 'lucide-react';
import { Link } from 'react-router';

const features = [
    {
        icon: <Gift className="text-blue-600" size={28} />,
        title: 'Exclusive Offers',
        desc: 'Enjoy special deals and free add-ons with every booking you make.',
        bg: 'bg-blue-100',
    },
    {
        icon: <ShieldCheck className="text-green-600" size={28} />,
        title: 'Secure Travel',
        desc: 'Our expert guides and partners ensure a safe and stress-free journey.',
        bg: 'bg-green-100',
    },
    {
        icon: <Settings className="text-purple-600" size={28} />,
        title: 'Smart Planning',
        desc: 'We use intelligent systems to optimize your itinerary perfectly.',
        bg: 'bg-purple-100',
    },
    {
        icon: <Bike className="text-red-600" size={28} />,
        title: 'Adventure Rides',
        desc: 'Exciting cycling trips designed for thrill-seekers of all levels.',
        bg: 'bg-red-100',
    },
    {
        icon: <Hotel className="text-yellow-600" size={28} />,
        title: 'Luxury Stays',
        desc: 'Stay at premium hotels and resorts handpicked just for you.',
        bg: 'bg-yellow-100',
    },
    {
        icon: <Sun className="text-orange-600" size={28} />,
        title: 'Eco Travel',
        desc: 'Our tours are powered by clean energy and sustainability.',
        bg: 'bg-orange-100',
    },
    {
        icon: <Waves className="text-teal-600" size={28} />,
        title: 'Water Escapades',
        desc: 'Relax with activities like swimming, fishing, and more.',
        bg: 'bg-teal-100',
    },
    {
        icon: <Moon className="text-indigo-600" size={28} />,
        title: 'Night Camping',
        desc: 'Sleep under the stars in safe and serene outdoor spots.',
        bg: 'bg-indigo-100',
    },
    {
        icon: <Mountain className="text-pink-600" size={28} />,
        title: 'Mountain Hikes',
        desc: 'Breathtaking guided hikes through scenic mountain trails.',
        bg: 'bg-pink-100',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
    }),
};

const SpecialFeaturesSection = () => {
    return (
        <div className="container mx-auto px-4 md:px-0 py-16 md:max-w-7xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                    Why Choose Us
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-100 max-w-2xl mx-auto">
                    We go beyond ordinary travel experiences to offer safety, comfort,
                    and unforgettable memories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={i}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="flex items-start gap-4">
                            <div className={`${feature.bg} p-3 rounded-full`}>{feature.icon}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-100 text-sm">{feature.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center mt-16"
            >
                <Link to='/all-packages'>
                    <button className="bg-[#2C3892] text-white px-6 py-3 md:px-10 md:py-4 btn border-none rounded-none md:text-lg font-medium shadow-md hover:bg-[#FA951E] hover:scale-105 transition duration-300 ease-in-out">
                        View Packages
                    </button>
                </Link>
            </motion.div>
        </div>
    );
};

export default SpecialFeaturesSection;
