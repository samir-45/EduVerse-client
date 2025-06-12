import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router';
import 'aos/dist/aos.css';

const BlogCard = ({ article }) => {
  const { thumbnail, title, content, author_name, date, _id } = article;

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div data-aos="fade-up" className="bg-base-100  shadow-lg rounded-xl overflow-hidden  transition hover:shadow-xl">
      <div className='hover:brightness-80 cursor-pointer'>

        <Link to={`/articles/${_id}`}>
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover "
          />
        </Link>

      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-base-content mb-2">
          {title.length > 60 ? title.slice(0, 60) + '...' : title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
          {content.length > 120 ? content.slice(0, 120) + '...' : content}
        </p>
        <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
          <span>✍️ {author_name}</span>
          <span>📅 {new Date(date).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
