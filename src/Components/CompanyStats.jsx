import React from 'react';
import CountUp from 'react-countup';
import { Users, MapPin, Briefcase, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
    {
        label: 'Total Happy Clients',
        icon: <Users className="w-8 h-8 text-blue-600" />,
        end: 1250
    },
    {
        label: 'Total Guides',
        icon: <Briefcase className="w-8 h-8 text-green-600" />,
        end: 250
    },
    {
        label: 'Total Tours',
        icon: <MapPin className="w-8 h-8 text-purple-600" />,
        end: 480
    },
    {
        label: 'Total Destinations',
        icon: <Landmark className="w-8 h-8 text-orange-600" />,
        end: 85
    }
];

const CompanyStats = () => {
    return (
        <section className="py-16">
            <div className="md:max-w-7xl mx-auto px-4 md:px-0 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
                >
                    Our Achievements in Numbers
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
                        >
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className="text-4xl font-bold text-primary">
                                <CountUp end={item.end} duration={2.5} separator="," />
                            </h3>
                            <p className="mt-2 text-gray-600 font-medium">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompanyStats;
