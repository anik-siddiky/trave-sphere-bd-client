import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import axiosSecure from '../Hooks/useAxiosSecure';

const MyBookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/bookings?email=${user.email}`)
                .then(res => {
                    setBookings(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }, [user])

    const handleConfirm = (id) => {
        axiosSecure.patch(`/bookings/${id}`, { status: 'completed' })
            .then(() => {
                setBookings(prev => prev.map(booking => booking._id === id ? { ...booking, status: 'completed' } : booking))
            })
    }

    return (
        <div className='max-w-7xl mx-auto py-12 min-h-screen'>
            <h2 className='text-3xl font-bold mb-6'>My Bookings</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Tour Name</th>
                            <th>Booking Date</th>
                            <th>Guide</th>
                            <th>Contact</th>
                            <th>Departure</th>
                            <th>Destination</th>
                            <th>Note</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map(booking => (
                            <tr key={booking._id}>
                                <td>{booking.tourName}</td>
                                <td>{new Date(booking.bookingDate).toLocaleString()}</td>
                                <td>{booking.guideName}</td>
                                <td>{booking.contactNo}</td>
                                <td>{booking.departureDate} ({booking.departureLocation})</td>
                                <td>{booking.destination}</td>
                                <td>{booking.specialNote || '—'}</td>
                                <td>
                                    {
                                        booking.status === 'pending' ?
                                            <button onClick={() => handleConfirm(booking._id)} className="btn btn-sm btn-success bg-primary text-white border-none shadow-none rounded-none">Confirm</button>
                                            :
                                            <span className="text-green-600 font-bold">Completed</span>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;