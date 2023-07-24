import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Admission.css';

const AdmissionCollage = () => {
      const addCollage = useLoaderData();
      const {_id} = addCollage
      console.log(addCollage._id)
      const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const college = form.college.value; 
            const option = form.option.value;
            const email = form.email.value;
            const number = form.number.value;
            const address = form.address.value;
            const date =form.date.value;
            const url = form.url.value;
            const addAdmission = {name,option,email,number,address,date,url,college}

            fetch('https://myserver-israfil3.vercel.app/admission',{
                method:'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(addAdmission)
            })
            .then(res => res.json)
            .then(data => {
                 const user =  data.user;
                 alert('done')
                 event.target.reset();
            })

      }
    return (
        <div className='bg-blue-100 py-14'>
           <form onSubmit={handleSubmit}  action="">
               <div className='grid grid-cols-2 gap-10 w-[60%] mx-auto t'>
                   <input type="text" name='college' value={addCollage.college_name}/>
                    <input type="text" name="name" id="Name" placeholder='Your Name' required/>
                    <select name="option" id="option" required>
                        <option value="" disabled selected>Choose your subject</option>
                        <option value="Bangla">Bangla</option>
                        <option value="English">English</option>
                        <option value="mathematics">mathematics</option>
                        <option value="Cse">Cse</option>
                        <option value="EEE">EEE</option>
                        <option value="mechanical">mechanical</option>
                    </select>
                    <input type="email" name="email" id="email" placeholder='Your Email' required/>
                    <input type="number" name="number" id="number" placeholder='Your Phone Number' required/>
                    <input type="text" name="address" id="address"  placeholder='Your Address' required/>
                    <input type="date" name="date" id="date" placeholder='Date of Birth' required/>
                    <input type="url" name="url" id="url" placeholder='Your Img Url' required/>
                </div>
                <div className="mx-auto text-center my-5">
                   <input className='btn mx-auto text-center' type="submit" value="Submit" />
                </div>
           </form>
                
        </div>
    );
};

export default AdmissionCollage;