import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
const Login = () => {
    const handleLogin = event =>{
        event.preventDefault();


    }
    return (
        <div className="hero">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card mx-auto flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body p-6">
      <h1 className="text-3xl text-center py-5 font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#d" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <p className='text-center pb-8'>New to Genius Car? <Link className='text-orange-600 font-bold' to="/signup">Sign up</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;