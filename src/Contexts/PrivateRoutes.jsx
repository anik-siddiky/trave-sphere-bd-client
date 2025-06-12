import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user.email) {
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoutes;