import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CardHome = ({data,LoadDatas,setDatas}) => {
  
    const{
        _id,email,user_name,url,item_name,cat_name,description,price,rating ,customization ,processing_time,quantity }=data;
    
        const handleDelete = _id =>{
            console.log(_id);
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`https://equisports-server.vercel.app/cricketData/${_id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if (data.deletedCount>0){
                             Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  const remaining = LoadDatas.filter(cof=>cof._id!==_id);
                  setDatas(remaining);

                    }
                })
                }
              });
        }
    return (
        <div className='w-11/12 mx-auto gap-3 border-b-2 mb-3 py-6 border-t-2'>  
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img className='w-1/2'
      src={url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item_name}</h2>
    <p  className='text-gray-500'> <i>{cat_name} </i> </p>
    <p className='font-mono font-bold'>Price: {price} BDT </p>
    <div className="card-actions justify-center">
    <Link to={`/viewData/${_id}`}><button className="btn btn-outline btn-wide btn-primary">View</button></Link>
      
      
     
    </div>
  </div>
</div>
        </div>
    );
};

export default CardHome;