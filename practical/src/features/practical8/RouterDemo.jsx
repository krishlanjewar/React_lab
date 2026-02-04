import React from 'react';
import { Routes, Route, Link, useParams, Outlet } from 'react-router-dom';

const P8Layout = () => (
    <div className="max-w-3xl mx-auto mt-10 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <nav className="bg-slate-800 text-white p-4 flex gap-6">
            <Link to="" className="hover:text-indigo-300">Home</Link>
            <Link to="about" className="hover:text-indigo-300">About</Link>
            <Link to="contact" className="hover:text-indigo-300">Contact</Link>
            <Link to="users/123" className="hover:text-indigo-300">User Profile (Dynamic)</Link>
        </nav>
        <div className="p-8 bg-white min-h-[300px]">
            <Outlet />
        </div>
    </div>
);

const Home = () => <h2 className="text-2xl font-bold">Home Page</h2>;
const About = () => <h2 className="text-2xl font-bold">About Us</h2>;
const Contact = () => <h2 className="text-2xl font-bold">Contact Page</h2>;

const UserProfile = () => {
    const { id } = useParams();
    return (
        <div>
            <h2 className="text-2xl font-bold mb-2">User Profile</h2>
            <p className="text-lg text-slate-600">
                Dynamic ID detected: <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded font-mono">{id}</span>
            </p>
        </div>
    );
};

export const RouterDemo = () => {
    return (
        <Routes>
            <Route path="/" element={<P8Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="users/:id" element={<UserProfile />} />
            </Route>
        </Routes>
    );
};
