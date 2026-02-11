import React, { useState, useEffect, useRef } from 'react';

/**
 * LifecycleDemo Component
 * Demonstrates useEffect hooks for mounting and updating phases.
 * 
 * @param {Object} props
 * @param {Function} props.addLog - Callback to add logs to the parent's visual console
 */
export const LifecycleDemo = ({ addLog }) => {
    const [value, setValue] = useState(0);

    // 1. Mount Effect: Runs ONLY once when component mounts
    useEffect(() => {
        console.log('Component Mounted');
        addLog('Component Mounted (Effect with [] deps)');

        // Cleanup function (Unmount)
        return () => {
            console.log('Component Unmounted');
            // Note: We can't log to state visualizer here because parent might be gone, 
            // but see console for proof.
        };
    }, []); // Empty dependency array

    // 2. Update Effect: Runs whenever 'value' changes
    useEffect(() => {

        if (value !== 0) { // Just filtering purely for visual noise reduction on init
            console.log('Value Updated:', value);
            addLog(`Value Updated: ${value} (Effect with [value] deps)`);
        } else {
            // Initial render also triggers this effect (init state is 0)
            addLog(`Initial Render Check: value is ${value}`);
        }
    }, [value]); // Dependency array contains 'value'

    return (
        <div className="p5-controls">
            <div style={{ fontSize: '2rem', fontWeight: 'bold', width: '60px', textAlign: 'center' }}>
                {value}
            </div>
            <button
                className="btn-control btn-inc"
                onClick={() => setValue(c => c + 1)}
            >
                Change State
            </button>
        </div>
    );
};
