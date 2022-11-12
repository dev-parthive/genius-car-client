import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const {user} = useContext(AuthContext)
    const[orders, setOrders] = useState([])

    
    useEffect( ()=>{
        fetch( `http://localhost:5000/orders?email=${user?.email}`)
        .then( res => res.json())
        .then(data => setOrders(data))
    }, [user?.email])


    
    const handleDelete = id =>{
      const proceed = window.confirm('Are your sure , you want to cancel this order');
      if(proceed){
       fetch(`http://localhost:5000/orders/${id}`, {
         method: 'DELETE',
       })
       .then(res => res.json())
       .then(data => {
         console.log(data)
         if(data.deletedCount  > 0){
          alert('deleted successfull ');
          const remaining =  orders.filter(odr => odr._id !== id)
          setOrders(remaining)
         }
       })
      }
      }


    return (
        <div>
            <h1>Your have {orders.length} Orders</h1>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     
     {
        orders.map(order => <OrderRow key={order._id} order={order} handleDelete={handleDelete}></OrderRow>)
     }

    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Orders;