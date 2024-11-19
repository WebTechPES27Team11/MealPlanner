import React from "react";

function VegStic() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Vegetable Sticks with Greek Yogurt Dip</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 cup carrots, cut into sticks<br/>
- 1 cup cucumber, cut into sticks<br/>
- 1 cup bell peppers, cut into sticks<br/>
- 1 cup Greek yogurt<br/>
- 1 tsp lemon juice<br/>
- 1/2 tsp garlic powder<br/>
- Salt and pepper (to taste)<br/><br/>

<strong>Instructions:</strong><br/>
1. In a bowl, mix the Greek yogurt, lemon juice, garlic powder, salt, and pepper to make the dip.<br/>
2. Arrange the vegetable sticks on a plate.<br/>
3. Serve the vegetable sticks with the Greek yogurt dip on the side.<br/>
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

export default VegStic;
