"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import Link from 'next/link';


export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => setItems([...items, item]);

  const handleItemSelect = (itemName) => {
    const cleanItemName = itemName.split(',')[0].replace(/[^a-zA-Z\s]/g, '').trim();
    setSelectedItemName(cleanItemName);
  };

  return (
    <main className="bg-yellow-100 min-h-screen flex flex-col">
      <h1 className="text-yellow-300 text-3xl font-bold mb-4 text-center">
        Shopping List
      </h1>

      <div className="flex flex-1 max-w-6xl mx-auto gap-6 px-4">
        {/* 左侧：表单 + 清单 */}
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* 右侧：推荐菜单 */}
        <aside className="flex-1 bg-white rounded-lg shadow-lg p-4">
          {selectedItemName ? (
            <MealIdeas ingredient={selectedItemName} />
          ) : (
            <p className="text-gray-300 text-center mt-8">
              Select an item to see meal ideas
            </p>
          )}
        </aside>
      </div>

      <p className="text-yellow-300 text-2xl font-bold text-center mt-4">
        <Link href="../">Back</Link>
      </p>
    </main>
  );
}
