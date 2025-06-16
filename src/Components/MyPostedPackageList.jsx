import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "./Loading";
import axiosSecure from '../Hooks/useAxiosSecure';

const MyPostedPackageList = ({ userEmail }) => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(`/guide-packages?email=${userEmail}`)
            .then(res => {
                setPackages(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch packages", err);
                setLoading(false);
            });
    }, [userEmail]);

    const handlePackageDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/package/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your package has been deleted.", "success");
                            setPackages(prev => prev.filter(pkg => pkg._id !== id));
                        }
                    });
            }
        });
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="overflow-x-auto px-4 md:px-0 md:max-w-7xl mx-auto min-h-screen">
            <h3 className="text-xl md:text-3xl font-semibold my-8 text-center text-[#2C3892] dark:text-white">
                You have added {packages.length} packages
            </h3>

            <table className="min-w-full table-auto rounded-md overflow-hidden shadow-md bg-white dark:bg-gray-950 text-sm text-left text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-800">
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm uppercase font-medium">
                    <tr>
                        <th className="px-4 py-3">Image</th>
                        <th className="px-4 py-3">Tour Name</th>
                        <th className="px-4 py-3">Departure</th>
                        <th className="px-4 py-3">Destination</th>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Bookings</th>
                        <th className="px-4 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg._id} className="border-t border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-4 py-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={pkg.image} alt={pkg.tourName} />
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-3 font-semibold">{pkg.tourName}</td>
                            <td className="px-4 py-3">{pkg.departureLocation}</td>
                            <td className="px-4 py-3">{pkg.destination}</td>
                            <td className="px-4 py-3">{pkg.departureDate}</td>
                            <td className="px-4 py-3">৳{pkg.price}</td>
                            <td className="px-4 py-3 text-center">{pkg.booking_count}</td>
                            <td className="px-4 py-3">
                                <div className="flex gap-2">
                                    <Link to={`/update-package/${pkg._id}`}>
                                        <button className="btn btn-sm btn-ghost text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                            <Pencil size={18} />
                                        </button>
                                    </Link>
                                    <button
                                        onClick={() => handlePackageDelete(pkg._id)}
                                        className="btn btn-sm btn-ghost text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyPostedPackageList;
