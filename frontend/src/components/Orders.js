import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/order')
      .then(res => setOrders(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order._id} className="border-b py-2">
            {order.customerName} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
