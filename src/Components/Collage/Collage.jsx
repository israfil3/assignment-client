import React, { useEffect, useState } from 'react';
import SubCollage from '../sub/SubCollage';

const Collage = () => {
    const [collage, setCollage] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(()=>{
        fetch('https://myserver-israfil3.vercel.app/college')
        .then(res => res.json())
        .then(data => setCollage(data))
    } ,[])

    return (
      <>
       <div className='text-center my-10'>
            <input onChange={(e)=>setSearch(e.target.value)} className='py-3 px-16 w-96 mx-auto rounded border'  type="search" name="search" id="search" placeholder='Search  your college'/>
        </div>
              <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2'>
            {
                collage.filter((col=>{
                  return search.toLocaleLowerCase()=== '' ? col:(col.college_name.toLocaleLowerCase()).includes(search)
                })).map(col => <SubCollage key={col._id} col={col}></SubCollage> )    
            }
        </div>
      </>
    );
};

export default Collage;