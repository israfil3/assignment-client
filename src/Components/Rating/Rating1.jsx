import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'

const Rating1 = () => {
    const [rating,setRating] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/rating`)
        .then(res=> res.json())
        .then(data => setRating(data))
    },[])
    return (
        <div className='my-10'>
        <h1 className='text-2xl text-center my-10'>College Review</h1>
        <div className='grid grid-cols-3 gap-5 w-[70%] mx-auto'>
            {
                rating.map(e => 
                    <div className="border p-10 mx-auto">
                       <h1 className='text-[20px] mb-5'>{e.college}</h1>
                       <h2 className='my-5'>{e.text}</h2>
                       <Rating style={{ maxWidth: 100 }}value={e.option}readOnly/>
                    </div>
                )
            }
        </div>
        </div>
    );
};

export default Rating1;