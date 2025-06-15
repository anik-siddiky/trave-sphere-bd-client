import React, { use } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router";

const MyPostedPackageList = ({ packageAddedByPromise }) => {
    const packages = use(packageAddedByPromise);

    return (
        <div className="overflow-x-auto px-4 md:px-0 md:max-w-7xl mx-auto min-h-screen">
            <h3 className="text-xl md:text-3xl font-semibold my-8 text-center text-primary">
                You have added {packages.length} packages
            </h3>

            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Tour Name</th>
                        <th>Departure</th>
                        <th>Destination</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg._id}>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={pkg.image} alt={pkg.tourName} />
                                    </div>
                                </div>
                            </td>
                            <td className="font-semibold">{pkg.tourName}</td>
                            <td>{pkg.departureLocation}</td>
                            <td>{pkg.destination}</td>
                            <td>{pkg.departureDate}</td>
                            <td>৳{pkg.price}</td>
                            <td>
                                <div className="flex gap-2">
                                    <Link to={`/update-package/${pkg._id}`}>
                                        <button className="btn btn-sm btn-ghost text-blue-600 hover:text-blue-800">
                                            <Pencil size={18} />
                                        </button>
                                    </Link>
                                    <button className="btn btn-sm btn-ghost text-red-600 hover:text-red-800">
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
