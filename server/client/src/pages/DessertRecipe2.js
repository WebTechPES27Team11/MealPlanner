import React from "react";
import DessertImage from "./images/DessertRecipe2.jpg"; // Adjust the path as needed

function ChiaPudd() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Chia Pudding with Fresh Mango</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 3 tbsp chia seeds<br />
            - 1 cup milk or almond milk<br />
            - 1 tbsp honey or maple syrup (optional)<br />
            - 1/2 cup fresh mango, diced<br /><br />

            <strong>Instructions:</strong><br />
            1. In a bowl or jar, combine the chia seeds, milk, and honey or maple syrup if using.<br />
            2. Stir well to prevent clumps and refrigerate for at least 2 hours or overnight until thickened.<br />
            3. Top the chia pudding with fresh mango before serving.<br />
            4. Serve chilled as a refreshing dessert or snack.<br />
          </p>
        </div>
        <img
          src={DessertImage}
          alt="Chia Pudding with Fresh Mango"
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
    maxWidth: "500px", // Smaller size
    maxHeight: "450px", // Keeps proportions
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

export default ChiaPudd;
