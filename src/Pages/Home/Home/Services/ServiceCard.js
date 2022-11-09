import React from 'react';

const ServiceCard = ({service}) => {
    // console.log(service)
    const {img, price,title , } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{title}</h2>
          <p className='text-red-500 font-semibold text-2xl'>Price : ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;