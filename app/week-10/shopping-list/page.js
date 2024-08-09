"use client";
import React, {  useEffect, useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import { useUserAuth } from "../_utils/auth-context";
import MealIdeas from './meal-ideas';
import Link from 'next/link';
import { getItems, addItem } from "../_services/shopping-list-service.js";


export default function Page(){
   
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user} = useUserAuth();

    const loadItems = async () => {
        console.log("Loading items...");
        console.log(user);
        const items = await getItems(user.uid);
        setItems(items);
      }
    
      useEffect(() => {
        if (user) {
          loadItems();
        }
      }, [user]);
    
      
      async function handleAddItem(newItem) {
        try {
          const id = await addItem(user.uid, newItem);
          newItem.id = id;
          setItems((prevItemList) => [...prevItemList, newItem]);
        } catch (error) {
            console.error("Failed to add new item:", error);
        }
      }
    
      const handleItemSelect = (item) => {
        const parts = item.name.split(`,`);
        const cleanedName = parts[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
      }
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