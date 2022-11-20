import React, { useContext } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {title, _id, img, price, description, facelity, } = service;
    const {user} = useContext(AuthContext)
    console.log(user)
    const handlePlaceOrder = event =>{
        event.preventDefault()
        const form = event.target;
        const name = `${form.firstName.value } ${form.lastName.value}`;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const phone = form.phone.value;

        // console.log(name, email, message, phone)
        const order = {
            service: _id, 
            serviceName: title,
            price,
            customerName : name,
            email, 
            phone, 
            message,
        }

        // if(phone.length > 10){
        //     alert("Phone numebr should be 10 charecter or longer ")
        // } else{
            
        // }

        fetch('http://localhost:5000/orders', {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            }, 
            // data tare pataite hobe json a convert kore 
            body : JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Order placed successfully")
                form.reset()
            }
        })
        .catch(er => console.error(er))
    }
    return (
        <div className='w-4/5 mx-auto'>
            <h2 className='text-4xl mb-3 text-center  '>You are about to order: <span className='text-blue-500'>{title}</span></h2>
            <h4 className='text-3xl text-center mb-5'>Price: {price}</h4>
           <form onSubmit={handlePlaceOrder}>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <input  name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full " />
           <input  name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full " />
           <input  name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full " required/>
           <input  name='email' type="text" placeholder="Your Email" className="input input-bordered w-full " defaultValue={user?.email} readOnly />
          </div>
         <div className='flex justify-center py-7'>
         <textarea name='message' className="textarea textarea-bordered w-2/3 h-24 " placeholder="Your message" required></textarea>
         </div>
       <div className='flex justify-center mb-5'>
       <input className='btn btn-outline btn-secondary' type="submit" value="Place Your Order" />
       </div>
           </form>
        </div>
    );
};

export default CheckOut;