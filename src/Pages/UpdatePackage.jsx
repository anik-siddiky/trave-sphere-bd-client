import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading';
import axiosSecure from '../Hooks/useAxiosSecure';

const UpdatePackage = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/package/${id}`)
            .then(res => {
                setFormData(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [id])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value, }))
    }

    const handlePackageUpdate = (e) => {
        e.preventDefault();

        axiosSecure.put(`/package/${id}`, formData)
            .then((res) => {
                console.log(res.data);
                toast.success("Package updated successfully!");
                navigate('/manage-my-packages');
            })
            .catch(error => {
                console.log(error);
            })
    }

    if (!formData) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black py-10 px-4 md:px-8">
            <div className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-900 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-semibold text-[#2C3892] dark:text-white mb-6 text-center">Update Tour Package</h2>
                <form onSubmit={handlePackageUpdate} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="tourName"
                            placeholder="Tour Name"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.tourName}
                            onChange={handleChange}
                        />
                        <input
                            type="url"
                            name="image"
                            placeholder="Image URL"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.image}
                            onChange={handleChange}
                        />
                        <select
                            name="duration"
                            className="select select-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.duration}
                            onChange={handleChange}
                        >
                            <option value="">Select Duration</option>
                            <option value="2 Days 1 Night">2 Days 1 Night</option>
                            <option value="3 Days 2 Nights">3 Days 2 Nights</option>
                            <option value="4 Days 3 Nights">4 Days 3 Nights</option>
                            <option value="5 Days 4 Nights">5 Days 4 Nights</option>
                            <option value="6 Days 5 Nights">6 Days 5 Nights</option>
                            <option value="7 Days 6 Nights">7 Days 6 Nights</option>
                        </select>
                        <input
                            type="text"
                            name="departureLocation"
                            placeholder="Departure Location"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.departureLocation}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="destination"
                            placeholder="Destination"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.destination}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.price}
                            onChange={handleChange}
                        />
                        <input
                            type="date"
                            name="departureDate"
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.departureDate}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="contactNo"
                            placeholder="Contact No."
                            className="input input-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            value={formData?.contactNo}
                            onChange={handleChange}
                        />
                    </div>

                    <textarea
                        name="packageDetails"
                        placeholder="Package Details"
                        className="textarea textarea-bordered w-full bg-gray-100 text-black border-gray-300 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                        rows="4"
                        required
                        value={formData?.packageDetails}
                        onChange={handleChange}
                    />

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn bg-[#2C3892] text-white hover:bg-[#FA951E] mt-4 w-full md:w-auto shadow-none border-none rounded-none"
                        >
                            Update Package
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdatePackage;