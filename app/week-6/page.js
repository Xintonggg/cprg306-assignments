"use client";
import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import Link from 'next/link';


export default function Page(){
   
    const [items, setItems] = useState(itemsData);
      
    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    return (
        <main className='bg-yellow-100 '>
            <h1 className="text-yellow-300 text-3xl font-bold mb-4" >Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
            <p className='text-yellow-300 text-2xl font-bold '>
                <Link href={"../"}>Back</Link>
            </p>

           
        </main>
    ) 
}