import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

const TrendingTags = () => {
  const [tags, setTags] = useState([]);



    useEffect(() => {
  axios.get('http://localhost:3000/articles/tags')
  .then(res => {
    setTags(res.data)
  })
  .catch(error => {
    console.log(error)
  })
  }, []);

  return (
    <section className="w-11/12 mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 signika-font text-base-content">
        🔥 Trending Tags
      </h2>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <Link
            key={i}
            to={`/`}
            className="px-4 py-1 rounded-full text-sm bg-base-300 text-base-content hover:bg-blue-600 hover:text-white transition"
          >
            #{tag}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingTags;
