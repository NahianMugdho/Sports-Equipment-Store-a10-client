import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Authprovider';

const Login = () => {
  const{logInUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
   // Get the `from` path or fallback to "/"
   const from = location.state?.from?.pathname || '/';
const handlelogin = e=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  logInUser(email,password)
  .then(result=>{
  console.log(result.user);
  navigate(from, { replace: true });
  })
  .catch(error=>{
  console.log(error);
  
  })

}
    return (
      
        <div className='mx-auto w-11/12'> 
        <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <label className="label">
            <NavLink to='/signup'><a  className="label-text-alt link link-hover">new user? Register</a></NavLink>
            
          </label>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default Login;