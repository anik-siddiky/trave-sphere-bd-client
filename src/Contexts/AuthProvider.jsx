import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { useState } from 'react';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        loading,
        createUser,
    }

    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

        // <AuthContext value={authInfo}>
        //     {children}
        // </AuthContext>
    );
};

export default AuthProvider;