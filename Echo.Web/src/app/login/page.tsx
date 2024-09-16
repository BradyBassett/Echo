"use client";

import React from 'react';
import ModularButton from '../components/ModularButton';
import Link from 'next/link';

const Login: React.FC = () => {
  const handleLoginClick = () => {
    console.log("Login button clicked");
  }

  return (
    <div className="h-screen bg-gradient-to-br from-violet-300 via-emerald-400 to-violet-300 flex items-center justify-center">
      <main className="flex flex-col items-center justify-center h-[75vh] w-[30vw] drop-shadow-2xl rounded-2xl">
        <header className="flex flex-col items-center text-white drop-shadow-md mt-20">
          <h1 className="text-5xl font-bold">Welcome,</h1>
          <h2 className="text-3xl">Glad to see you!</h2>
        </header>
        <form action="" onSubmit={handleLoginClick} className="flex flex-col items-center w-full my-auto text-xl">
          <input type="text" placeholder="Username" className="w-[80%] border-2 border-white rounded-lg px-4 py-2 mb-4 bg-transparent text-white placeholder-white" />
          <input type="password" placeholder="Password" className="w-[80%] border-2 border-white rounded-lg px-4 py-2 mb-4 bg-transparent text-white placeholder-white" />
          <ModularButton type="submit" variant="primary" className="w-[80%] mt-6">Login</ModularButton>
        </form>
        <footer className="flex flex-row mb-20">
          <p className="pr-1">Don't have an account?</p>
          <Link href="/signup" className="underline decoration-white">
            <p className="text-white">Sign Up Now</p>
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default Login;