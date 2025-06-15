import axios from 'axios';
import UseAuth from '../../Hooks/UseAuth';
import Lottie from 'lottie-react';
import articleLottie from "../../assets/lotties/article-lottie.json";
import Swal from 'sweetalert2';

const AddArticle = () => {

  const { user, signOutUser } = UseAuth();


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

    axios.post('http://localhost:3000/articles', data, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`
      }
    })
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Article added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(err => {
        if (err.status === 401) {
          signOutUser()
            .then(() => {
              console.log('Sign out user for 401 ststus code')
            })
            .catch(error => {
              console.log(error)
            })
        }
        console.error(err);
      });
  };

  return (
    <div className='flex items-center'>
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-base-content">
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
            className="w-full px-4 py-2  bg-base-300 rounded text-base-content"
          />

          <textarea
            name="content"
            placeholder="Write your article content here..."
            // value={formData.content}
            // onChange={handleChange}
            required
            rows={8}
            className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
          />


          <div className="form-control">
            <select
              name="category"
              // value={formData.category}
              // onChange={handleChange}
              defaultValue={""}
              className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
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
            required
            placeholder="Tags (comma-separated: React,JS,Learning)"
            // value={formData.tags}
            // onChange={handleChange}
            className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
          />

          <input
            type="text"
            name="thumbnail"
            placeholder="Thumbnail Image URL"
            required
            // value={formData.thumbnail}
            // onChange={handleChange}
            className="w-full px-4 py-2 bg-base-300 rounded text-base-content"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Publish Article
          </button>
        </form>
      </div>
      <div className='hidden md:block'>
        <Lottie animationData={articleLottie} loop={true}></Lottie>
      </div>
    </div>

  );
};

export default AddArticle;
