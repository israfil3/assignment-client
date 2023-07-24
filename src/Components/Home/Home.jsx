import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import logo from './My project (7).png'
import { AuthContext } from '../Provider/AuthProvider';

const Home = () => {
    const {user, singOutMethod} = useContext(AuthContext);
    const logOutMethod = () => {
        singOutMethod()
            .then((result) => {
                console.log(result)
              }).catch((error) => {
                console.log(error)
              });
    }
    console.log(user)
    return (
        <>
            <div className="navbar bg-slate-200">
                <div className="navbar-start lg:px-10">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 nav-bar">
                        <Link className='btn btn-outline'>Home</Link>
                        <Link to={'college'} className='btn btn-outline btn-success'>Colleges</Link>
                        <Link to={'admission'} className='btn btn-outline btn-success'>Admission</Link>
                        <Link to={'myCollege'} className='btn btn-outline btn-success'>My College</Link>
                        <Link to={'*'}></Link>
                    </div>
                    </div>
                    <a className=""> <img className='w-32' src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <div className="menu menu-horizontal px-1 nav-bar">
                        <Link  className='btn btn-outline btn-error'>Home</Link>
                        <Link to={'college'} className='btn btn-outline btn-success'>Colleges</Link>
                        <Link  to={'admission'} className='btn btn-outline btn-success'>Admission</Link>
                        <Link to={'myCollege'} className='btn btn-outline btn-success'>My College</Link>
                        <Link to={'*'}></Link>
                    </div>
                </div>
                
                    <p> <Link to={'userD'}>{user?user.displayName:''}</Link> </p>

                <div className="navbar-end px-10">
                   {
                    user?<Link onClick={logOutMethod} className="btn btn-outline btn-success">Log out</Link>:
                    <Link to={'sing'} className="btn btn-outline btn-success">Sing Up</Link>
                   }
                </div>
            </div>
        </>
    );
};

export default Home;