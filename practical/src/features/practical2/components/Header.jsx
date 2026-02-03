import React from 'react';

export const Header = ({ studentName }) => {
    return (
        <header className="p2-header">
            <h2>Student Assignment</h2>
            <div className="p2-user-badge">
                User: {studentName}
            </div>
        </header>
    );
};
