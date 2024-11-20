import React from "react";
import SnackImage from "./images/SnackRecipe3.jpg"; // Adjust the path to where the image is located

function TrailMix() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Homemade Trail Mix</h1>
      <div style={styles.content}>
        <div style={styles.text}>
          <p style={styles.recipeDetails}>
            <strong>Ingredients:</strong><br />
            - 1/2 cup almonds<br />
            - 1/2 cup walnuts<br />
            - 1/2 cup cashews<br />
            - 1/4 cup dried cranberries<br />
            - 1/4 cup raisins<br />
            - 1/4 cup dark chocolate chips<br /><br />

            <strong>Instructions:</strong><br />
            1. In a large bowl, combine all the ingredients.<br />
            2. Mix well to distribute the nuts, dried fruit, and chocolate chips evenly.<br />
            3. Store the trail mix in an airtight container for snacking.<br />
          </p>
        </div>
        <img
          src={SnackImage}
          alt="Homemade Trail Mix"
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
    maxHeight: "450px", // Max height
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

export default TrailMix;
