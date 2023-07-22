import React, { useEffect, useState } from 'react';
import MoreSubCollege from '../moreSubCollege/MoreSubCollege';

const MoreCollege = () => {
    const[college, setCollage] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/subCollege`)
        .then(res => res.json())
        .then(data => setCollage(data))
    },[])
    return (
        <div>
            {
                college.map(school => <MoreSubCollege key={school._id} school={school}>

                </MoreSubCollege> )
            }
        </div>
    );
};

export default MoreCollege;