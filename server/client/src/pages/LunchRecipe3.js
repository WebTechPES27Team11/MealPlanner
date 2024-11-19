import React from "react";

function LentSoup() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Lentil Soup with Spinach and Lemons</h1>
      <p>
<strong>Ingredients:</strong><br/>
- 1 cup dried lentils, rinsed<br/>
- 1 onion, chopped<br/>
- 2 garlic cloves, minced<br/>
- 1 carrot, diced<br/>
- 1 celery stalk, diced<br/>
- 4 cups vegetable broth<br/>
- 2 cups spinach, chopped<br/>
- Juice of 1 lemon<br/>
- Salt and pepper (to taste)<br/><br/>

<strong>Instructions:</strong><br/>
1. In a large pot, sauté the onion, garlic, carrot, and celery over medium heat until softened.<br/>
2. Add the lentils and vegetable broth to the pot. Bring to a boil, then reduce to a simmer and cook for 25-30 minutes until the lentils are tender.<br/>
3. Stir in the spinach and cook for another 2-3 minutes until wilted.<br/>
4. Add lemon juice and season with salt and pepper.<br/>
5. Serve warm with a slice of bread if desired.<br/>
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

export default LentSoup;
