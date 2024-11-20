import React from "react";
import LunchImage from "./images/LunchRecipe2.jpg"; // Adjust the path as needed

function GrilChick() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Grilled Chicken Wrap with Hummus</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 2 chicken breasts<br />
            - 4 whole-wheat tortillas<br />
            - 1/2 cup hummus<br />
            - 1 cup lettuce, shredded<br />
            - 1 tomato, sliced<br />
            - 1 cucumber, sliced<br />
            - Salt and pepper (to taste)<br />
            - Olive oil for grilling<br /><br />

            <strong>Instructions:</strong><br />
            1. Season the chicken breasts with salt, pepper, and a drizzle of olive oil.<br />
            2. Grill the chicken over medium-high heat for 6-7 minutes per side, until fully cooked.<br />
            3. Slice the chicken into strips.<br />
            4. Lay the tortillas flat and spread a thin layer of hummus on each.<br />
            5. Add lettuce, tomato, cucumber, and grilled chicken to the center.<br />
            6. Roll up the tortillas, folding in the sides as you go.<br />
            7. Slice the wraps in half and serve.<br />
          </p>
        </div>
        <img
          src={LunchImage}
          alt="Grilled Chicken Wrap with Hummus"
          style={styles.image}
        />
      </div>
      <br /><br />
      <a href="/lunch" style={styles.link}>Back to Lunch Recipes</a>
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
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#D2691E",
    textAlign: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "20px",
  },
  text: {
    flex: "1",
    maxWidth: "60%",
  },
  recipeDetails: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    textAlign: "left",
  },
  image: {
    flex: "1",
    maxWidth: "500px", // Max width
    maxHeight: "750px", // Max height
    borderRadius: "10px",
    objectFit: "cover", // Ensures proper scaling
  },
  link: {
    fontSize: "1rem",
    color: "#D2691E",
    textDecoration: "none",
    textAlign: "center",
  },
};

export default GrilChick;
