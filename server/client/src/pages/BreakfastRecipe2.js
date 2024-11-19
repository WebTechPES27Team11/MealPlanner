import React from "react";

function YogurtParfait() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Greek Yogurt Parfait with Granola & Berries</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 cup Greek yogurt (unsweetened)<br/>
- ½ cup granola<br/>
- ½ cup mixed berries (strawberries, blueberries, raspberries)<br/>
- Honey or maple syrup (optional)<br/><br/>

<strong>Instructions:</strong><br/>
1. In a glass or bowl, layer half of the Greek yogurt.<br/>
2. Add a layer of granola followed by a layer of mixed berries.<br/>
3. Repeat with the remaining yogurt, granola, and berries.<br/>
4. Drizzle with honey or maple syrup if desired.<br/>
5. Serve immediately for a fresh, crunchy parfait.<br/>
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

export default YogurtParfait;
