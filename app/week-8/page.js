"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className='h-screen flex justify-center items-center bg-yellow-100'>

      {user ? (
        // user IS logged in


        <div className='h-96 w-96 shadow-lg p-8 bg-yellow-200 flex flex-col items-center rounded-lg'>
          <div className='flex flex-col items-center mb-10'>
              <p className='text-2xl font-bold'>Welcome {user.displayName}</p>
              <img className="w-20 h-20 mt-10" src={user.photoURL} />
          </div>

          <div className="w-full my-5 flex justify-around "> 
            <button className="bg-yellow-800 text-white px-4 py-2 rounded w-auto h-10 mb-2 mx-5"> 
              <Link href={"./logIn/shopping-list/"}>Shopping list </Link>
            </button>
            <button onClick={handleSignOut} className="bg-white text-black px-4 py-2 rounded w-auto h-10 mx-5 hover:bg-yellow-400">Sign Out</button>
          </div>
         
        </div>
      ) : (



        
        // user IS NOT logged in
        <div className='h-96 w-96 shadow-lg p-8  bg-yellow-200 flex flex-col items-center rounded-lg'>
          <div className="flex items-center mb-10">  
          </div>
          

          <h1 className='my-4 text-xl'>Log in by Github</h1>
          <button
            onClick={handleSignIn}
            className="text-lg mt-4 hover:underline bg-yellow-800 px-4 py-2 rounded "
          >
            Sign In
          </button>
        </div>

      )}
    </main>
  );
}