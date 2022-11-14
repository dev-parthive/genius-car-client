import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const PrivateRotue = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    

    if(loading){
        return <h1 className='text-5xl text-red-400'> Loding............</h1>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRotue;