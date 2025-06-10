import React, { useState } from 'react';
import { NavLink } from 'react-router';
import logoWt from '../../assets/logo-wt.png'
import UseAuth from '../../Hooks/UseAuth';

const NavBar = () => {

  const {signOutUser, user} = UseAuth()

  const links = <>
    <div className='space-x-3 flex signika-font text-lg'>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/articles'>All Articles</NavLink></li>
      <li><NavLink to='/'>About Us</NavLink></li>
    </div>
  </>

  const [logo, setLogo] = useState(true);

  const handleSignOut = () => {
    signOutUser()
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  return (
    <div>
      <div className="navbar w-11/12 mx-auto h-14 rounded-full my-5 bg-base-100 shadow-md">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              {
                logo ? <img className='w-12' src={logoWt} alt="" /> : <img className='w-12 invert' src={logoWt} alt="" />
              }
            </div>
                        <h1 className='font-bold signika-font text-2xl pt-1'>EduVerse</h1>
          </div>

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end space-x-2">


              {
                user ?           <div className='dropdown dropdown-bottom'>
            <div tabIndex={0} role="button" className='h-14 cursor-pointer border flex p-1 rounded-lg items-center gap-2 border-dashed'>
              {/* Avatar */}
              <div>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={`${user.photoURL? user.photoURL : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}`} />
                  </div>
                </div>
              </div>
              {/* Info */}
              <div>
                <h2 className='font-bold signika-font text-lg'>{user.displayName? user.displayName : 'User'}</h2>
                <h3 className='text-sm playfair-font'>{user.email}</h3>
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content signika-font menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              <li><NavLink to='/'>My Articles</NavLink></li>
              <li><NavLink to='/'>Post Articles</NavLink></li>
              <li><NavLink onClick={handleSignOut} to='/'>Log Out</NavLink></li>
            </ul>
          </div>  : <NavLink className="btn rounded-full " to='/auth/signIn'>SignIn</NavLink>
              }
          {/* User Info */}




          {/* <NavLink className="btn rounded-full " to='/auth/signIn'>SignIn</NavLink> */}
          {/* <NavLink className="btn rounded-full " to='/auth/register'>Register</NavLink> */}


          {/* Theme toggle */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input onClick={() => setLogo(!logo)} type="checkbox" className="theme-controller" value="light" />

            {/* sun icon */}
            <svg
              className="swap-off h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-10 w-10 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;