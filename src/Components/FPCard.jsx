import React from 'react';
import { Link } from 'react-router';

const FPCard = ({ fPackage }) => {

    const { image, tourName, duration, price, departureDate, guideName, guidePhoto, _id } = fPackage;

    return (
        <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={tourName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{tourName}</h3>

                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-gray-600">
                        <i className="far fa-clock mr-1"></i> {duration}
                    </span>
                    <span className="text-lg font-bold text-secondary">
                        ৳{price} <span className="text-sm font-normal">/person</span>
                    </span>
                </div>

                <div className="text-sm text-gray-500 mb-4">
                    <i className="far fa-calendar-alt mr-1"></i> Departs: {departureDate}
                </div>

                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg mb-4 transition-all duration-300 group-hover:bg-amber-100">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
                        <img
                            src={guidePhoto}
                            alt={guideName}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Your Guide</p>
                        <p className="font-medium text-gray-700">{guideName}</p>
                    </div>
                </div>

                <Link
                    to={`/package-details/${fPackage._id}`}
                    className="block w-full py-2 text-center bg-primary text-white font-medium rounded-none transition-all duration-300 hover:shadow-lg hover:from-amber-500 hover:to-amber-700"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default FPCard;