import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import { Navigate } from 'react-router';
import Loading from '../Pages/Shared/Loading';

const PrivetRoute = ({children}) => {

    const {user, loading} = UseAuth()

    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        <Navigate to='/auth/signIn'></Navigate>
    }

    return children
};

export default PrivetRoute;