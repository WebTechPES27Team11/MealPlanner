import React from "react";
import SnackImage from "./images/SnackRecipe1.jpg"; // Adjust the path as needed

function AppSlic() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Apple Slices with Almond Butter</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 1 apple, sliced<br />
            - 2 tbsp almond butter<br /><br />

            <strong>Instructions:</strong><br />
            1. Slice the apple into wedges.<br />
            2. Serve the apple slices with a side of almond butter for dipping.<br />
            3. Enjoy as a quick, nutritious snack.<br />
          </p>
        </div>
        <img
          src={SnackImage}
          alt="Apple Slices with Almond Butter"
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

export default AppSlic;
