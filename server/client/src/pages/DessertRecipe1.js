import React from "react";

function DarkChoc() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dark Chocolate-Covered Strawberries</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 cup fresh strawberries<br/>
- 1/2 cup dark chocolate, chopped<br/><br/>

<strong>Instructions:</strong><br/>
1. Melt the dark chocolate in a microwave or double boiler until smooth.<br/>
2. Dip each strawberry into the melted chocolate, coating about two-thirds of the fruit.<br/>
3. Place the chocolate-covered strawberries on a parchment-lined baking sheet.<br/>
4. Allow the chocolate to set at room temperature or refrigerate for quicker results.<br/>
5. Serve once the chocolate is firm.<br/>
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

export default DarkChoc;
