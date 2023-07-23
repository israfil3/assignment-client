import React, { useEffect, useRef, useState } from 'react';

const Search = () => {
    const [collageL, setCollage] = useState([]);
    const [search , setSearch] = useState('');

    const searchRef = useRef(null)

     useEffect(()=>{
        fetch(`http://localhost:5000/college?search=${search}`)
        .then(res => res.json())
        .then(data => setCollage(data))
    } ,[search])

    const handleSearch = (event) => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value)
    }
    return (
        <div className='text-center my-10'>
            <input className='py-3 px-16 w-96 mx-auto rounded border' ref={searchRef} type="search" name="search" id="search" placeholder='Search  your college'/>
            <input onClick={handleSearch} className='btn btn-outline btn-success' type="submit" value="Search" />
        </div>
    );
};

export default Search;