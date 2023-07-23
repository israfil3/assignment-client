import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
    return (
        <>
            <div className="navbar bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-bar">
                        <Link className='btn btn-outline'>Home</Link>
                        <Link to={'college'} className='btn btn-outline btn-success'>Colleges</Link>
                        <Link to={'admission'} className='btn btn-outline btn-success'>Admission</Link>
                        <Link to={'myCollege'} className='btn btn-outline btn-success'>My College</Link>
                    </div>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1 nav-bar">
                        <Link  className='btn btn-outline btn-error'>Home</Link>
                        <Link to={'college'} className='btn btn-outline btn-success'>Colleges</Link>
                        <Link  to={'admission'} className='btn btn-outline btn-success'>Admission</Link>
                        <Link to={'myCollege'} className='btn btn-outline btn-success'>My College</Link>
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-success">Button</a>
                </div>
            </div>
        </>
    );
};

export default Home;