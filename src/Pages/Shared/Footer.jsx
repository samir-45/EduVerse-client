import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import logoWt from '../../assets/logo-wt.png'
import { Link } from 'react-router';

const Footer = () => {

  const {theme} = UseAuth()

  return (
    <div>
      <footer className="footer sm:footer-horizontal mt-10 bg-base-200 text-base-content p-10">
        <div>
          <div className='flex items-center'>
                      <div>
            {
              theme ? <img className='w-12' src={logoWt} alt="" /> : <img className='w-12 invert' src={logoWt} alt="" />
            }
          </div>
          <h1 className='font-bold signika-font text-2xl pt-1'>EduVerse</h1>
          </div>
          <p>
            Providing tech Blogs since 1992
          </p>
        </div>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to='/aboutUs' className="link link-hover">About us</Link>
          <Link to='/articles' className="link link-hover">Articles</Link>
          <Link to='/myArticles' className="link link-hover">My Articles</Link>
          <Link to='/addArticle' className="link link-hover">Post Articles</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link target="_blank" to={'https://x.com/'}>
<svg width="24" height="24" viewBox="0 0 1200 1227" className="fill-current" xmlns="http://www.w3.org/2000/svg">
  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
</svg>
            </Link>
            <Link target="_blank" to={'https://www.youtube.com/'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link target="_blank" to={'https://www.facebook.com/'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content items-center p-4">

        <p className='text-center mx-auto'>Copyright © {new Date().getFullYear()} - All right reserved</p>

      </footer>
    </div>
  );
};

export default Footer;