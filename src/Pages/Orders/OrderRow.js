import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete, handleStatusUpdate}) => {
    console.log(order)
    const {_id, serviceName, price, email, customerName, phone, service, status} = order;
    const [orderService, setOrderService] = useState({})
    useEffect(  ()=>{
      console.log(service)
      if(!service)  return ;
      
      fetch(`https://genius-car-server-tau-teal.vercel.app/services/${service}`) 
      .then(res => res.json())
      .then(data => setOrderService(data))
    }, [service]);


 
    console.log(orderService)
    return (
            <tr>
        <th>
          <label>
           <button className='btn btn-outline' onClick={ ()=>handleDelete(_id)}>x</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="rounded w-24 h-24">
               {
                orderService?.img  &&  <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
               }
              </div>
            </div>
            <div>
              <div className="font-bold">{customerName}</div>
              <div className="text-sm opacity-50">{phone}</div>
            </div>
          </div>
        </td>
        <td>
          {serviceName}
          <br/>
          <span className="badge badge-ghost badge-sm">${price}</span>
        </td>
        <td>Purple</td>
        <th>
          <button  onClick={()=>handleStatusUpdate(_id)} >{status ? <span className='btn btn-outline btn-success'>{status}</span> : <span className="btn btn-outline btn-warning">pending</span>}</button>
        </th>
      </tr>
    );
};

export default OrderRow;