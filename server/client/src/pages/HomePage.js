import React from 'react';
import { Link } from 'react-router-dom';
import MealCard from '../components/MealCard';
import Button from '../components/Button';
import PersonalizedPlanSection from '../components/PersonalizedPlanSection';
import '../styles.css';
import breakfastImage from '../Web-Tech-Styling-Pictures/bkfst.jpg';
import lunchImage from '../Web-Tech-Styling-Pictures/lunch.jpg';
import dinnerImage from '../Web-Tech-Styling-Pictures/dinner.jpg';
import snackImage from '../Web-Tech-Styling-Pictures/snack.jpg';
import dessertImage from '../Web-Tech-Styling-Pictures/dessert.jpg';

function HomePage() {
    return (
        <div className="home-page">
            {/* Welcome Section */}
            <section className="welcome-section">
                <h2 className="welcome-heading">Welcome to Meal Planning Service</h2>
                <p className="welcome-description">Your guide to personalized and balanced meals.</p>
            </section>

            {/* Meal Gallery Section */}
            <section className="meal-gallery-section">
                <h2>Explore Our Meal Gallery</h2>
                <p>Curated options for every time of the day</p>
                <div className="meal-gallery">
                    <Link to="/breakfast">
                        <MealCard title="Balanced Breakfasts" backgroundImage={breakfastImage} />
                    </Link>
                    <Link to="/lunch">
                        <MealCard title="Hearty Lunch" backgroundImage={lunchImage} />
                    </Link>
                    <Link to="/dinner">
                        <MealCard title="Delicious Dinner" backgroundImage={dinnerImage} />
                    </Link>
                    <Link to="/snack">
                        <MealCard title="Nutritious Snack" backgroundImage={snackImage} />
                    </Link>
                    <Link to="/dessert">
                        <MealCard title="Healthy Dessert" backgroundImage={dessertImage} />
                    </Link>
                </div>
            </section>

            {/* Personalized Plan Section */}
            <PersonalizedPlanSection />

            {/* How It Works Section */}
            <section className="instructions-container">
                <h2 className="instructions-title">How It Works</h2>
                <p className="instructions-subtitle">
                    Follow these easy steps to generate your personalized meal plans and start your journey to a healthier you.
                </p>
                <div className="instructions">
                    <div className="instruction-step">
                        <span className="step-label">STEP 1</span>
                        <h3>Sign Up</h3>
                        <p>No sign up required! Easy to use, personalized diet recommendations</p>
                    </div>
                    <div className="instruction-step">
                        <span className="step-label">STEP 2</span>
                        <h3>Set Your Preferences</h3>
                        <p>Tell us about your dietary needs and preferences to tailor your meal plans.</p>
                    </div>
                    <div className="instruction-step">
                        <span className="step-label">STEP 3</span>
                        <h3>Generate Meal Plan</h3>
                        <p>Receive your personalized meal plan instantly and start cooking.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePage;
