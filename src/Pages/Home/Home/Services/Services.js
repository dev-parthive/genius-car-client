import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect( ()=>{
        fetch('https://genius-car-server-tau-teal.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    console.log(services)
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600 my-5'>Services</p>
                <h2 className="text-5xl font-bold ">Our Service Area</h2>
                <p className="text-base capitalize my-8">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
             
            <div className='grid sm:mx-auto w-full grid-cols-1 my-20 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map( service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn block my-9 mx-auto btn-outline text-center btn-error font-semibold">More Products</button>
        </div>
    );
};

export default Services;