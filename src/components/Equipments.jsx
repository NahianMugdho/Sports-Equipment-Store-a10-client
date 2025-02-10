import { useState } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
// import Card from './components/Card';
// import Navbar from './components/Navbar'
// import Footer from './components/Footer';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';

const Equipments = () => {
 
const datas=useLoaderData();
const [LoadDatas,setDatas]=useState(datas)
 // Sort functionality
//  const handleSortByPrice = () => {
//   const sortedDatas = [...LoadDatas].sort(
//     (a, b) => parseFloat(a.price) - parseFloat(b.price) // Ensure numeric sorting
//   );
//   setDatas(sortedDatas); // Update state with sorted data
// };

  return (
    <>
    {/* <h1>Data List : {datas.length}</h1> */}
    <div className='mx-auto w-11/12'>
    <Navbar></Navbar>
    <div className="my-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">All Sports Equipment</h1>
          {/* <button
            onClick={handleSortByPrice}
            className="btn btn-outline btn-primary">
            Sort by Price (Ascending)
          </button> */}
        </div>
    <div className='grid md:grid-cols-3 gap-2 my-2'>
    {
       datas.map(data=>
    
       <Card
       
        key={data._id}
        data={data}
        LoadDatas ={LoadDatas}
        setDatas = {setDatas}
       
       ></Card>)
}

    </div>
    <Footer></Footer>
    </div>
  
    </>
  )
}

export default Equipments;

