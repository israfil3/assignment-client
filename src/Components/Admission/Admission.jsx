import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admission = () => {
    const [collageName, setCollageName] = useState([]);
            useEffect(()=> {
                fetch(`http://localhost:5000/subCollege`)
                .then(res => res.json())
                .then(data => setCollageName(data))
            } ,[])
            console.log(collageName)
    return (
        <div className='grid grid-cols-2 p-10 gap-7'>
            {
                collageName.map(e=> <h1 className='text-[20px] border'><Link to={`/collegeID/${e?._id}`}>{e.college_name}</Link></h1>
                    )
            }
        </div>
    );
};

export default Admission;