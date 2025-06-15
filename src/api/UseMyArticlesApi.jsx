import React from 'react';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';

const UseMyArticlesApi = () => {

    const axiosSecure = UseAxiosSecure();

    const articlesCreatedByPromise = (email) => {
        return axiosSecure.get(`/articles/myArticles/${email}`)
        .then(res => res.json())
    }

    return articlesCreatedByPromise;
};

export default UseMyArticlesApi;