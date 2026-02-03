import React, { useState, useEffect } from 'react';
import './HelloReact.css';

/**
 * Practical 1: Hello World Component
 * Demonstrates a basic functional component with state and effects.
 */
export const HelloReact = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        // Update the time every second to show the component is "alive"
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hello-container">
            <h1 className="hello-title">Hello, React!</h1>
            <p className="hello-subtitle">
                Welcome to your first practical component. This page is built using a functional component
                and demonstrates React's ability to handle dynamic updates efficiently.
            </p>

            <div className="timestamp">
                Current Time: <strong>{time}</strong>
            </div>
        </div>
    );
};
