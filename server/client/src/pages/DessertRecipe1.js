import React from "react";
import DessertImage from "./images/DessertRecipe1.jpg"; // Adjust the path if necessary

function DarkChoc() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dark Chocolate-Covered Strawberries</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 1 cup fresh strawberries<br />
            - 1/2 cup dark chocolate, chopped<br /><br />

            <strong>Instructions:</strong><br />
            1. Melt the dark chocolate in a microwave or double boiler until smooth.<br />
            2. Dip each strawberry into the melted chocolate, coating about two-thirds of the fruit.<br />
            3. Place the chocolate-covered strawberries on a parchment-lined baking sheet.<br />
            4. Allow the chocolate to set at room temperature or refrigerate for quicker results.<br />
            5. Serve once the chocolate is firm.<br />
          </p>
        </div>
        <img
          src={DessertImage}
          alt="Dark Chocolate-Covered Strawberries"
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
    maxWidth: "400px", // Adjusted image size
    maxHeight: "400px", // Keeps it proportional
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

export default DarkChoc;
