import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from '../Components/Loading';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import axiosSecure from '../Hooks/useAxiosSecure';

const BookNow = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [specialNote, setSpecialNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.get(`/package/${id}`)
            .then(res => {
                setTour(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    const handleBooking = (e) => {
        e.preventDefault();

        if (user?.email === tour.guideEmail) {
            return toast.error("You cannot book your own package");
        }

        const bookingData = {
            tourId: id,
            tourName: tour.tourName,
            price: tour.price,
            buyerName: user.displayName,
            buyerEmail: user.email,
            bookingDate: new Date().toISOString(),
            specialNote,
            guideName: tour.guideName,
            guideEmail: tour.guideEmail,
            contactNo: tour.contactNo,
            departureDate: tour.departureDate,
            departureLocation: tour.departureLocation,
            destination: tour.destination,
            status: 'pending'
        };

        axiosSecure.post(`/bookings`, bookingData)
            .then(() => {
                toast.success("Booking successful!");
                navigate('/my-bookings');
            })
            .catch(error => {
                console.log(error);
            });
    };

    if (loading) {
        return <Loading />;
    }

    if (!tour) {
        return <p className="text-center py-20 text-xl text-gray-800 dark:text-white">Tour not found.</p>;
    }

    return (
        <div className='min-h-screen py-8 md:py-16 px-4 md:px-0'>
            <div className="max-w-xl mx-auto p-6 bg-gray-50 dark:bg-gray-900 shadow rounded">
                <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Book: {tour.tourName}</h2>
                <form onSubmit={handleBooking} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Tour Name</label>
                        <input
                            value={tour.tourName}
                            disabled
                            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Price</label>
                        <input
                            value={tour.price + ' Taka'}
                            disabled
                            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Your Name</label>
                        <input
                            value={user?.displayName}
                            disabled
                            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Email</label>
                        <input
                            value={user?.email}
                            disabled
                            className="w-full px-4 py-2 border rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 cursor-not-allowed"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300">Special Note</label>
                        <textarea
                            placeholder="Write your note here..."
                            className="textarea w-full  dark:bg-gray-800 bg-gray-100 text-black border-gray-300 dark:text-white dark:border-gray-600"
                            value={specialNote}
                            onChange={(e) => setSpecialNote(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn bg-[#2C3892] rounded-none shadow-none border-none text-white w-full ">
                        Confirm Booking
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookNow;
