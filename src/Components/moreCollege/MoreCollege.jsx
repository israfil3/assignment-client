import React, { useEffect, useState } from 'react';
import MoreSubCollege from '../moreSubCollege/MoreSubCollege';

const MoreCollege = () => {
    const[college, setCollage] = useState([])
    useEffect(()=>{
        fetch(`https://myserver-israfil3.vercel.app/subCollege`)
        .then(res => res.json())
        .then(data => setCollage(data))
    },[])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:my-10'>
            {
                college.map(school => <MoreSubCollege key={school._id} school={school}>

                </MoreSubCollege> )
            }
        </div>
    );
};

export default MoreCollege;