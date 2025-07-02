import React, { useCallback, useEffect, useRef, useState } from 'react';
import AllPackageCard from './AllPackageCard';
import Loading from '../Components/Loading'
import { debounce } from 'lodash';
import axiosSecure from '../Hooks/useAxiosSecure';

const AllPackages = () => {
    const [packageData, setPackageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [sortOrder, setSortOrder] = useState('default')
    const [sortLabel, setSortLabel] = useState('Sort Tour');
    const [originalData, setOriginalData] = useState([]);
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const fetchPackage = (search = '') => {
        setLoading(true);
        axiosSecure.get(`/package`, { params: { search } })
            .then(res => {
                setOriginalData(res.data);
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
        }, 10),
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

    const sortPackages = (sortOrder, dataToSort = packageData) => {
        if (sortOrder === 'lowToHigh') {
            const sorted = [...dataToSort].sort((a, b) => a.price - b.price);
            setPackageData(sorted);
        }
        else if (sortOrder === 'highToLow') {
            const sorted = [...dataToSort].sort((a, b) => b.price - a.price);
            setPackageData(sorted);
        }
        else {
            setPackageData(originalData);
        }
    }

    return (
        <div className="px-4 lg:px-0 lg:max-w-7xl mx-auto min-h-screen py-12">
            <div>
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
                    All Packages
                </h1>
                <div className='md:flex items-center md:justify-between mb-8'>
                    <div className="dropdown dropdown-start lg:mb-0 mb-3 ">
                        <div ref={dropdownRef} tabIndex={0} role="button" className="bg-[#2C3892] hover:bg-[#FA951E] text-white py-1.5 px-3 cursor-pointer text-sm font-medium">{sortLabel}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-box z-1 w-52 p-2 shadow-sm">

                            <li onClick={() => {
                                setSortOrder('default');
                                sortPackages('default');
                                setSortLabel('Sort Tour');
                                inputRef.current?.focus();
                            }} className='hover:bg-gray-300 dark:hover:bg-gray-700'><a>Default</a></li>

                            <li onClick={() => {
                                setSortOrder('highToLow');
                                sortPackages('highToLow');
                                setSortLabel('Price high to low');
                                inputRef.current?.focus();
                            }} className='hover:bg-gray-300 dark:hover:bg-gray-700'><a>Price high to low</a></li>

                            <li onClick={() => {
                                setSortOrder('lowToHigh');
                                sortPackages('lowToHigh');
                                setSortLabel('Price low to high');
                                inputRef.current?.focus();
                            }} className='hover:bg-gray-300 dark:hover:bg-gray-700'><a>Price low to high</a></li>

                        </ul>
                    </div>
                    <div className='flex gap-1'>
                        <input
                            ref={inputRef}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="text"
                            placeholder="Search Tour"
                            className="input input-bordered w-full max-w-xs 
               bg-white text-black 
               dark:bg-gray-800 dark:text-white 
               placeholder-gray-500 dark:placeholder-gray-400 
               border-gray-300 dark:border-gray-600"
                        />
                        <button onClick={handleSearch} className='btn bg-[#2C3892] hover:bg-[#FA951E] border-none rounded-none shadow-none text-white'>Search</button>
                    </div>
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