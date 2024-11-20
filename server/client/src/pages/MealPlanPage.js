import React from 'react';
import { useLocation } from 'react-router-dom';

const MealPlanPage = () => {
  const location = useLocation();
  const { recipes } = location.state || { recipes: {} }; // Default to an empty object if no recipes

  // Render Ingredients with additional checks for undefined or empty arrays
  const renderIngredients = (ingredients) => {
    if (!ingredients) return null; // If ingredients is undefined or null, return nothing

    return (
      <>
        <h3 style={{ fontSize: '24px', color: '#333' }}>Ingredients</h3>
        <h4 style={{ fontSize: '20px', color: '#555' }}>Main Ingredients:</h4>
        <ul style={{ paddingLeft: '20px' }}>
          {ingredients.main && ingredients.main.length > 0 ? (
            ingredients.main.map((ingredient, index) => (
              <li key={index} style={{ fontSize: '16px', marginBottom: '8px' }}>
                {ingredient.item} ({ingredient.quantity}) {ingredient.notes ? `- ${ingredient.notes}` : ''}
              </li>
            ))
          ) : (
            <li style={{ fontSize: '16px', color: 'gray' }}>No main ingredients available</li> // Fallback message if no main ingredients
          )}
        </ul>
        <h4 style={{ fontSize: '20px', color: '#555' }}>Spices:</h4>
        <ul style={{ paddingLeft: '20px' }}>
          {ingredients.spices && ingredients.spices.length > 0 ? (
            ingredients.spices.map((spice, index) => (
              <li key={index} style={{ fontSize: '16px', marginBottom: '8px' }}>
                {spice.item} ({spice.quantity}) {spice.notes ? `- ${spice.notes}` : ''}
              </li>
            ))
          ) : (
            <li style={{ fontSize: '16px', color: 'gray' }}>No spices available</li> // Fallback message if no spices
          )}
        </ul>
      </>
    );
  };

  // Render Instructions with additional check
  const renderInstructions = (instructions) => {
    if (!instructions || instructions.length === 0) return <p>No instructions available</p>; // Handle missing or empty instructions

    return (
      <>
        <h3 style={{ fontSize: '24px', color: '#333' }}>Instructions</h3>
        <ol style={{ paddingLeft: '20px' }}>
          {instructions.map((step, index) => (
            <li key={index} style={{ fontSize: '16px', marginBottom: '8px' }}>{step}</li>
          ))}
        </ol>
      </>
    );
  };

  // Render Nutritional Info with additional checks
  const renderNutritionalInfo = (nutritionalInfo) => {
    if (!nutritionalInfo) return null; // If no nutritional info available, return nothing

    return (
      <>
        <h3 style={{ fontSize: '24px', color: '#333' }}>Nutritional Info</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ fontSize: '16px', marginBottom: '8px' }}>Calories: {nutritionalInfo.calories}</li>
          <li style={{ fontSize: '16px', marginBottom: '8px' }}>Protein: {nutritionalInfo.protein}</li>
          <li style={{ fontSize: '16px', marginBottom: '8px' }}>Fat: {nutritionalInfo.fat}</li>
          <li style={{ fontSize: '16px', marginBottom: '8px' }}>Carbohydrates: {nutritionalInfo.carbohydrates}</li>
        </ul>
      </>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '35px', color: '#333' }}>{recipes.name || "Recipe Name"}</h1> {/* Default to 'Recipe Name' if recipes.name is undefined */}
      <div style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
        {recipes.ingredients && renderIngredients(recipes.ingredients)}
        {recipes.instructions && renderInstructions(recipes.instructions)}
        {recipes.nutritional_info && renderNutritionalInfo(recipes.nutritional_info)}
      </div>
    </div>
  );
};

export default MealPlanPage;
