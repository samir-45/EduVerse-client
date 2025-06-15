import axios from 'axios';
import React, { use } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const ArticlesList = ({ articlesCreatedByPromise }) => {

    const articles = use(articlesCreatedByPromise);

    // console.log(articles)

    // Handle delete article function
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action will permanently delete the article.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/articles/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire('Error', 'Failed to delete article.', 'error');
                    });
            }
        });
    };


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
                                <th>Operation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                articles.map((article, index) =>
                                    <tr key={article._id}>
                                        <th>{index + 1}</th>
                                        <td>{article.title}</td>
                                        <td>{article.date}</td>
                                        <td className=''>{article.likes ? article.likes : 0}</td>
                                        <td className='min-w-24 flex gap-2'>
                                            <Link className='btn btn-xs btn-primary' to={`/articles/${article._id}`}>View Details</Link>
                                            <Link to={`/updateArticle/${article._id}`} className='btn btn-xs btn-warning'>Update</Link>
                                            <button
                                                className='btn btn-xs btn-error'
                                                onClick={() => handleDelete(article._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>


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