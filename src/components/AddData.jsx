import React from 'react';
import Swal from 'sweetalert2'
import Navbar from './Navbar';
import Footer from './Footer';


const AddData = () => {
  const handleData = e =>
  {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const user_name=form.user_name.value;
    const url = form.url.value;
    const item_name =form.item_name.value;
    const cat_name=form.cat_name.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time =form.processing_time.value;
    const quantity = form.quantity.value;

    const data ={email,user_name,url,item_name,cat_name,description,price,rating ,customization ,processing_time,quantity }

    //send data
    fetch('https://equisports-server.vercel.app/cricketData',{method :'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Item added successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }
    return (
        <div className='w-11/12 mx-auto'>
          <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Add Data</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleData} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='user_name' placeholder="User Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" name='url' placeholder="Image url" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" name='item_name' placeholder="Item Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input type="text" name='cat_name' placeholder="Category Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' placeholder="Description" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" name='price' placeholder="Price" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" name='rating' placeholder="Rating" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <input type="text" name='customization' placeholder="Customization" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <input type="text" name='processing_time' placeholder="Processing Time" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Data</button>
        </div>
      </form>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>

    );
};

export default AddData;