import React from 'react';
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer'; // Assuming you have a Footer component
import { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import Card from './Card';
import CardHome from './CardHome';
import { Fade } from "react-awesome-reveal";

const Home = () => {
    const datas=useLoaderData();
const [LoadDatas,setDatas]=useState(datas);
  return (
    <div className="w-11/12 mx-auto">
      
      {/* Navbar */}
      {/* <a data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">
  ◕‿‿◕
</a>
<Tooltip id="my-tooltip" /> */}

      {/* Banner/Slider */}
      <div className="carousel w-full mt-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/yYphMz9/Equi-Sports.png"
            className="w-full"
            alt="Slide 1"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/S01Pgcy/Play-Cricket.png"
            className="w-full"
            alt="Slide 2"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/DQLCKzs/supply-7139794-1280.jpg"
            className="w-full"
            alt="Slide 3"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
       
      </div>

      {/* Product Section */}
      <div className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
       datas.map(data=>
    
       <CardHome
       
        key={data._id}
        data={data}
        LoadDatas ={LoadDatas}
        setDatas = {setDatas}
       
       ></CardHome>)
}
        </div>
      </div>

      {/* Sports Categories Section */}
      <div className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Sports Categories</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {['Cricket', 'Football', 'Tennis', 'Basketball'].map((category) => (
            <div key={category} className="card shadow-lg p-4 text-center">
              <h3 className="text-xl font-semibold">{category}</h3>
              <p className="text-gray-600 mt-2">Explore the latest gear for {category}.</p>
            </div>
          ))}
        </div>
      </div>
      <Fade>
  

      {/* Footer */}
      {/* Success Stories */}
<div className="border-b-4 border-t-4 py-9">
  <div className="hero bg-base-100">
    <div className="hero-content flex-col lg:flex-row-reverse" data-aos="fade-left">
      <img
        src="https://i.ibb.co.com/Tq1rGD3/EFBF4-B5-C-2829-4-B45-9326-5-EA930-E3-A2-E4.jpg"
        className="max-w-sm rounded-lg shadow-2xl"
        alt="Success Story 1"
      />
      
      <div>
        <h1 className="text-5xl font-bold w-11/12 mx-auto">Reviews!</h1>
        <p className="py-6 w-11/12 mx-auto">
          Hear from our loyal customers who’ve taken their game to the next level with our premium sports gear.
        </p>
        <p className="text-center text-gray-600 italic mb-10">
          "EquiSports provided me with the perfect equipment to enhance my training and performance. The quality is unparalleled!"
          <span className="block font-bold mt-2">- Sarah Williams</span>
        </p>
      </div>
    </div>
  </div>

  <div className="hero-content flex-col lg:flex-row" data-aos="fade-right">
    <img
      src="https://i.ibb.co.com/dPr2F7c/istockphoto-1136317339-612x612.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
      alt="Success Story 2"
    />
    <div>
      <p className="text-center text-gray-600 italic mb-10 w-11/12 mx-auto">
        "Thanks to EquiSports, I found gear tailored to my needs that helped me perform better and enjoy my favorite sport even more."
        <span className="block font-bold mt-2">- Michael Johnson</span>
      </p>
    </div>
  </div>
</div>
</Fade>
{/* FAQ */}
<div className="my-8" data-aos="fade-zoom-in">
  <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>

  {/* Question 1 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md mb-4">
    <input type="radio" name="equisports-faq" defaultChecked />
    <div className="collapse-title text-lg font-medium">
      What kind of sports equipment do you offer?
    </div>
    <div className="collapse-content">
      <p>
        EquiSports offers a wide range of sports equipment, including gear for cricket, football, tennis, basketball, and more. We ensure premium quality for both professionals and hobbyists.
      </p>
    </div>
  </div>

  {/* Question 2 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md mb-4">
    <input type="radio" name="equisports-faq" />
    <div className="collapse-title text-lg font-medium">
      Do you offer customization options for equipment?
    </div>
    <div className="collapse-content">
      <p>
        Yes, we provide customization services for select products like jerseys, bats, and shoes. Reach out to our support team for details.
      </p>
    </div>
  </div>

  {/* Question 3 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md mb-4">
    <input type="radio" name="equisports-faq" />
    <div className="collapse-title text-lg font-medium">
      How long does shipping take?
    </div>
    <div className="collapse-content">
      <p>
        Shipping typically takes 3-7 business days within the country. International shipping timelines vary based on the destination.
      </p>
    </div>
  </div>

  {/* Question 4 */}
  <div className="collapse collapse-arrow bg-base-200 shadow-md">
    <input type="radio" name="equisports-faq" />
    <div className="collapse-title text-lg font-medium">
      Do you have a return or exchange policy?
    </div>
    <div className="collapse-content">
      <p>
        Yes, we offer a hassle-free 15-day return or exchange policy for all our products. Please ensure the items are unused and in their original condition.
      </p>
    </div>
  </div>
</div>

   
    </div>
  );
};

export default Home;
