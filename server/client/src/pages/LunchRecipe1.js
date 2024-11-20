import React from "react";
import LunchImage from "./images/LunchRecipe1.jpg"; // Adjust the path as needed

function QuinSalad() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Quinoa Salad with Roasted Vegetables</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 1 cup quinoa<br />
            - 2 cups water or vegetable broth<br />
            - 1 red bell pepper, diced<br />
            - 1 zucchini, diced<br />
            - 1 red onion, diced<br />
            - 2 tbsp olive oil<br />
            - Salt and pepper (to taste)<br />
            - 1/4 cup feta cheese (optional)<br />
            - 2 tbsp fresh parsley, chopped<br /><br />

            <strong>Instructions:</strong><br />
            1. Preheat the oven to 400°F (200°C).<br />
            2. In a bowl, toss the diced vegetables with olive oil, salt, and pepper. Spread them on a baking sheet.<br />
            3. Roast the vegetables in the oven for 20-25 minutes, or until tender.<br />
            4. Meanwhile, rinse the quinoa under cold water and cook it in water or vegetable broth according to package instructions.<br />
            5. In a large bowl, combine the cooked quinoa, roasted vegetables, and feta cheese.<br />
            6. Garnish with fresh parsley and serve warm or chilled.<br />
          </p>
        </div>
        <img
          src={LunchImage}
          alt="Quinoa Salad with Roasted Vegetables"
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

export default QuinSalad;
