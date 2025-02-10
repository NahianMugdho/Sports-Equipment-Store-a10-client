import React, { useContext } from 'react';
import { useLoaderData, useOutletContext } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../Authprovider';

const ViewData = () => {
    const data= useLoaderData();
    const { addToCart } = useContext(AuthContext);
  

    const{
        _id,email,user_name,url,item_name,cat_name,description,price,rating ,customization ,processing_time,quantity }=data;
        const handleAddToCart = () => {
          addToCart(data); // Add the current item to the cart
      };
        
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={url}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{item_name}</h1>
      <p className="py-6">
       {description}
      </p>
      <p>This {cat_name} can be bought from EquiSports is only at {price} BDT and can be delivered at most {processing_time}</p>
      <p><i>Updated by: {user_name}</i> </p>
      <button onClick={handleAddToCart} className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default ViewData;