'use client';
import React, { useState } from 'react';
import { googleSignIn } from '@/firebaseAPI/auth';
import Link from 'next/link';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignIn = async (event: React.FormEvent) => {
        event.preventDefault();
        // Add your login logic here
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await googleSignIn();
            console.log("Signed in user:", user);
        } catch (error) {
            console.error("SignIn failed:", error);
        }
    };

    return (
        <div className="bg-gray-900 text-white p-8 min-h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSignIn} className="max-w-md w-full">
                <h1 className="text-xl font-bold mb-6">Welcome</h1>
                <p className="mb-6">Sign in or create an account to continue</p>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 mb-4"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-4"
                />
                <button className="w-full bg-black p-2 mb-4">Sign In</button>
                
                <button onClick={handleGoogleSignIn} className="w-full bg-black p-2 mb-2">Sign in with Google</button>
                <button type="button" className="w-full bg-black p-2 mb-4">Sign in with Apple</button>
                <Link href="/SignUpPage">
                <p className="text-center">Don't have an account? Sign Up</p>
                </Link>
                
            </form>
        </div>
    );
};

export default SignIn;
