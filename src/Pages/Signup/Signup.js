import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SocialLogin from '../../shared/SocialLogin';
const Signpu = () => {
    const {createUser, currentUser, loading} = useContext(AuthContext)
    const handleSignUp = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        
       createUser(email, password) 
       .then(result=>{
        const user = result.user
        console.log(user);
        form.reset() 
        setAuthToken(user)

       })
       .catch(err => console.log(err))
        console.log(name, email, password)
    }

    return (
        <div className="hero">
        <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           <img className='w-3/4' src={img} alt="" />
          </div>
          <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body p-6">
            <h1 className="text-3xl text-center py-5 font-bold">Register now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                {/* <label className="label">
                  <a href="#d" className="label-text-alt link link-hover">Forgot password?</a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="register" />
              </div>
            </form>
            <p className='text-center pb-8'>Already have an account? <Link
             className='text-orange-600 font-bold' to="/login">Login</Link></p>
             <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Signpu;