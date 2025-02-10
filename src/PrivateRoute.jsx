import React, { useContext } from 'react';
import { AuthContext } from './Authprovider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext (AuthContext)
    const location = useLocation()
    console.log("User in PrivateRoute:", user); // Check user value
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" />
};

export default PrivateRoute;