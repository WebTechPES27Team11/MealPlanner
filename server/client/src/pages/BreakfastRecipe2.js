import React from "react";
import ParfaitImage from "./images/BreakfastRecipe2.jpg"; // Adjust the path if necessary

function YogurtParfait() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Greek Yogurt Parfait with Granola & Berries</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 1 cup Greek yogurt (unsweetened)<br />
            - ½ cup granola<br />
            - ½ cup mixed berries (strawberries, blueberries, raspberries)<br />
            - Honey or maple syrup (optional)<br /><br />

            <strong>Instructions:</strong><br />
            1. In a glass or bowl, layer half of the Greek yogurt.<br />
            2. Add a layer of granola followed by a layer of mixed berries.<br />
            3. Repeat with the remaining yogurt, granola, and berries.<br />
            4. Drizzle with honey or maple syrup if desired.<br />
            5. Serve immediately for a fresh, crunchy parfait.<br />
          </p>
        </div>
        <img
          src={ParfaitImage}
          alt="Greek Yogurt Parfait with Granola & Berries"
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
    maxWidth: "500px", // Adjusted image size
    maxHeight: "500px", // Keeps it proportional
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

export default YogurtParfait;
