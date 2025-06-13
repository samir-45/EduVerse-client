import React, { use } from 'react';
import { Link } from 'react-router';

const ArticlesList = ({articlesCreatedByPromise}) => {

    const articles = use(articlesCreatedByPromise);


    return (
        <div>
                        <div className='w-11/12 mx-auto py-5'>
                        <h2 className='text-3xl font-bold mb-5 text-center signika-font'>✍️My Articles</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Article Title</th>
                                <th>Published Date</th>
                                <th className=''>Likes Count</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                articles.map((article, index) =>
                                    <tr  key={article._id}>
                                        <th>{index + 1}</th>
                                        <td>{article.title}</td>
                                        <td>{article.date}</td>                                      
                                        <td className=''>{article.likes? article.likes:0}</td>
                                        <td className='btn min-w-24 btn-xs my-5'><Link to={`/articles/${article._id}`}>View Details</Link></td>
                                        
                                        
                                    </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ArticlesList;