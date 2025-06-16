import React, { useCallback, useEffect, useState } from 'react';
import AllPackageCard from './AllPackageCard';
import Loading from '../Components/Loading'
import { debounce } from 'lodash';
import axiosSecure from '../Hooks/useAxiosSecure';

const AllPackages = () => {
    const [packageData, setPackageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchPackage = (search = '') => {
        setLoading(true);
        axiosSecure.get(`/package`, { params: { search } })
            .then(res => {
                setPackageData(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }

    const debounceFetch = useCallback(
        debounce((value) => {
            fetchPackage(value);
        }, 100),
        []
    );

    useEffect(() => {
        debounceFetch(searchTerm);
        if (searchTerm === '') {
            fetchPackage('');
        }
    }, [searchTerm, debounceFetch])

    useEffect(() => {
        fetchPackage();
    }, [])

    const handleSearch = () => {
        fetchPackage(searchTerm)
    }

    return (
        <div className="px-4 md:px-0 lg:max-w-7xl mx-auto min-h-screen py-12">
            <div>
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    All Packages
                </h1>
                <div className='flex justify-end mb-5'>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search by tour or destination"
                        className="input input-bordered w-full max-w-xs 
               bg-white text-black 
               dark:bg-gray-800 dark:text-white 
               placeholder-gray-500 dark:placeholder-gray-400 
               border-gray-300 dark:border-gray-600"
                    />
                    <button onClick={handleSearch} className='btn bg-[#2C3892] rounded-none shadow-none text-white'>Search</button>
                </div>
            </div>

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