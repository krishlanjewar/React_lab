import React from 'react';

export const Footer = () => {
    const today = new Date().toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <footer className="p2-footer">
            <p>Todays Date: {today}</p>
        </footer>
    );
};
