import React from 'react';

const BlogCard = ({ article }) => {
  const { thumbnail, title, content, author_name, date } = article;

  return (
    <div className="bg-white dark:bg-zinc-900 shadow-md rounded-xl overflow-hidden border dark:border-zinc-800 transition hover:shadow-lg">
        <div className='hover:brightness-80 cursor-pointer'>
                  <img
        src={thumbnail}
        alt={title}
        className="w-full h-48 object-cover "
      />
        </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
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
