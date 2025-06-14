import React from 'react';
import { useLoaderData } from 'react-router';
import BlogCard from '../Shared/BlogCard';
import CategoryBox from '../CategoryBox/CategoryBox';

const CategoryPage = () => {

    const articles = useLoaderData()

    return (
        <div>
            <div className='w-11/12 mx-auto'>
            <div>
                <CategoryBox></CategoryBox>
            </div>
                {/* <h2 className='text-3xl font-bold mb-5 signika-font'>All Articles</h2> */}
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 mt-5 grid-cols-1 gap-5 '>
                    {
                        articles.map(article => <BlogCard key={article._id} article={article}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;