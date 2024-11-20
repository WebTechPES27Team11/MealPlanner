import React from 'react';

function RecipeCard({ recipeName }) {
    return (
        <div className="recipe-card">
            <h3>{recipeName}</h3>
            <p>View ingredients and cooking instructions.</p>
        </div>
    );
}

export default RecipeCard;
