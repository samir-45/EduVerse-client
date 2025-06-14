import React from 'react';
import Lottie from 'lottie-react';
import articleLottie from "../../assets/lotties/article-lottie.json";
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateArticle = () => {

    const article = useLoaderData()
    // console.log(article)

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const formDataObj = new FormData(form);

        const data = Object.fromEntries(formDataObj.entries())

        data.tags = data.tags.split(',').map(tag => tag.trim())

        // NOw update data to the database
        axios.put(`http://localhost:3000/articles/${article._id}`, data)
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Article updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className='flex items-center'>
                <div className="max-w-3xl mx-auto py-12 px-4">
                    <h2 className="text-3xl font-bold mb-6 text-base-content">
                        🛠️ Update Article
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <input
                            type="text"
                            name="title"
                            placeholder="Article Title"
                            defaultValue={article?.title}
                            // value={formData.title}
                            // onChange={handleChange}
                            className="w-full px-4 py-2  bg-base-300 rounded text-base-content"
                        />

                        <textarea
                            name="content"
                            placeholder="Write your article content here..."
                            defaultValue={article?.content}
                            // value={formData.content}
                            // onChange={handleChange}
                            rows={8}
                            className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
                        />


                        <div className="form-control">
                            <select
                                name="category"
                                defaultValue={article?.category}
                                // value={formData.category}
                                // onChange={handleChange}
                                className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
                            >
                                <option value="" disabled>Select Category</option>
                                <option value="Technology">Technology</option>
                                <option value="Programming">Programming</option>
                                <option value="Education">Education</option>
                                <option value="Design">Design</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Self Improvement">Self Improvement</option>
                                <option value="Tools">Tools</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags (comma-separated: React,JS,Learning)"
                            defaultValue={article?.tags}
                            // value={formData.tags}
                            // onChange={handleChange}
                            className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
                        />

                        <input
                            type="text"
                            name="thumbnail"
                            placeholder="Thumbnail Image URL"
                            defaultValue={article?.thumbnail}
                            // value={formData.thumbnail}
                            // onChange={handleChange}
                            className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
                        />

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Update Article
                        </button>
                    </form>
                </div>
                <div className='hidden md:block'>
                    <Lottie animationData={articleLottie} loop={true}></Lottie>
                </div>
            </div>
        </div>
    );
};

export default UpdateArticle;