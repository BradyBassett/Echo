"use client";

import React from 'react';
import ModularButton from '../components/ModularButton';
import Link from 'next/link';

const Signup: React.FC = () => {
  const handleSignupClick = () => {
    console.log("Sign up button clicked");
  }

  return (
    <div className="h-screen bg-gradient-to-br from-violet-300 via-emerald-400 to-violet-300 flex items-center justify-center">
      <main className="flex flex-col items-center justify-center h-[75vh] w-[30vw] drop-shadow-2xl rounded-2xl">
        <header className="flex flex-col items-center text-white drop-shadow-md mt-20">
          <h1 className="text-5xl font-bold">Create Account,</h1>
          <h2 className="text-3xl">to get started now!</h2>
        </header>
        <form action="" onSubmit={handleSignupClick} className="flex flex-col items-center w-full my-auto text-xl">
          <input type="text" placeholder="Username" className="w-[80%] border-2 border-white rounded-lg px-4 py-2 mb-4 bg-transparent text-white placeholder-white" />
          <input type="text" placeholder="Email" className="w-[80%] border-2 border-white rounded-lg px-4 py-2 mb-4 bg-transparent text-white placeholder-white" />
          <input type="password" placeholder="Password" className="w-[80%] border-2 border-white rounded-lg px-4 py-2 mb-4 bg-transparent text-white placeholder-white" />
          <input type="password" placeholder="Confirm Password" className="w-[80%] border-2 border-white rounded-lg px-4 py-2 mb-4 bg-transparent text-white placeholder-white" />
          <ModularButton type="submit" variant="primary" className="w-[80%] mt-6">Sign Up</ModularButton>
        </form>
        <footer className="flex flex-row mb-20">
          <p className="pr-1">Already have an account?</p>
          <Link href="/login" className="underline decoration-white">
            <p className="text-white">Login Now</p>
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default Signup;
