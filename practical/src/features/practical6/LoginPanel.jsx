import React, { useState } from 'react';
import './LoginPanel.css';

export const LoginPanel = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">
                    {isLoggedIn ? 'Welcome Back!' : 'Please Login'}
                </h2>

                {isLoggedIn ? (
                    <div className="login-content">
                        <div className="success-message">
                            Hello, User! You have successfully logged in.
                        </div>
                        <button
                            onClick={() => setIsLoggedIn(false)}
                            className="btn-secondary"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="login-content">
                        <p className="login-subtitle">Access exclusive content by logging in below.</p>
                        <div className="input-group">
                            <input type="text" placeholder="Username" className="login-input" />
                            <input type="password" placeholder="Password" className="login-input" />
                            <button
                                onClick={() => setIsLoggedIn(true)}
                                className="btn-primary"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
