import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import Loading from '../Pages/Shared/Loading';

const LoadingRoute = ({children}) => {

    const {loading} = UseAuth();

        if(loading){
        return <Loading></Loading>
    }

    return children;
};

export default LoadingRoute;