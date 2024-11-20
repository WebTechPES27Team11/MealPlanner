import React from 'react';
import RecipeImage from './images/BreakfastRecipe1.jpg'; // Adjust the path if necessary

function BreakfastRecipe1() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Avocado Toast with Poached Egg</h1>
            <div style={styles.content}>
                <div style={styles.text}>
                    <p style={styles.recipeDetails}>
                        <strong>Ingredients:</strong><br />
                        - 1 ripe avocado<br />
                        - 2 slices of whole-grain bread<br />
                        - 2 eggs<br />
                        - Salt and pepper (to taste)<br />
                        - Red pepper flakes (optional)<br />
                        - Olive oil (optional)<br /><br />
                        <strong>Instructions:</strong><br />
                        1. Toast the slices of bread in a toaster or on a skillet until golden brown.<br />
                        2. While the bread is toasting, bring a pot of water to a gentle simmer. Crack the eggs into separate bowls.<br />
                        3. Stir the water gently to create a whirlpool, then carefully slide the eggs into the water one by one. Poach for 3-4 minutes for runny yolks or longer for firmer eggs.<br />
                        4. Mash the avocado in a bowl, seasoning with salt, pepper, and a drizzle of olive oil if desired.<br />
                        5. Spread the mashed avocado onto the toasted bread.<br />
                        6. Place the poached egg on top, sprinkle with red pepper flakes and additional seasoning if desired.<br />
                        7. Serve immediately.<br />
                    </p>
                </div>
                <img
                    src={RecipeImage}
                    alt="Avocado Toast with Poached Egg"
                    style={styles.image}
                />
            </div>
            <br /><br />
            <a href="/breakfast" style={styles.link}>Back to Breakfast Recipes</a>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "#FFF8F0",
        color: "#333",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        padding: "40px 20px",
        minHeight: "100vh",
    },
    title: {
        fontSize: "2.5rem",
        fontWeight: "600",
        marginBottom: "20px",
        color: "#D2691E",
        textAlign: "center",
    },
    content: {
        display: "flex", // Enables flexbox
        justifyContent: "space-between", // Creates space between the text and image
        alignItems: "flex-start", // Aligns the text and image at the top
    },
    text: {
        flex: "1", // Makes the text take up available space
        maxWidth: "60%", // Restricts the text's width to 60% of the container
        paddingRight: "20px", // Adds spacing between the text and image
    },
    recipeDetails: {
        fontSize: "1.2rem",
        lineHeight: "1.7",
    },
    image: {
        flex: "1",
        maxWidth: "600px", // Adjusted image size
        maxHeight: "600px", // Keeps it proportional
        borderRadius: "10px",
        objectFit: "cover", // Ensures proper scaling
      },
    link: {
        color: "#D2691E",
        textDecoration: "none",
        fontSize: "1.2rem",
    },
};

export default BreakfastRecipe1;
