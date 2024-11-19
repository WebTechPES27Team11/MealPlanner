import React from 'react';
import { Link } from 'react-router-dom';

function SnackPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Snack Recipes</h1>
            <div style={styles.recipeList}>
                <Link to="/snack/recipe1" style={styles.recipeLink}>Apple Slices with Almond Butter</Link>
                <Link to="/snack/recipe2" style={styles.recipeLink}>Vegetable Sticks with Greek Yogurt Dip</Link>
                <Link to="/snack/recipe3" style={styles.recipeLink}>Homemade Trail Mix</Link>
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
        color: '#A0522D', // Muted brownish-red title
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

export default SnackPage;
