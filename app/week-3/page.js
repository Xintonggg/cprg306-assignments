import React from 'react';
import ItemList from './item-list';
import Link from 'next/link';

export default function Page(){
    return (
        <main className='bg-yellow-100 h-25'>
            <h1 className="text-yellow-300 text-3xl font-bold mb-4" >Shopping List</h1>
            <ItemList/>
            <p className='text-yellow-300 text-2xl font-bold '>
                <Link href={"../"}>Back</Link>
            </p>

           
        </main>
    ) 
}