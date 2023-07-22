import React from 'react';
import { Link } from 'react-router-dom';

const MoreSubCollege = ({school}) => {
    console.log(school)
    const {admission_date,college_image,college_name,college_rating,events,research_projects,sports_facilities} = school;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure className="px-10 pt-10">
            <img src={college_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{college_name}</h2>
            <p>Rating: {college_rating}</p>
            <p>Admission Date: {admission_date}</p>
            <p>Number of research: {research_projects}</p>
            <div className="card-actions">
               <button className="btn btn-primary"><Link to={`/subCollege/${school?._id}`}>Details</Link></button>
            </div>
        </div>
        </div>
    );
};

export default MoreSubCollege;