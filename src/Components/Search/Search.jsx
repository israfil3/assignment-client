import React from 'react';

const Search = () => {
    return (
        <div className='text-center my-10'>
            <input className='py-3 px-16 w-96 mx-auto rounded border' type="search" name="search" id="search" placeholder='Search  your college'/>
            <input className='btn btn-outline btn-success' type="submit" value="Search" />
        </div>
    );
};

export default Search;