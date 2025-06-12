import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

const CategoryBox = () => {

  const allTags = ['Technology', 'Programming', 'Education', 'Design', 'Web Development', 'Self Improvement', 'Tools'];


  const [visibleTags, setVisibleTags] = useState(allTags.slice(0, 5));
  const [isExpanded, setIsExpanded] = useState(false);

  const handleShowMore = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      setVisibleTags(allTags);
    } else {
      setVisibleTags(allTags.slice(0, 5));
    }
  };


    return (
        <div>
            <h2 className='text-2xl font-bold signika-font'># All Categories</h2>
    <div className="flex justify-center items-center font-sans p-4">
      <div className="w-full shadow-xl max-w-4xl bg-base-300 p-3 lg:rounded-full rounded-2xl flex items-center space-x-2 ">

        <div className="flex-grow flex flex-wrap items-center gap-2 ">
          {visibleTags.map((tag) => (
            <button
              key={tag}
              className="btn btn-sm btn-ghost rounded-full text-base-content font-medium bg-base-100 hover:bg-base-200 h-9 px-4 inline-flex"
            >
                <Link to={`/category/${tag}`}>{tag}</Link>
              
            </button>
          ))}
        </div>

        {/* Show More Button */}
        {allTags.length > 6 && (
           <button
            onClick={handleShowMore}
            className="btn btn-sm btn-ghost rounded-full text-base-content font-semibold bg-base-100 hover:bg-base-200 h-9 px-5 flex-shrink-0"
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <ChevronDown className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>
    </div>
        </div>
    );
};

export default CategoryBox;