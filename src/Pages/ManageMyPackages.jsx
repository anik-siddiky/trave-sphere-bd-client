import { Suspense, useContext } from 'react';
import Loading from '../Components/Loading'
import MyPostedPackageList from '../Components/MyPostedPackageList';
import { packageAddedByPromise } from '../API/PackageAPI';
import { AuthContext } from '../Contexts/AuthContext';

const ManageMyPackages = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <MyPostedPackageList packageAddedByPromise={packageAddedByPromise(user.email  )}></MyPostedPackageList>
            </Suspense>
        </div>
    );
};

export default ManageMyPackages;