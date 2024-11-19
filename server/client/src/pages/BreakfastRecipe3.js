import React from "react";

function OatmealBowl() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Creamy Oatmeal Bowl with Nuts and Fruit</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 cup rolled oats<br/>
- 2 cups milk or almond milk<br/>
- 1 tbsp honey or maple syrup<br/>
- ½ cup mixed nuts (almonds, walnuts, etc.)<br/>
- 1 banana, sliced<br/>
- ½ cup berries or any preferred fruit<br/><br/>

<strong>Instructions:</strong><br/>
1. In a medium saucepan, bring the milk to a simmer over medium heat.<br/>
2. Add the oats and cook for 5-7 minutes, stirring occasionally, until the oatmeal reaches your desired consistency.<br/>
3. Stir in the honey or maple syrup.<br/>
4. Pour the oatmeal into a bowl and top with sliced banana, berries, and nuts.<br/>
5. Serve immediately for a warm, comforting breakfast.<br/>
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

export default OatmealBowl;
