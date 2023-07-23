import React, { useEffect, useState } from 'react';

const MyCollege = () => {
    const [myCollege,setMyCollege] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/admission`)
        .then(res => res.json())
        .then(data => setMyCollege(data))
    },[]);

    const handleRating = (event) => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value
        const option = form.option.value;
        const college =form.college.value;
        console.log(text,option);
        const ratingData = {text,option,college}

        fetch(`http://localhost:5000/rating`,{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(ratingData)
        })
        .then(res => res.json())
        .then(data => {
            const user = data.user;
            alert('done')
            event.target.reset();
        })
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:my-10'>
           {
            myCollege.map(e => 
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                  <img src={e.url} alt="img" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{e.college}</h2>
                  <p>Name: {e.name}</p>
                  <p>Email: {e.email}</p>
                  <p>Number: {e.number}</p>
                  <p>Subject: {e.option}</p>
                  <p>Address: {e.address}</p>
                  <p>Date: {e.date}</p>
                  <div className="card-actions">
                    <form onSubmit={handleRating}>
                        <input className='mr-5 border py-3 px-2 rounded' type="text" name='text' id='text' placeholder='please write collage details' required/>
                        <input hidden className='mr-5 border py-3 px-2 rounded' type="text" name='college' 
                        value={e.college}/>
                            <select className='border' name="option" id="option" required>
                                <option value="" disabled selected>add Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        <input className='btn my-5' type="submit" value="add Rating" />
                    </form>
                  </div>
                </div>
              </div>
                )
           }
        </div>
    );
};

export default MyCollege;