// /app/week-4/new-item.js

'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 space-y-4 bg-yellow-700 rounded-lg shadow-lg w-80 mx-auto">
      <div>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 mb-2 text-yellow-700 placeholder-gray-400 bg-yellow-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-2">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          max="99"
          required
          className="w-1/3 p-2 text-yellow-700 placeholder-gray-400 bg-yellow-100 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-2/3 p-2 text-yellow-700 bg-yellow-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-foods">Frozen Foods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full p-2 text-yellow-700 bg-yellow-300 rounded-md hover:bg-yellow-500 active:bg-pink-400"
      >
        +
      </button>
    </form>
  );
}
