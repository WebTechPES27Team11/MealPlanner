import React from "react";
import DinnerImage from "./images/DinnerRecipe1.jpg"; // Adjust the path as needed

function BakedSal() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Baked Salmon with Steamed Vegetables</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 2 salmon fillets<br />
            - 1 tbsp olive oil<br />
            - Salt and pepper (to taste)<br />
            - 1 lemon, sliced<br />
            - 1 cup broccoli florets<br />
            - 1 cup carrots, sliced<br /><br />

            <strong>Instructions:</strong><br />
            1. Preheat the oven to 375°F (190°C).<br />
            2. Place the salmon fillets on a baking sheet, drizzle with olive oil, and season with salt, pepper, and lemon slices.<br />
            3. Bake the salmon for 12-15 minutes, until the fish is cooked through.<br />
            4. While the salmon bakes, steam the broccoli and carrots until tender, about 5-7 minutes.<br />
            5. Serve the salmon fillets with the steamed vegetables on the side.<br />
          </p>
        </div>
        <img
          src={DinnerImage}
          alt="Baked Salmon with Steamed Vegetables"
          style={styles.image}
        />
      </div>
      <br /><br />
      <a href="/dinner" style={styles.link}>Back to Dinner Recipes</a>
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
    maxHeight: "500px", // Updated size
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

export default BakedSal;
