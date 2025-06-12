// components/Newsletter.jsx
// import { toast } from 'react-toastify';

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";

const Newsletter = () => {

    const {user} = UseAuth()

    const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(subscribed){
        return
    }
    setSubscribed(true)
    toast.success('Subscribed Successfully', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});
    
  };

  return (
    <section className="bg-gradient-to-r w-11/12 mx-auto bg-base-300 py-12 px-4 rounded-xl border dark:border-none border-gray-200 shadow-xl">
      <div className="w-11/12 mx-auto text-center">
        <div className="inline-block bg-blue-100 p-3 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-3">
          Never Miss an Update
        </h2>
        <p className="text-base-content mb-6 max-w-md mx-auto">
          Get the latest articles, study tips, and resources delivered to your inbox weekly.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            defaultValue={user.email}
            placeholder="Enter your email"
            className="flex-grow px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            required
          />
          <button
            type="submit"
            disabled={subscribed}
            className={`bg-blue-600 ${subscribed && 'cursor-not-allowed'} text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors `}
          >
            Subscribe
          </button>
        </form>
        
        <p className="text-xs  text-base-content mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Newsletter;