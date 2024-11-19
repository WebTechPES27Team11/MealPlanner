import React from 'react';
import { Link } from 'react-router-dom';

function DinnerPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Dinner Recipes</h1>
            <div style={styles.recipeList}>
                <Link to="/dinner/recipe1" style={styles.recipeLink}>Baked Salmon with Steamed Vegetables</Link>
                <Link to="/dinner/recipe2" style={styles.recipeLink}>Vegetarian Stir-fry with Tofu</Link>
                <Link to="/dinner/recipe3" style={styles.recipeLink}>Whole-Wheat Pasta with Pesto and Cherry Tomatoes</Link>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '40px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        backgroundColor: '#FFF8F0', // Warm off-white background
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: '3rem',
        color: '#A0522D', // Muted brownish-red for the title
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
    recipeList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center',
    },
    recipeLink: {
        fontSize: '1.5rem',
        color: '#FFFFFF',
        textDecoration: 'none',
        padding: '15px 25px',
        border: '2px solid #A0522D', // Muted brownish-red border
        borderRadius: '12px',
        backgroundColor: '#A0522D', // Muted brownish-red background for buttons
        textAlign: 'center',
        width: '300px',
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
    recipeLinkHover: {
        backgroundColor: '#8B4513', // Darker brown for hover effect
        borderColor: '#8B4513',
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 20px rgba(0, 0, 0, 0.2)',
    },
};

export default DinnerPage;
