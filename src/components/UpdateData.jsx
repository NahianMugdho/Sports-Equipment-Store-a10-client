import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navbar from './Navbar';
import Footer from './Footer';

const UpdateData = () => {
    const data= useLoaderData();
    const{_id,email,user_name,url,item_name,cat_name,description,price,rating ,customization ,processing_time,quantity }=data;

    const handleUpdate = e =>
        {
          e.preventDefault();
          const form = e.target;
          const newemail = form.email.value;
          const newuser_name=form.user_name.value;
          const newurl = form.url.value;
          const newitem_name =form.item_name.value;
          const newcat_name=form.cat_name.value;
          const newdescription = form.description.value;
          const newprice = form.price.value;
          const newrating = form.rating.value;
          const newcustomization = form.customization.value;
          const newprocessing_time =form.processing_time.value;
          const newquantity = form.quantity.value;
      
          const updated = {
            email: newemail,
            user_name: newuser_name,
            url: newurl,
            item_name: newitem_name,
            cat_name: newcat_name,
            description: newdescription,
            price: newprice,
            rating: newrating,
            customization: newcustomization,
            processing_time: newprocessing_time,
            quantity: newquantity,
          };
          
      
          //send data
          fetch(`https://equisports-server.vercel.app/cricketData/${_id}`,{method :'PUT',
            headers:{
              'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
              Swal.fire({
                title: 'Success!',
                text: 'Item Updated successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
          })
        }


    return (
 
<>
<Navbar></Navbar>
{/* <h2>Update:{item_name}</h2>  */}

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Update Data {item_name}</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={email} name='email' placeholder="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Name</span>
          </label>
          <input type="text" name='user_name' defaultValue={user_name} placeholder="User Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="url" name='url' defaultValue={url} placeholder="Image url" className="input input-bordered" required />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input type="text" name='item_name' defaultValue={item_name} placeholder="Item Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Category Name</span>
          </label>
          <input type="text" name='cat_name' defaultValue={cat_name} placeholder="Category Name" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name='description' defaultValue={description} placeholder="Description" className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" defaultValue={price} name='price' placeholder="Price"    className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="number" defaultValue={rating} name='rating' placeholder="Rating" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Customization</span>
          </label>
          <input type="text" defaultValue={customization} name='customization' placeholder="Customization" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" defaultValue={quantity} name='quantity' placeholder="Quantity" className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Processing Time</span>
          </label>
          <input type="text" defaultValue={processing_time} name='processing_time' placeholder="Processing Time" className="input input-bordered" required />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Data</button>
        </div>
      </form>
    </div>
  </div>
</div>



<Footer></Footer>



</>

    );
};

export default UpdateData;