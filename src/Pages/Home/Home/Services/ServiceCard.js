import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({service}) => {
    // console.log(service)
    const {_id, img, price,title , } = service;

    return (
        <div className="card p-5 border border-[#E8E8E8] card-compact w-96 bg-base-100 shadow-xl">
        <figure><img style={{height: '250px'}} src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
         <div className='flex justify-between items-center'>
         <p className='text-red-500 font-semibold text-2xl'>Price : ${price}</p>
         <p ><FaArrowRight style={{marginLeft: '40px', color:'red', }} ></FaArrowRight></p>
         </div>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;