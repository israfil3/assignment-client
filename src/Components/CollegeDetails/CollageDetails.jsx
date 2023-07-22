import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CollageDetails = () => {
    const prams = useParams();
    const collageD = useLoaderData()
    const {admission_dates,admission_process,college_name,events,image_url,research_history,sports} = collageD;
    console.log(collageD) 
    return (
        <div className='w-[70%] mx-auto my-10'>
            <div className="">
                <div className="text-center">
                    <h1 className='text-2xl my-7'>{college_name}</h1>
                    <hr className='border-4 mb-10 w-32 mx-auto border-green-600'></hr>
                    <img className='w-[700px] mx-auto rounded' src={image_url} alt="img" />
                </div>
                <h1 className='my-7'> <span className='text-[20px]'>Admission process:</span> {admission_process}</h1>       
                    {
                            events.map(e=> <div>
                                <p> <span className='text-[20px]'>Event description: </span> {e.event_description}</p>
                            </div> )
                        }
                <p className='my-7'><span className='text-[20px]'>Research History: </span>{research_history}</p>
                {
                    sports.map(e=> 
                        <div className="grid grid-cols-3 gap-2">
                            <p>Name: {e.sport_name}</p>
                            <p>Season: {e.season}</p>
                            <p>Team: {e.team_description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default CollageDetails;