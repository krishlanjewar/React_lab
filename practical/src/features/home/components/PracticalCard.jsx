import React from 'react';
import { Link } from 'react-router-dom';
import './PracticalCard.css';

/**
 * Reusable Card Component for Practicals
 * @param {Object} props
 * @param {string} props.title - The title of the practical
 * @param {string} props.description - Short summary
 * @param {string} props.icon - A simple emoji or short string icon
 * @param {string} props.link - Where this card should navigate to
 */
export const PracticalCard = ({ title, description, icon, link }) => {
    return (
        <Link to={link} className="practical-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-content">
                <div className="card-header">
                    <div className="card-icon">{icon || '⚡'}</div>
                </div>
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
            </div>
            <div className="card-footer">
                <span>Start Module</span>
                <span>→</span>
            </div>
        </Link>
    );
};
