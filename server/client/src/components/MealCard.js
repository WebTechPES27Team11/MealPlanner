// MealCard.js
import React from 'react';
import '../styles.css';

function MealCard({ title, backgroundImage }) {
    return (
        <div className="meal-card" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h3>{title}</h3>
        </div>
    );
}

export default MealCard;
