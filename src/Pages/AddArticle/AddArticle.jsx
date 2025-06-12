import { useState } from 'react';
// import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';

const AddArticle = () => {

    const {user} = UseAuth();

    const {displayName, photoURL, email} = user;

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    tags: '',
    thumbnail: '',
  });

//   const user = {
//     displayName: 'Mahin',
//     photoURL: 'https://i.pravatar.cc/150?img=5',
//     email: 'mahin.dev@gmail.com',
//   };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const article = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()),
      author_name: displayName,
      author_photo: photoURL,
      author_email: email,
      date: new Date().toISOString().slice(0, 10), // "2025-06-13"
      likes: 0,
      liked_users: [],
    };

    console.log(article)

    // axios.post('http://localhost:3000/articles', article)
    //   .then(res => {
    //     console.log(res.data);
    //     alert('Article added successfully!');
    //   })
    //   .catch(err => {
    //     console.error(err);
    //     alert('Failed to add article.');
    //   });
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-white">
        ✍️ Add New Article
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Article Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <textarea
          name="content"
          placeholder="Write your article content here..."
          value={formData.content}
          onChange={handleChange}
          required
          rows={8}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Web Development)"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma-separated: React,JS,Learning)"
          value={formData.tags}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          value={formData.thumbnail}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Publish Article
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
