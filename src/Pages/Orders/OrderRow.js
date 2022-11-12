import React, { useEffect, useState } from 'react';

const OrderRow = ({order, handleDelete}) => {
    console.log(order)
    const {_id, serviceName, price, email, customerName, phone, service} = order;
    const [orderService, setOrderService] = useState({})
    useEffect(  ()=>{
      fetch(`http://localhost:5000/services/${service}`) 
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default OrderRow;