import React, { useState, useEffect } from 'react';

export const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6">
            <h2 className="text-2xl font-bold mb-6 text-slate-800">API Data Fetching (Users)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {users.map(user => (
                    <div key={user.id} className="p-4 border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition">
                        <h3 className="font-bold text-lg text-slate-800">{user.name}</h3>
                        <p className="text-sm text-indigo-600 mb-2">@{user.username}</p>
                        <p className="text-sm text-slate-500">{user.email}</p>
                        <p className="text-sm text-slate-500">{user.website}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
