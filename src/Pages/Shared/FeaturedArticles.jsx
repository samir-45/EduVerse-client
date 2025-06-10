import React, { use } from 'react';
import BlogCard from './BlogCard';

const FeaturedArticles = ({ articlesPromise }) => {

    const articles = use(articlesPromise);

    // 🗓 Get today's date and 10 days ago
    const now = new Date();
    const tenDaysAgo = new Date();
    tenDaysAgo.setDate(now.getDate() - 10);

    // 🔍 Filter, Sort & Slice
    const featuredArticles = articles
        .filter(article => new Date(article.date) >= tenDaysAgo)
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6); // Show only 6

    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl font-bold mb-5 signika-font'>Latest Blogs</h2>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
                    {
                        featuredArticles.map(article => <BlogCard key={article._id} article={article}></BlogCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default FeaturedArticles;