import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FaGithub, FaGoogle } from 'react-icons/fa';
import './sing.css'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Sing = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {createUser,googleLogin,facebookLogin} = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';

    
    const handleSing = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        if(password.length < 6){
            return alert('at list 6 digit password now')
        }
        createUser(email,password)
        .then(result => {
            const user = result.user;
            navigate(from , {replace: true})
            event.target.reset();
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleGoogle = () => {
            googleLogin()
            .then(result => {
                const user = result.user;
                navigate(from , {replace: true})
            })
            .catch(error =>{
                console.log(error)
            })
    }

    const handleFacebook = () => {
        facebookLogin()
        .then(result => {
            const user = result.user;
            navigate(from , {replace: true})
        })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className='text-center bg-blue-100'>
        <form onSubmit={handleSing} className='form-area text-center'>
           <input type="text" name="name" id="name"  placeholder='Entry Your Name'required/><br />
           <input type="email" name="email" id="email"  placeholder='Entry your Email' required/><br />
           <input type="password" name="password" id="password" placeholder='Entry your password' required/><br />
           <input className='btn my-5 btn-outline btn-error' type="submit" value="Sing Up" /><br />
           <p className='tx'>Al-ready you have a account now<Link to={'/login'} className='text-green-500'> Log in </Link>  </p>
           <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
           
       </form>
       <div className="mx-auto text-center">
           <button onClick={handleGoogle} className='btn btn-outline btn-error' ><FaGoogle className='mx-3 text-2xl text-center'/>Sing up with Google</button><br /><br />
       </div>
       <div className="mx-auto text-center">
           <button onClick={handleFacebook} className='btn btn-outline btn-error' ><FaGithub className='mx-3 text-2xl text-center'/>Sing up with Github</button><br /><br />
       </div>
      
      </div>
    );
};

export default Sing;