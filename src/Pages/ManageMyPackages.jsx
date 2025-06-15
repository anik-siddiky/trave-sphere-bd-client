import { Suspense, useContext } from 'react';
import Loading from '../Components/Loading'
import MyPostedPackageList from '../Components/MyPostedPackageList';
import { AuthContext } from '../Contexts/AuthContext';

const ManageMyPackages = () => {
    const { user } = useContext(AuthContext)
    if (!user.email) {
        return <Loading></Loading>
    }
    return (
        <div>
            <MyPostedPackageList userEmail={user?.email}></MyPostedPackageList>
        </div>
    );
};

export default ManageMyPackages;