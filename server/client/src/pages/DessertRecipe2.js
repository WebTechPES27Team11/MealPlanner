import React from "react";

function ChiaPudd() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Chia Pudding with Fresh Mango</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 3 tbsp chia seeds<br/>
- 1 cup milk or almond milk<br/>
- 1 tbsp honey or maple syrup (optional)<br/>
- 1/2 cup fresh mango, diced<br/><br/>

<strong>Instructions:</strong><br/>
1. In a bowl or jar, combine the chia seeds, milk, and honey or maple syrup if using.<br/>
2. Stir well to prevent clumps and refrigerate for at least 2 hours or overnight until thickened.<br/>
3. Top the chia pudding with fresh mango before serving.<br/>
4. Serve chilled as a refreshing dessert or snack.<br/>
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

export default ChiaPudd;
