import React, { useState } from 'react';
import { LifecycleDemo } from './components/LifecycleDemo';
import './Practical5.css';

export const Practical5 = () => {
    const [logs, setLogs] = useState([]);
    const [isMounted, setIsMounted] = useState(true);

    const addLog = (message) => {
        const time = new Date().toLocaleTimeString().split(' ')[0];
        setLogs(prev => [{ time, message }, ...prev]);
    };

    return (
        <div className="container" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Practical 5: Side Effects</h1>
                <p style={{ color: 'var(--slate-500)' }}>
                    Using <code>useEffect</code> to hook into component lifecycle (Mount & Update).
                </p>
            </div>

            <div style={{ margin: '1rem 0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                    <input
                        type="checkbox"
                        checked={isMounted}
                        onChange={() => setIsMounted(!isMounted)}
                    />
                    <span>Mount/Unmount Component</span>
                </label>
            </div>

            {isMounted ? <LifecycleDemo addLog={addLog} /> : <div style={{ padding: '2rem', color: '#999' }}>Component Unmounted</div>}

            <div className="p5-console">
                <div style={{ color: '#aaa', borderBottom: '1px solid #444', paddingBottom: '0.5rem', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}>
                    <span>CONSOLE LOGS</span>
                    <button onClick={() => setLogs([])} style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer', fontSize: '0.8rem' }}>Clear</button>
                </div>
                {logs.map((log, index) => (
                    <div key={index} className="log-entry">
                        <span className="log-time">[{log.time}]</span>
                        <span className="log-msg">{log.message}</span>
                    </div>
                ))}
                {logs.length === 0 && <div style={{ color: '#555', fontStyle: 'italic' }}>Waiting for logs...</div>}
            </div>
        </div>
    );
};
