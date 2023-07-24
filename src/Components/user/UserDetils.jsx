import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UserDetils = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="lg:w-[30%] border shadow-xl p-10 mx-auto lg:mt-[40px] lg:mb-[350px] rounded">
                <img className='my-5 rounded' src={user?.photoURL} alt="" />
                <h1>{user.displayName}</h1>
                <h2>{user.email}</h2>
                <h2>{user.emailVerified}</h2>
            </div>
        </div>
    );
};

export default UserDetils;