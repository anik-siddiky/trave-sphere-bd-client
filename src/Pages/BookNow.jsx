import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Loading from '../Components/Loading';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const BookNow = () => {

    const { id } = useParams();
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [specialNote, setSpecialNote] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/package/${id}`)
            .then(res => {
                setTour(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [id])

    const handleBooking = (e) => {
        e.preventDefault();

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
        }

        if (user?.email === tour.guideEmail) {
            return toast.error("You cannot book your own package");
        }

        axios.post(`${import.meta.env.VITE_API_URL}/bookings`, bookingData)
            .then(() => {
                toast.success("Booking successful!");
                navigate('/my-bookings');
            })
            .catch(error => {
                console.log(error);
            })
    }

    if (loading) {
        return <Loading></Loading>
    }
    if (!tour) {
        <p className="text-center py-20 text-xl">Tour not found.</p>;
    }

    return (
        <div className='min-h-screen'>
            <div className="max-w-xl mx-auto my-16 p-6 bg-white shadow rounded">
                <h2 className="text-2xl font-bold mb-4">Book: {tour.tourName}</h2>
                <form onSubmit={handleBooking} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Tour Name</label>
                        <input value={tour.tourName} disabled className="input w-full" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Price</label>
                        <input value={tour.price + ' Taka'} disabled className="input w-full" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Your Name</label>
                        <input value={user?.displayName} disabled className="input w-full" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email</label>
                        <input value={user?.email} disabled className="input w-full" />
                    </div>
                    <div>
                        <label className="block text-gray-700">Special Note</label>
                        <textarea
                            placeholder="Write your note here..."
                            className="textarea w-full"
                            value={specialNote}
                            onChange={(e) => setSpecialNote(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn bg-primary text-white w-full">Confirm Booking</button>
                </form>
            </div>
        </div>
    );
};

export default BookNow;