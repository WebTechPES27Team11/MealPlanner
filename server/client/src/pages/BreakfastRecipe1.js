import React from 'react';

function BreakfastRecipe1() {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Avocado Toast with Poached Egg</h1>
            <p style={{ textAlign: 'center' }}>
<strong>Ingredients:</strong><br/>
- 1 ripe avocado<br/>
- 2 slices of whole-grain bread<br/>
- 2 eggs<br/>
- Salt and pepper (to taste)<br/>
- Red pepper flakes (optional)<br/>
- Olive oil (optional)<br/><br/>

<strong>Instructions:</strong><br/>
1. Toast the slices of bread in a toaster or on a skillet until golden brown.<br/>
2. While the bread is toasting, bring a pot of water to a gentle simmer. Crack the eggs into separate bowls.<br/>
3. Stir the water gently to create a whirlpool, then carefully slide the eggs into the water one by one. Poach for 3-4 minutes for runny yolks or longer for firmer eggs.<br/>
4. Mash the avocado in a bowl, seasoning with salt, pepper, and a drizzle of olive oil if desired.<br/>
5. Spread the mashed avocado onto the toasted bread.<br/>
6. Place the poached egg on top, sprinkle with red pepper flakes and additional seasoning if desired.<br/>
7. Serve immediately.<br/>
</p>

            <a href="/breakfast" style={styles.link}>Back to Breakfast Recipes</a>
        </div>
    );
}

const styles = {
    container: { padding: '20px', fontFamily: 'Arial, sans-serif' },
    title: { fontSize: '2rem', color: '#D2691E' },
    details: { fontSize: '1.2rem', marginTop: '20px' },
    link: { fontSize: '1rem', color: '#007BFF', textDecoration: 'none', marginTop: '20px', display: 'inline-block' },
};

export default BreakfastRecipe1;
