import React from 'react';
import { Counter } from './components/Counter';
import './Practical4.css';

export const Practical4 = () => {
    return (
        <div className="container" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Practical 4: State Management</h1>
                <p style={{ color: 'var(--slate-500)' }}>
                    Using the <code>useState</code> hook to manage a counter.
                </p>
            </div>

            <Counter />

            <div style={{ marginTop: '3rem', maxWidth: '600px', width: '100%', padding: '1.5rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--slate-200)' }}>
                <h4 style={{ marginBottom: '0.5rem' }}>Concept: useState</h4>
                <p style={{ color: 'var(--slate-600)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    State is the heart of React components. When the state changes (via <code>setCount</code>),
                    React automatically re-renders the component to reflect the new value in the UI.
                    This is called "Reactive UI".
                </p>
            </div>
        </div>
    );
};
