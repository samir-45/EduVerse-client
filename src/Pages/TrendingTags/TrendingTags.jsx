import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

const TrendingTags = () => {
  const [tags, setTags] = useState([]);




  axios.get('https://eduverse-server.vercel.app/articles/tags')
    .then(res => {
      setTags(res.data)
    })
    .catch(error => {
      console.log(error)
    })


  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section data-aos="fade-up" className="w-11/12 mx-auto py-8">
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
