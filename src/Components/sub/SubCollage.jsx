import React from 'react';
import './sub.css'
import { Link } from 'react-router-dom';

const SubCollage = ({col}) => {
    const {college_name,image_url,admission_dates,events,research_history,sports, _id} = col
    console.log(col)
    const handleSubmit = (event) => {
        console.log(event)
    }
    return (

        <>
                <div className="card  w-96 glass mx-auto shadow-lg">
                <figure> <img  src={image_url} alt="Shoes" className="rounded-xl w-96 h-72" /></figure>
                <div className='card-body'>
                <h2 className="card-title">Name:{college_name}</h2>
                        <p>Admission Dates: {admission_dates}</p>
                        <h1 className='text-[18px]'>event name and date</h1>
                        <hr  className='border-red-400 border-2  w-20'/>
                        {
                            events.map(e => 
                                <div className="grid grid-cols-2">
                                    <div className="">
                                    <h1>{e.event_name}:</h1>
                                    </div>
                                    <div className="">
                                        {e.event_date}
                                    </div>
                                </div>
                            )
                        }
                        <h1>{research_history}</h1>
                        <h1 className='bold'>Sports</h1>
                        <hr  className='border-red-400 border-2 w-20'/>
                        {
                            sports.map(e => <div>
                                <h1>{e.sport_name}</h1> 
                            </div>
                                )
                        }
                <div className="card-actions justify-center">
                    <Link to={`/details/${col?._id}`} className="btn btn-outline btn-secondary">Details</Link>
                </div>
                </div>
                </div> 
        
        
        
        
        
        
        
        
        
        
        </>

    );
};

export default SubCollage;





{/* <div className="card w-96 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">
<img src={image_url} alt="Shoes" className="rounded-xl" />
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Name:{college_name}</h2>
<p>Admission Dates: {admission_dates}</p>
<h1 className='text-2xl'>event name and date</h1>
{
    events.map(e => 
        <div className="flex gap-2">
            <div className="">
            <h1>{e.event_name}:</h1>
            </div>
            <div className="">
                {e.event_date}
            </div>
        </div>
    )
}
<h1>{research_history}</h1>
<div className="card-actions">
    <button className="btn btn-primary">Buy Now</button>
</div>
</div>
</div> */}



