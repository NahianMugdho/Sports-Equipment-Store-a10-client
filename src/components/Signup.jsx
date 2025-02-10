import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Authprovider';
import Swal from 'sweetalert2';

const Signup = () => {
    const {createUser} = useContext(AuthContext);

const handleSignUp = e=>{
    e.preventDefault();
    console.log('clicked');
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;




    createUser(email,password)
    .then(result=>{
        console.log(result.user);
        const newUser={name,email}
       //send data
    fetch('https://equisports-server.vercel.app/users',{method :'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        console.log('user created to DB',data);
      }
    
      
  
    })






    })
    .catch(error=>{
        console.log('error',error);
    })

}

    return (
        <div className='mx-auto w-11/12'>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign UP!</h1>
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignUp} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>





        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="url" placeholder="url" name='url' className="input input-bordered" required />
        </div>



        


        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          <label className="label">
            <NavLink to='/login'><a  className="label-text-alt link link-hover">already registered? Log In</a> </NavLink>
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

export default Signup;