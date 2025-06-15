import React from 'react';
import { useLoaderData } from 'react-router';
import BlogCard from '../Shared/BlogCard';
import CategoryBox from '../CategoryBox/CategoryBox';
// import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';
import Loading from '../Shared/Loading';

const Articles = () => {
    // const {setLoading, loading} = UseAuth()

    // const [articles, setArticles] = useState([])


    // axios.get('https://eduverse-server.vercel.app/articles')
    // .then(res => {
    //     setArticles(res.data)
        
    // })
    // .catch(error => {
    //     console.log(error)
    // })
    // console.log(articles)


    const articles = useLoaderData();
    console.log(articles)

    return (
        <div>
                        <div className='w-11/12 mx-auto'>
                        <div><CategoryBox></CategoryBox></div>
                <h2 className='text-3xl font-bold mb-5 signika-font'>All Articles</h2>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 '>
                    {
                        articles.map(article => <BlogCard key={article._id} article={article}></BlogCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Articles;