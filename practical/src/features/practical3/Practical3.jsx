import React, { useState } from 'react';
import { StudentCard } from './components/StudentCard';
import './Practical3.css';

const INITIAL_STUDENTS = [
    { id: 1, name: 'Shivnayan ', rollNumber: 'CE-24003122', branch: 'Computer Science' },
    { id: 2, name: 'Krish Lanjewar', rollNumber: 'CE-24003092', branch: 'Info Tech' },
    { id: 3, name: 'Rohan Mehta', rollNumber: 'EC-2024-102', branch: 'Electronics' },
];

export const Practical3 = () => {
    const [students, setStudents] = useState(INITIAL_STUDENTS);
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        branch: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate that all fields are filled
        if (!formData.name || !formData.rollNumber || !formData.branch) {
            alert('Please fill in all fields');
            return;
        }

        // Create new student with unique ID
        const newStudent = {
            id: Date.now(),
            name: formData.name,
            rollNumber: formData.rollNumber,
            branch: formData.branch
        };

        // Add to students list
        setStudents(prev => [...prev, newStudent]);

        // Reset form
        setFormData({
            name: '',
            rollNumber: '',
            branch: ''
        });
    };

    return (
        <div className="container" style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>Practical 3: Props & Reusability</h1>
                <p style={{ color: 'var(--slate-500)' }}>
                    Dynamically add students and see them displayed as cards using Props.
                </p>
            </div>

            {/* Add Student Form */}
            <div style={{
                maxWidth: '600px',
                margin: '0 auto 2rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                border: '1px solid var(--slate-200)'
            }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem', color: 'var(--slate-700)' }}>
                    Add New Student
                </h3>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--slate-600)' }}>
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter student name"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid var(--slate-300)',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--slate-600)' }}>
                            Roll Number
                        </label>
                        <input
                            type="text"
                            name="rollNumber"
                            value={formData.rollNumber}
                            onChange={handleInputChange}
                            placeholder="e.g., CS-2024-001"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid var(--slate-300)',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: 'var(--slate-600)' }}>
                            Branch
                        </label>
                        <input
                            type="text"
                            name="branch"
                            value={formData.branch}
                            onChange={handleInputChange}
                            placeholder="e.g., Computer Science"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                border: '1px solid var(--slate-300)',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.2s'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            background: 'var(--blue-600)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={(e) => e.target.style.background = 'var(--blue-700)'}
                        onMouseOut={(e) => e.target.style.background = 'var(--blue-600)'}
                    >
                        Add Student
                    </button>
                </form>
            </div>

            {/* Student Cards Grid */}
            <div className="p3-grid">
                {students.map((student) => (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        rollNumber={student.rollNumber}
                        branch={student.branch}
                    />
                ))}
            </div>

            <div style={{ marginTop: '2rem', padding: '1rem', background: '#f8fafc', borderRadius: '8px', border: '1px dashed var(--slate-300)', maxWidth: '600px', margin: '2rem auto' }}>
                <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Total Students: {students.length}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--slate-600)', margin: 0 }}>
                    Add new students using the form above and watch them appear as cards below!
                </p>
            </div>
        </div>
    );
};
