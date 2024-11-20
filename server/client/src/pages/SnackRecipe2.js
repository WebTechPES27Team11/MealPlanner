import React from "react";
import SnackImage from "./images/SnackRecipe2.jpg"; // Adjust the path as needed

function VegStic() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Vegetable Sticks with Greek Yogurt Dip</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 1 cup carrots, cut into sticks<br />
            - 1 cup cucumber, cut into sticks<br />
            - 1 cup bell peppers, cut into sticks<br />
            - 1 cup Greek yogurt<br />
            - 1 tsp lemon juice<br />
            - 1/2 tsp garlic powder<br />
            - Salt and pepper (to taste)<br /><br />

            <strong>Instructions:</strong><br />
            1. In a bowl, mix the Greek yogurt, lemon juice, garlic powder, salt, and pepper to make the dip.<br />
            2. Arrange the vegetable sticks on a plate.<br />
            3. Serve the vegetable sticks with the Greek yogurt dip on the side.<br />
          </p>
        </div>
        <img
          src={SnackImage}
          alt="Vegetable Sticks with Greek Yogurt Dip"
          style={styles.image}
        />
      </div>
      <br /><br />
      <a href="/snack" style={styles.link}>Back to Snack Recipes</a>
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
    maxWidth: "500px", // Max width for image
    maxHeight: "500px", // Max height
    borderRadius: "10px",
    objectFit: "cover", // Ensures the image scales correctly
  },
  link: {
    fontSize: "1rem",
    color: "#D2691E",
    textDecoration: "none",
    textAlign: "center",
  },
};

export default VegStic;
