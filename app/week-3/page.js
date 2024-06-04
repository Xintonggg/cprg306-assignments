import React from 'react';
import ItemList from './item-list';

export default function Page(){
    return (
        <main className='bg-yellow-100'>
            <h1 className="text-yellow-300 text-3xl font-bold mb-4" >Shopping List</h1>
            <ItemList/>
            

           
        </main>
    ) 
}