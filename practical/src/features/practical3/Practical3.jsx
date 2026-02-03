import React from 'react';
import { StudentCard } from './components/StudentCard';
import './Practical3.css';

const STUDENTS = [
    { id: 1, name: 'Amit Sharma', rollNumber: 'CS-2024-001', branch: 'Computer Science' },
    { id: 2, name: 'Priya Patel', rollNumber: 'IT-2024-045', branch: 'Info Tech' },
    { id: 3, name: 'Rohan Mehta', rollNumber: 'EC-2024-102', branch: 'Electronics' },
];

export const Practical3 = () => {
    return (
        <div className="container" style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Practical 3: Props & Reusability</h1>
                <p style={{ color: 'var(--slate-500)' }}>
                    Passing data from a parent component to child components using Props.
                </p>
            </div>

            <div className="p3-grid">
                {STUDENTS.map((student) => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        rollNumber={student.rollNumber}
                        branch={student.branch}
                    />
                ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px dashed var(--slate-300)', maxWidth: '600px', margin: '2rem auto' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>How it works:</h4>
                <code style={{ fontSize: '0.85rem', color: 'var(--slate-600)' }}>
                    &lt;StudentCard name="{STUDENTS[0].name}" rollNumber="{STUDENTS[0].rollNumber}" ... /&gt;
                </code>
            </div>
        </div>
    );
};
