import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [collageName, setCollageName] = useState([]);
            useEffect(()=> {
                fetch(`https://myserver-israfil3.vercel.app/subCollege`)
                .then(res => res.json())
                .then(data => setCollageName(data))
            } ,[])
            console.log(collageName)
    return (
        <div className='grid lg:grid-cols-2 lg:p-10 gap-7 border shadow-lg'>
            {
                collageName.map(e=> <h1 className='text-[20px] border'><Link to={`/collegeID/${e?._id}`}>{e.college_name}</Link></h1>
                    )
            }
        </div>
    );
};

export default Admission;