import React from 'react';
import { Routes, Route, Link, useParams, Outlet, useLocation } from 'react-router-dom';
import './RouterDemo.css';

const P8Layout = () => {
    const location = useLocation();

    return (
        <div className="p8-wrapper">
            <div className="p8-container">
                <nav className="p8-nav">
                    <Link to="" className="p8-nav-link">Home</Link>
                    <Link to="about" className="p8-nav-link">About</Link>
                    <Link to="contact" className="p8-nav-link">Contact</Link>
                    <Link to="users/123" className="p8-nav-link">User Profile</Link>
                </nav>
                <div className="p8-content-area" key={location.pathname}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

const Home = () => (
    <div>
        <h2 className="p8-title">Welcome Home</h2>
        <div className="p8-card">
            <p className="p8-text">
                Explore the power of React Router combined with a stunning glassmorphism design.
                Navigate through the tabs above to see smooth, dynamic rendering.
            </p>
        </div>
    </div>
);

const About = () => (
    <div>
        <h2 className="p8-title">About Us</h2>
        <div className="p8-card">
            <p className="p8-text">
                We are building modern, aesthetic, and fully responsive web experiences.
                Our focus is on premium UI/UX, keeping the user engaged with micro-animations and immersive visuals.
            </p>
        </div>
    </div>
);

const Contact = () => (
    <div>
        <h2 className="p8-title">Get In Touch</h2>
        <div className="p8-card">
            <p className="p8-text">Leave us a message and we'll get back to you soon.</p>
            <div className="p8-contact-form">
                <input type="text" placeholder="Your Name" className="p8-input" />
                <input type="email" placeholder="Your Email" className="p8-input" />
                <textarea placeholder="Message" rows="3" className="p8-input"></textarea>
                <button className="p8-button">Send Message</button>
            </div>
        </div>
    </div>
);

const UserProfile = () => {
    const { id } = useParams();
    return (
        <div>
            <h2 className="p8-title">User Profile</h2>
            <div className="p8-card">
                <p className="p8-text">You are currently viewing a dynamically rendered user profile.</p>
                <div style={{ marginTop: '1rem' }}>
                    <span className="p8-text">User ID parameter: </span>
                    <span className="p8-badge">{id}</span>
                </div>
            </div>
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
