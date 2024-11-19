import React from "react";

function WheatPast() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Whole-Wheat Pasta with Pesto and Cherry Tomatoes</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 8 oz whole-wheat pasta<br/>
- 1/2 cup pesto sauce<br/>
- 1 cup cherry tomatoes, halved<br/>
- Salt and pepper (to taste)<br/><br/>

<strong>Instructions:</strong><br/>
1. Cook the whole-wheat pasta according to package instructions.<br/>
2. While the pasta cooks, halve the cherry tomatoes.<br/>
3. Once the pasta is cooked and drained, toss it with pesto sauce until well-coated.<br/>
4. Stir in the cherry tomatoes and season with salt and pepper.<br/>
5. Serve warm, garnished with Parmesan cheese if desired.<br/>
</p>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#FFF8F0",
    color: "#333",
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    padding: "40px 20px",
    textAlign: "center",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#D2691E",
  },
  recipeDetails: {
    fontSize: "1.2rem",
    lineHeight: "1.7",
    maxWidth: "750px",
    textAlign: "left",
  },
};

export default WheatPast;
