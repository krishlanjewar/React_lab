import React, { useState } from 'react';

export const LoginPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-200 text-center max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4 text-slate-800">
                {isLoggedIn ? 'Welcome Back!' : 'Please Login'}
            </h2>

            {isLoggedIn ? (
                <div className="space-y-4">
                    <div className="bg-green-50 text-green-700 p-3 rounded-lg">
                        Hello, User! You have successfully logged in.
                    </div>
                    <button
                        onClick={() => setIsLoggedIn(false)}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="space-y-4">
                    <p className="text-slate-500 text-sm">Access exclusive content by logging in below.</p>
                    <div className="flex flex-col gap-3">
                        <input type="text" placeholder="Username" className="p-2 border rounded" />
                        <input type="password" placeholder="Password" className="p-2 border rounded" />
                        <button
                            onClick={() => setIsLoggedIn(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
