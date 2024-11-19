import React from "react";

function AppSlic() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Apple Slices with Almond Butter</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 apple, sliced<br/>
- 2 tbsp almond butter<br/><br/>

<strong>Instructions:</strong><br/>
1. Slice the apple into wedges.<br/>
2. Serve the apple slices with a side of almond butter for dipping.<br/>
3. Enjoy as a quick, nutritious snack.<br/>
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

export default AppSlic;
