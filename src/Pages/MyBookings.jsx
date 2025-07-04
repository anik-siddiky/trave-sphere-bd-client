import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axiosSecure from '../Hooks/useAxiosSecure';
import Loading from '../Components/Loading';

const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/bookings?email=${user.email}`)
                .then(res => {
                    setBookings(res.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                })
        }
    }, [user]);

    const handleConfirm = (id) => {
        axiosSecure.patch(`/bookings/${id}`, { status: 'completed' })
            .then(() => {
                setBookings(prev => prev.map(booking => booking._id === id ? { ...booking, status: 'completed' } : booking))
            });
    }

    if (loading) return <Loading></Loading>

    return (
        <div className='px-4 lg:px-0 max-w-7xl mx-auto py-12 min-h-screen'>
            <h2 className='text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center'>My Bookings</h2>

            {
                bookings.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
                            You have no bookings
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-6">
                            Looks like you haven't booked any tours yet.
                        </p>
                        <a
                            href="/all-packages"
                            className="bg-[#2C3892] text-white px-6 py-2 rounded hover:bg-[#FA951E] transition-all duration-300"
                        >
                            Book Now
                        </a>
                    </div>
                )

                    :
                    (<div className="overflow-x-auto rounded-lg shadow-md">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-100 dark:bg-gray-800">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Tour Name</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Booking Date</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Guide</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Contact</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Departure</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Destination</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Note</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 dark:text-gray-200 uppercase">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-black divide-y divide-gray-200 dark:divide-gray-700">
                                {bookings.map(booking => (
                                    <tr key={booking._id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{booking.tourName}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{new Date(booking.bookingDate).toLocaleString()}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{booking.guideName}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{booking.contactNo}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{booking.departureDate} ({booking.departureLocation})</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{booking.destination}</td>
                                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{booking.specialNote || '—'}</td>
                                        <td className="px-4 py-3">
                                            {
                                                booking.status === 'pending' ? (
                                                    <button
                                                        onClick={() => handleConfirm(booking._id)}
                                                        className="btn btn-sm bg-[#2C3892] text-white border-none rounded-none hover:bg-[#FA951E]"
                                                    >
                                                        Confirm
                                                    </button>
                                                ) : (
                                                    <span className="text-green-600 dark:text-green-400 font-bold">Completed</span>
                                                )
                                            }
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>)
            }

        </div>
    );
};

export default MyBookings;
