import React, { useEffect, useState } from 'react';
import SubCollage from '../sub/SubCollage';

const Collage = () => {
    const [collage, setCollage] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/college')
        .then(res => res.json())
        .then(data => setCollage(data))
    } ,[])

    return (
        <div className='grid grid-cols-3'>
            {
                collage.map(col => <SubCollage key={col._id} col={col}></SubCollage> )    
            }
        </div>
    );
};

export default Collage;