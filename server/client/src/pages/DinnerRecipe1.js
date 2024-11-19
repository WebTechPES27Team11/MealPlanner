import React from "react";

function BakedSal() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Baked Salmon with Steamed Vegetables</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 2 salmon fillets<br/>
- 1 tbsp olive oil<br/>
- Salt and pepper (to taste)<br/>
- 1 lemon, sliced<br/>
- 1 cup broccoli florets<br/>
- 1 cup carrots, sliced<br/><br/>

<strong>Instructions:</strong><br/>
1. Preheat the oven to 375°F (190°C).<br/>
2. Place the salmon fillets on a baking sheet, drizzle with olive oil, and season with salt, pepper, and lemon slices.<br/>
3. Bake the salmon for 12-15 minutes, until the fish is cooked through.<br/>
4. While the salmon bakes, steam the broccoli and carrots until tender, about 5-7 minutes.<br/>
5. Serve the salmon fillets with the steamed vegetables on the side.<br/>
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

export default BakedSal;
