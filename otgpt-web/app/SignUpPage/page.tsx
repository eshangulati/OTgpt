'use client';
import React, { useState } from 'react';
import { createNewUserWithEmail, googleSignIn } from '@/firebaseAPI/auth'; // Make sure to implement these functions

const SignUp: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignUp = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const user = await createNewUserWithEmail(email, password, name);
            console.log("Newly signed up user:", user);
        } catch (error) {
            console.error("SignUp failed:", error);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const user = await googleSignIn();
            console.log("Signed in user via Google:", user);
        } catch (error) {
            console.error("Google SignIn failed:", error);
        }
    };

    return (
        <div className="bg-gray-900 text-white p-8 min-h-screen flex flex-col items-center justify-center">
            <form onSubmit={handleSignUp} className="max-w-md w-full">
                <h1 className="text-xl font-bold mb-6">Sign Up</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full p-2 mb-4 border border-gray-700"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 mb-4 border border-gray-700"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 mb-4 border border-gray-700"
                />
                <button type="submit" className="w-full bg-black p-2 mb-2">Sign Up</button>
                <div className="my-4">or</div>
                <button onClick={handleGoogleSignIn} className="w-full bg-black p-2 mb-2">Sign up with Google</button>
                <button type="button" className="w-full bg-black p-2 mb-2">Sign up with GitHub</button>
                <button type="button" className="w-full bg-black p-2 mb-2">Sign up with Apple</button>
            </form>
        </div>
    );
};

export default SignUp;
