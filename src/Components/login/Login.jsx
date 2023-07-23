import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {login,resetPassword} = useContext(AuthContext);
    const from = location.state?.from?.pathname || '/';
    const emailRef = useRef()
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        login(email,password)
        .then(result => {
            const user = result.user;
            navigate(from , {replace: true})
            event.target.reset();
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleReset = () => {
        const email = emailRef.current.value;
        if(!email) {
            alert('Write Email')
            return
        }
        resetPassword(email)
        .then(() => {
            const user = result.user
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your password has been reset',
                showConfirmButton: false,
                timer: 1500
              })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    return (
        <div className='bg-red-100 py-10'>
            <h1 className='text-2xl text-center '>Login</h1>
            <hr className='border-4 my-5 w-48 mx-auto border-green-500'/>
        <form onSubmit={handleLogin}  className='form-area text-center '>
            <input type="email" name="email" id="email" ref={emailRef} placeholder='Entry your Email'/><br />
            <input type="password" name="password" id="password"  placeholder='Entry your password' required/><br />
            <h1 onClick={handleReset} href="#" className="label-text-alt link link-hover mt-5 mr-32 text-[18px]">Forgot password?</h1>
            <input className='btn my-5 btn-outline btn-error' type="submit" value="Login" /><br />
            <p className='tx'>Ar you a new user now<Link to={'/sing'} className='text-blue-500'> Sing Up </Link>  </p>
           
        </form>
    </div>
    );
};

export default Login;