import React from 'react';
import { useNavigate } from 'react-router-dom';

import meal1Image from '../Web-Tech-Styling-Pictures/meal1.jpg';
import meal2Image from '../Web-Tech-Styling-Pictures/meal2.jpg';
import meal3Image from '../Web-Tech-Styling-Pictures/meal3.jpg';

function PersonalizedPlanSection() {
    const navigate = useNavigate();

    const handleGenerateClick = () => {
        navigate('/meal-planner');
    };

    return (
        <section className="personalized-plan-section" id="personalized-plan">
            <div className="section-content">
                <div className="text-content">
                    <h2>Your Personalized Meal Plan and Recipe Generator</h2>
                    <p>Achieve your health goals with customized meal plans and delicious recipes, crafted just for you.</p>
                    <button onClick={handleGenerateClick} className="custom-button">
                        Generate Meal Plan
                    </button>
                </div>
                <div className="image-gallery">
                    <img src={meal1Image} alt="Meal 1" className="section-image img-1" />
                    <img src={meal2Image} alt="Meal 2" className="section-image img-2" />
                    <img src={meal3Image} alt="Meal 3" className="section-image img-3" />
                </div>
            </div>
        </section>
    );
}

export default PersonalizedPlanSection;
