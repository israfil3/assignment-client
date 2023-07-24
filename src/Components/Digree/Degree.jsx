import React from 'react';
import './degree.css'
import logo from './alumni-search.png'
import logo2 from './graduation.png'
import logo3 from './library.png'
import logo4 from './scholar.png'
const Degree = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-auto lg:w-[80%] lg:my-10'>
            <div className="border p-10 text-center rounded k">
                <img className='mx-auto' src={logo2} alt="" />
               <h1 className='text-[20px] my-3'>Degree Program</h1>
               <p>Join a community of the world’s brightest minds and prepared.</p>
            </div>
            <div className="border p-10 text-center rounded k">
               <img className='mx-auto' src={logo} alt="" />
               <h1 className='text-[20px] my-3'>Alumni</h1>
               <p>Our alumni is our strength</p>
            </div>
            <div className="border p-10 text-center rounded k">
               <img className='mx-auto' src={logo3} alt="" />
               <h1 className='text-[20px] my-3'>Student's Welfare</h1>
               <p>Department of Student's Welfare.</p>
            </div>
            <div className="border p-10 text-center rounded k">
               <img className='mx-auto' src={logo4} alt="" />
               <h1 className='text-[20px] my-3'>Scholarship</h1>
               <p>Scholarships & Financial Aid.</p>
            </div>
           
        </div>
    );
};

export default Degree;