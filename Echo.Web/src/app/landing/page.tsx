"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import ModularButton from '../components/ModularButton';

const Landing: React.FC = () => {
	const router = useRouter();

	const handleLoginClick = () => {
		router.push('/login');
	}

	const handleSignupClick = () => {
		router.push('/signup');
	}

  return (
		<div className="h-screen bg-gradient-to-br from-violet-300 via-emerald-400 to-violet-300 flex items-center justify-center">
			<div className="flex flex-col items-center justify-center h-[75vh] w-[30vw]">
				<h1 className="text-5xl font-bold mb-36 text-white drop-shadow-md">Welcome to Echo</h1>
				<div className="flex flex-col space-y-6 w-[80%]">
					<ModularButton variant="primary" onClick={handleLoginClick}>Login</ModularButton>
					<ModularButton variant="secondary" onClick={handleSignupClick}>Sign Up</ModularButton>
				</div>
			</div>
		</div>
  );
};

export default Landing;
