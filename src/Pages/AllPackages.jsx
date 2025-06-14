import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllPackageCard from './AllPackageCard';
import Loading from '../Components/Loading'

const AllPackages = () => {
    const [packageData, setPackageData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/package`)
            .then(res => {
                setPackageData(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    return (
        <div className="my-12 px-4 md:px-0 lg:max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-4">
                All Packages
            </h1>

            {
                loading ?
                    (<Loading></Loading>)
                    :
                    (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packageData.map(singlePackage => (
                            <AllPackageCard
                                singlePackage={singlePackage}
                                key={singlePackage._id}
                            />
                        ))}
                    </div>)
            }


        </div>
    );
};

export default AllPackages;