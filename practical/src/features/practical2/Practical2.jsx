import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './Practical2.css';

export const Practical2 = () => {
    return (
        <div className="container" style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Practical 2: Components & JSX</h1>
                <p style={{ color: 'var(--slate-500)' }}>Building a complete UI using separate Header and Footer components.</p>
            </div>

            <div className="p2-container">
                {/* Pass dynamic data to Header */}
                <Header/>

                <main className="p2-content">
                    <h3>Welcome to the Dashboard</h3>
                    
                </main>

                {/* Footer computes date internally */}
                <Footer />
            </div>
        </div>
    );
};
