import React, { Suspense } from 'react';
import Banner from '../Shared/Banner';
import FeaturedArticles from '../Shared/FeaturedArticles';
import Loading from '../Shared/Loading'
import CategoryBox from '../CategoryBox/CategoryBox';
import TrendingTags from '../TrendingTags/TrendingTags';
import Newsletter from '../NewsLetter/Newsletter';

    const articlesPromise = fetch('https://eduverse-server.vercel.app/articles').then(res => res.json())

const Home = () => {

    return (
        <div className=''>
            <div>
                <Banner></Banner>
            </div>
            <div className='mt-10'>
                <div className='w-11/12 mx-auto'>
                    <CategoryBox></CategoryBox>
                </div>
                <Suspense fallback={<Loading></Loading>}>
                    <FeaturedArticles articlesPromise={articlesPromise}></FeaturedArticles>
                </Suspense>
                
            </div>
            <div>
                <Suspense fallback={<Loading></Loading>}>
                    <TrendingTags></TrendingTags>
                </Suspense> 
            </div>
            <div>
                <Newsletter></Newsletter>
            </div>
            
        </div>
    );
};

export default Home;