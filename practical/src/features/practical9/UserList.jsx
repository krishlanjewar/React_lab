import React, { useState, useEffect } from 'react';
import './UserList.css';

export const UserList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from Open Food Facts API
        fetch('https://world.openfoodfacts.org/api/v2/search?page_size=24')
            .then(response => response.json())
            .then(result => {
                // Open Food Facts API returns a list of products inside the "products" property
                if (result.products) {
                    setData(result.products);
                } else if (Array.isArray(result)) {
                    setData(result);
                } else {
                    setData([]);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    // Show loading screen when data is loading
    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p className="loading-text">Loading Products...</p>
            </div>
        );
    }

    // Show the response in a list
    return (
        <div className="user-list-container">
            <h2 className="page-title">
                Explore <span className="title-highlight">Food Products</span>
            </h2>

            <div className="models-grid">
                {data.map((item, index) => (
                    <div key={item._id || index} className="model-card">
                        {item.image_url && (
                            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                                <img src={item.image_url} alt={item.product_name} style={{ maxHeight: '150px', maxWidth: '100%', borderRadius: '8px' }} />
                            </div>
                        )}
                        <h3 className="model-name" title={item.product_name || "Unknown Product"}>
                            {item.product_name || "Unknown Product"}
                        </h3>

                        <div>
                            <span className="model-id-badge">
                                {item.brands || "Unknown Brand"}
                            </span>
                        </div>

                        <p className="model-description" title={item.categories}>
                            {item.categories ? item.categories.split(',').slice(0, 3).join(', ') : "No category available."}
                        </p>

                        <div className="model-footer">
                            <span>Qty: <span className="version-tag">{item.quantity || 'N/A'}</span></span>

                            {item.nutrition_grades && (
                                <div className="feature-tag" style={{ textTransform: 'uppercase' }}>
                                    Score: {item.nutrition_grades}
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {data.length === 0 && (
                    <div className="empty-state">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p>No products accessible or an error occurred.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
