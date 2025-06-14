import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Loading from '../Components/Loading';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaMoneyBillWave, FaStar } from 'react-icons/fa';

const PackageDetails = () => {
    const { id } = useParams();
    const [packageData, setPackageData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/package/${id}`)
            .then(res => {
                setPackageData(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [id])

    if (loading) {
        return <Loading></Loading>
    }
    if (!packageData) {
        return <p className="text-center py-20 text-xl">Package not found.</p>;
    }

    const { image, tourName, price, departureDate, departureLocation, destination, duration, packageDetails, guidePhoto, guideName, contactNo, guideEmail } = packageData;



    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0 py-12">
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-12">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                <img
                    src={image}
                    alt={tourName}
                    className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 z-20 p-8 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{tourName}</h1>
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-amber-400" />
                            {destination}
                        </span>
                        <span className="flex items-center">
                            <FaStar className="mr-2 text-amber-400" />
                            5.0 (24 Reviews)
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7">
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tour Highlights</h2>
                        <div className="grid grid-cols-1 gap-4">
                            {packageDetails.split('.').filter(point => point.trim() !== '').map((point, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                                        <FaStar className="text-primary text-sm" />
                                    </div>
                                    <p className="text-gray-700">{point.trim()}.</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="lg:col-span-5">
                    <div className="sticky top-8 bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-primary p-6 text-white text-center">
                            <p className="text-2xl font-bold">{price} Taka</p>
                            <p className="text-sm">per person</p>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center">
                                    <FaCalendarAlt className="text-primary mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Departure Date</p>
                                        <p className="font-medium">{departureDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaClock className="text-primary mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Duration</p>
                                        <p className="font-medium">{duration}</p>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <FaMapMarkerAlt className="text-primary mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Departure From</p>
                                        <p className="font-medium">{departureLocation}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <h3 className="font-semibold text-gray-800 mb-3">Your Guide</h3>
                                <div className="flex items-center">
                                    <img
                                        src={guidePhoto}
                                        alt={guideName}
                                        className="w-12 h-12 rounded-full object-cover border-2 border-primary mr-3"
                                    />
                                    <div>
                                        <p className="font-medium text-gray-800">{guideName}</p>
                                        <div className="flex items-center text-sm text-gray-500 mt-1">
                                            <FaPhoneAlt className="mr-1" />
                                            <span className="mr-3">{contactNo}</span>
                                            <FaEnvelope className="mr-1" />
                                            <span>{guideEmail}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white py-3 rounded-none font-bold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Traveler Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            name: "Ayesha Rahman",
                            review: "Absolutely loved the entire experience! The guide was knowledgeable, and everything was well-organized. Highly recommend for nature lovers.",
                        },
                        {
                            name: "Tanvir Hossain",
                            review: "The trip exceeded my expectations. From the accommodation to the food and sights – everything was top-notch. Will definitely book again!",
                        },
                        {
                            name: "Farzana Kabir",
                            review: "This was one of the best vacations I’ve had in Bangladesh. The views were breathtaking and the hospitality was amazing.",
                        },
                        {
                            name: "Mahmudul Hasan",
                            review: "Well-curated tour with a perfect balance of adventure and relaxation. The waterfall trek was a highlight for me. Great value for money!",
                        },
                    ].map((reviewData, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    src="https://img.icons8.com/?size=512w&id=7819&format=png"
                                    alt="Reviewer"
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <p className="font-semibold">{reviewData.name}</p>
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">
                                "{reviewData.review}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PackageDetails;