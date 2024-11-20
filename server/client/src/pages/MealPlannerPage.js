import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const MealPlannerPage = () => {
    const [formData, setFormData] = useState({
        age: '',
        gender: '',
        height: '',
        weight: '',
        fitnessGoal: '',
        food: '',
        cuisine: '',
    });

    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
    
        console.log("Form submission triggered"); // Debug: Ensure this function is called
    
        try {
            // Debug: Log the API URL and the form data being sent
            console.log("API URL:", 'http://localhost:8000/api/getRecipe');
            console.log("Form Data:", formData);
    
            const response = await fetch('http://localhost:8000/api/getRecipe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fitnessGoal: formData.fitnessGoal,
                    foodType: formData.food,
                    cuisine: formData.cuisine,
                }),
            });
    
            // Debug: Log the response status
            console.log("API Response Status:", response.status);
    
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
    
            const recipes = await response.json();
    
            // Debug: Log the fetched recipes before navigating
            console.log("Fetched Recipes:", recipes);
    
            // Pass data to the next page
            navigate('/meal-plan', { state: { recipes } });
        } catch (error) {
            // Debug: Log any errors
            console.error('Error fetching recipes:', error);
            alert('Cannot fetch recipes, please try again later');
        }
    };

    return (
        <div className="meal-planner-container">
            <h2>Meal Planner</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        min="0"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label>Height (in cm):</label>
                    <input
                        type="number"
                        min="0"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Weight (in kg):</label>
                    <input
                        type="number"
                        min="0"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Fitness Goal:</label>
                    <select
                        name="fitnessGoal"
                        value={formData.fitnessGoal}
                        onChange={handleChange}
                    >
                        <option value="">Select Goal</option>
                        <option value="weight_loss">Weight Loss</option>
                        <option value="weight_gain">Weight Gain</option>
                    </select>
                </div>
                <div>
                    <label>Food Type:</label>
                    <select
                        name="food"
                        value={formData.food}
                        onChange={handleChange}
                    >
                        <option value="">Select Type</option>
                        <option value="veg">Vegetarian</option>
                        <option value="nonveg">Non-Vegetarian</option>
                    </select>
                </div>
                <div>
                    <label>Cuisine:</label>
                    <select
                        name="cuisine"
                        value={formData.cuisine}
                        onChange={handleChange}
                    >
                        <option value="">Select Cuisine</option>
                        <option value="Indian">Indian</option>
                        <option value="Continental">Continental</option>
                        <option value="Mediterranean">Mediterranean</option>
                    </select>
                </div>
                <br />
                <button type="submit">Generate Meal Plan</button>
            </form>

            
        </div>
    );
};

export default MealPlannerPage;
