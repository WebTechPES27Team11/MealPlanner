import React from "react";

function TrailMix() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Homemade Trail Mix</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1/2 cup almonds<br/>
- 1/2 cup walnuts<br/>
- 1/2 cup cashews<br/>
- 1/4 cup dried cranberries<br/>
- 1/4 cup raisins<br/>
- 1/4 cup dark chocolate chips<br/><br/>

<strong>Instructions:</strong><br/>
1. In a large bowl, combine all the ingredients.<br/>
2. Mix well to distribute the nuts, dried fruit, and chocolate chips evenly.<br/>
3. Store the trail mix in an airtight container for snacking.<br/>
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

export default TrailMix;
