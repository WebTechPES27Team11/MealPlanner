import React from "react";

function VegStir() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Vegetarian Stir-fry with Tofu</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 block firm tofu, drained and cubed<br/>
- 2 tbsp soy sauce<br/>
- 1 tbsp sesame oil<br/>
- 1 red bell pepper, sliced<br/>
- 1 zucchini, sliced<br/>
- 1 carrot, julienned<br/>
- 1/2 cup snow peas<br/>
- 2 garlic cloves, minced<br/>
- 1 tbsp fresh ginger, grated<br/>
- 2 tbsp sesame seeds (optional)<br/><br/>

<strong>Instructions:</strong><br/>
1. Heat the sesame oil in a large pan over medium heat.<br/>
2. Add the tofu cubes and cook until golden brown, about 5-7 minutes.<br/>
3. Remove the tofu from the pan and set aside.<br/>
4. In the same pan, add the garlic, ginger, and vegetables. Stir-fry for 3-5 minutes until tender-crisp.<br/>
5. Add the tofu back to the pan along with soy sauce and stir to coat.<br/>
6. Serve hot, garnished with sesame seeds if desired.<br/>
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

export default VegStir;
