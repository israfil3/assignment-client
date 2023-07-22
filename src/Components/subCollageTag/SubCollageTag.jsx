import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SubCollageTag = () => {
    const subTag = useLoaderData();
    const {admission_date,college_image,college_name,college_rating,events,research_projects,sports_facilities} = subTag
    console.log(subTag)
    return (
        <div className='mx-auto w-[70%] border text-center my-10'>
           <div className="">
                <div className="">
                    <img className='w-[500px] mx-auto' src={college_image} alt="" />
                    <h2 className="text-center text-2xl">{college_name}</h2>
                    <p>Rating: {college_rating}</p>
                    <p>Admission Date: {admission_date}</p>
                    <p>Number of research: {research_projects}</p>
                </div>
                <div className="grid grid-cols-2 mx-auto">
                    <div className="">
                    <h2 className='text-[20px]'>Events</h2>
                        {
                            events.map(e => <div className="">
                                <li>{e}</li>
                            </div>)
                        }

               </div>
               <div className="">
                <h1 className='text-[20px]'>Sports</h1>
                    {
                        sports_facilities.map(e => <div className="">
                            <li>{e}</li>
                        </div>
                            )
                    }  
               </div>
                    </div>
           </div>
        </div>
    );
};

export default SubCollageTag;