import React, { useState } from 'react';

/**
 * Counter Component
 * Demonstrates useState hook for managing numeric state.
 */
export const Counter = () => {
    const [count, setCount] = useState(0);

    // Helper to determine color class
    const getCountClass = () => {
        if (count > 0) return 'positive';
        if (count < 0) return 'negative';
        return '';
    };

    return (
        <div className="counter-card">
            <h3 style={{ color: 'var(--slate-500)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.875rem' }}>
                Current Count
            </h3>

            <div className={`count-display ${getCountClass()}`}>
                {count}
            </div>

            <div className="counter-controls">
                <button
                    className="btn-control btn-dec"
                    onClick={() => setCount(count - 1)}
                    aria-label="Decrement"
                >
                    -
                </button>

                <button
                    className="btn-control btn-reset"
                    onClick={() => setCount(0)}
                    aria-label="Reset"
                >
                    Reset
                </button>

                <button
                    className="btn-control btn-inc"
                    onClick={() => setCount(count + 1)}
                    aria-label="Increment"
                >
                    +
                </button>
            </div>
        </div>
    );
};
