import React from "react";

function BanCream() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Banana Nice Cream</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 2 ripe bananas, sliced and frozen<br/>
- 1/2 tsp vanilla extract (optional)<br/><br/>

<strong>Instructions:</strong><br/>
1. Place the frozen banana slices in a blender or food processor.<br/>
2. Blend until smooth and creamy, scraping down the sides as needed.<br/>
3. Add vanilla extract for extra flavor, if desired.<br/>
4. Serve immediately as soft-serve or freeze for an hour for a firmer texture.<br/>
5. Enjoy a healthy and delicious frozen treat.<br/>
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

export default BanCream;
