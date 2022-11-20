import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    const[isAsc, setIsAsc] = useState(true)
    const searchRef = useRef()
    const [search, setSearch] = useState('')
    const handleSearch = () =>{
        setSearch(searchRef.current.value)
    }
    useEffect( ()=>{
        fetch(`http://localhost:5000/services?search=${search}&order=${isAsc ? 'asc' : 'desc'}`)
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[isAsc, search])
    console.log(services)
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600 my-5'>Services</p>
                <h2 className="text-5xl font-bold ">Our Service Area</h2>
                <p className="text-base capitalize my-8">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <button className='btn mb-4 btn-outline' onClick={()=> setIsAsc(!isAsc)}>{isAsc ? 'Desc' : 'asc'}</button>
                <br />
                <input ref={searchRef} className="input input-bordered input-accent  w-full max-w-xs" type="text" /> <button className='btn btn-outline btn-secondary' onClick={handleSearch}>Search</button>
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