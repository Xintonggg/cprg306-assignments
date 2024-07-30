"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import Link from 'next/link';


export default function Page(){
   
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');
      
    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    const handleItemSelect = (itemName) => {
        const cleanItemName = itemName.split(',')[0].replace(/[^a-zA-Z\s]/g, '').trim();
        setSelectedItemName(cleanItemName);
      };
    
    return (
        <main className='bg-yellow-100 '>
            <h1 className="text-yellow-300 text-3xl font-bold mb-4" >Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items}  onItemSelect={handleItemSelect}/>
            <p className='text-yellow-300 text-2xl font-bold '>
                <Link href={"../"}>Back</Link>
            </p>
            <div>
            {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
            </div>
           
        </main>
    ) 
}