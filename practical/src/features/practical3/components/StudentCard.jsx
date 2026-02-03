import React from 'react';

/**
 * StudentCard Component
 * Displays student information passed via props.
 * 
 * @param {Object} props
 * @param {string} props.name - Full name of the student
 * @param {string} props.rollNumber - Unique ID/Roll Number
 * @param {string} props.branch - Field of study (CSE, IT, etc.)
 */
export const StudentCard = ({ name, rollNumber, branch }) => {
    // Generate initials from name for the avatar
    const initials = name
        .split(' ')
        .map(n => n[0])
        .join('')
        .substring(0, 2)
        .toUpperCase();

    return (
        <div className="student-card">
            <div className="student-avatar">
                {initials}
            </div>
            <h3 className="student-name">{name}</h3>
            <span className="student-branch">{branch}</span>

            <div className="student-details">
                <span>Roll No:</span>
                <strong style={{ color: 'var(--slate-700)' }}>{rollNumber}</strong>
            </div>
        </div>
    );
};
