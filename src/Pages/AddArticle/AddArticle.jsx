import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';

const AddArticle = () => {

  const { user } = UseAuth();


  const handleSubmit = (e) => {
    e.preventDefault();


    const form = e.target;

    const formDataObj = new FormData(form);

    const data = Object.fromEntries(formDataObj.entries())

    data.tags = data.tags.split(',').map(tag => tag.trim())

    data.date = new Date().toISOString().slice(0, 10)

    data.author_name = user?.displayName;

    data.author_photo = user?.photoURL;

    data.author_email = user?.email;


    console.log(data)

    // Save job to the database

    axios.post('http://localhost:3000/articles', data)
      .then(res => {
        console.log(res.data);
        // if(res.data.insertedId){

        // }
      })
      .catch(err => {
        console.error(err);
      });
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
          // value={formData.title}
          // onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <textarea
          name="content"
          placeholder="Write your article content here..."
          // value={formData.content}
          // onChange={handleChange}
          required
          rows={8}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />


        <div className="form-control">
          <select
            name="category"
            // value={formData.category}
            // onChange={handleChange}
            className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
            required
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
          // value={formData.tags}
          // onChange={handleChange}
          className="w-full px-4 py-2 border rounded dark:bg-zinc-800 dark:text-white"
        />

        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail Image URL"
          // value={formData.thumbnail}
          // onChange={handleChange}
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
