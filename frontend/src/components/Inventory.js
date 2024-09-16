import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    axios.get('/inventory')
      .then(res => setInventory(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Inventory</h1>
      <ul>
        {inventory.map(item => (
          <li key={item._id} className="border-b py-2">
            {item.name} - {item.quantity} units - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
