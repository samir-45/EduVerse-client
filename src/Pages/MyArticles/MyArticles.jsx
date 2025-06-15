import React, { Suspense } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Loading from '../Shared/Loading';
import ArticlesList from '../ArticlesList/ArticlesList';
import { articlesCreatedByPromise } from '../../api/ArticlesApi';

const MyArticles = () => {

    const { user } = UseAuth()
    // console.log(user.accessToken)

    return (
        <div>
            
            <Suspense fallback={<Loading></Loading>}>
                <ArticlesList articlesCreatedByPromise={articlesCreatedByPromise(user?.email)}></ArticlesList>
            </Suspense>
        </div>
    );
};

export default MyArticles;