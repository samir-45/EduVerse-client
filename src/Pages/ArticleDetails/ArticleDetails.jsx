import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import { Heart, ThumbsUp } from 'lucide-react';

const ArticleDetails = () => {

  const navigate = useNavigate()

  const { user } = UseAuth()

  const article = useLoaderData();
  const {
    _id,
    title,
    content,
    thumbnail,
    author_name,
    author_photo,
    date,
    tags,
    likes,
    liked_users
  } = article;

  // ------------------------------------

  const [likeCount, setLikeCount] = useState(likes || 0);

  const [hasLiked, setHasLiked] = useState(liked_users?.includes(user?.email));

  const [fetchedComments, setFetchedComments] = useState([]);

  const [newComment, setNewComment] = useState('');

  // ------------------------------------

  // Fetch comments from DB
  axios.get(`http://localhost:3000/comments/${_id}`)
    .then(res => {
      setFetchedComments(res.data)
    })
    .catch(error => {
      console.log(error)
    })


  // ------------------------------------


  // 👍 Like handler
  const handleLike = () => {

    if (!user) {
      navigate('/auth/signIn')
      return
    }

    if (hasLiked) {
      return;
    }

    setHasLiked(true);
    setLikeCount(likeCount + 1);

    axios.patch(`http://localhost:3000/articles/${_id}`, {
      user_email: user?.email
    })
      .then(res => {
        if (res.data.modifiedCount) {
          console.log('Data updated successfully')
        }
      })
      .catch(error => {
        if (error.response?.status === 400) {
          alert('You already liked this!');
        } else {
          console.log(error);
        }
      })
  };

  // ------------------------------------

  // 💬 Comment handler
  const handleComment = (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/auth/signIn')
      return
    }

    if (!newComment.trim()) return;

    const comment = {
      article_id: _id,
      user_name: user?.displayName,
      user_photo: user?.photoURL,
      user_email: user?.email,
      comment: newComment,
    };


    // Post comment data to the database
    axios.post('http://localhost:3000/comments', comment)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })

  };

  // ------------------------------------

  return (
    <section className="w-11/12 max-w-5xl mx-auto py-10text-base-content">
      {/* Banner Image */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full max-h-[500px] object-cover rounded-lg shadow mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>

      {/* Author Info */}
      <div className="flex items-center gap-3 text-sm text-zinc-500 mb-6">
        <img
          src={author_photo}
          alt={author_name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{author_name}</p>
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Content */}
      <article className="prose dark:prose-invert max-w-none prose-lg mb-10">
        <p>{content}</p>
      </article>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags?.map((tag, key) => (
          <span
            key={key}
            className="px-3 py-1 bg-base-300  text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Like Button */}
      <div className="mb-8">
        <button
          onClick={handleLike}
          disabled={hasLiked}
          className={`flex items-center gap-2 px-4 py-2 rounded transition border ${hasLiked
              ? 'bg-blue-600 text-white border-blue-600 cursor-not-allowed'
              : 'bg-base-300 dark:invert text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
        >
          <ThumbsUp 
                      size={20}
            fill={hasLiked ? 'currentColor' : 'none'}
            className="transition"
          />
          {/* <Heart

          /> */}
          Like ({likeCount})
        </button>
      </div>

      {/* Comments */}
      <div className="border-t pt-6 dark:border-zinc-600">
        <h3 className="text-xl font-bold mb-4">Comments ({fetchedComments.length})</h3>

        {/* Add Comment */}
        <form onSubmit={handleComment} className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-base-300 text-base-content"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Post
          </button>
        </form>

        {/* All Comments */}
        <div className="space-y-4">
          {fetchedComments.map((ccomment, key) => (
            <div
              key={key}
              className="bg-base-300 shadow-xl p-3 rounded-md text-sm"
            >
              <div className="flex items-center gap-2 mb-1">
                <img
                  src={ccomment.user_photo}
                  alt={ccomment.user_name}
                  className="w-6 h-6 rounded-full"
                />
                <p className="font-semibold">{ccomment.user_name}</p>
              </div>
              <p>{ccomment.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticleDetails;
