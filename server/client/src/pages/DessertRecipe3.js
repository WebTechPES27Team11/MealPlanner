import React from "react";
import DessertImage from "./images/DessertRecipe3.jpg"; // Adjust the path as needed

function BanCream() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Banana Nice Cream</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 2 ripe bananas, sliced and frozen<br />
            - 1/2 tsp vanilla extract (optional)<br /><br />

            <strong>Instructions:</strong><br />
            1. Place the frozen banana slices in a blender or food processor.<br />
            2. Blend until smooth and creamy, scraping down the sides as needed.<br />
            3. Add vanilla extract for extra flavor, if desired.<br />
            4. Serve immediately as soft-serve or freeze for an hour for a firmer texture.<br />
            5. Enjoy a healthy and delicious frozen treat.<br />
          </p>
        </div>
        <img
          src={DessertImage}
          alt="Banana Nice Cream"
          style={styles.image}
        />
      </div>
      <br /><br />
      <a href="/dessert" style={styles.link}>Back to Dessert Recipes</a>
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
    maxWidth: "500px", // Updated size
    maxHeight: "450px", // Updated size
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

export default BanCream;
