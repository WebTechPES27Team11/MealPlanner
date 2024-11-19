const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors()); // Allow CORS for all origins
app.use(express.json()); // Parse JSON requests

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Failed to connect to MongoDB:", error));

// API Endpoint
/*
app.post('/api/getRecipe', async (req, res) => {
    try {
        // Log the incoming request to debug
        console.log('Request received:', req.body);

        const { fitnessGoal, foodType, cuisine } = req.body;

        // Validate the input
        if (!fitnessGoal || !foodType || !cuisine) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Determine calorie type based on fitness goal
        const calorieType = fitnessGoal === 'weight_loss' ? 'low calorie' : 'high calorie';

        // Connect to MongoDB (if not already connected)
        const db = mongoose.connection;
        const collection = db.collection(cuisine); // Use cuisine as the collection name

        // Fetch the recipe
        const key = `${calorieType} ${foodType}`; // e.g., 'high calorie veg'

        const recipe = await collection.findOne({
            [key]: { $exists: true }
        });

        if (recipe) {
            console.log(recipe[key]); // Access the "high calorie veg" object directly
        } else {
            console.log("No recipe found with the given key.");
        }


        // Send the recipe back to the client
        res.status(200).json(recipe);
    } catch (error) {
        console.error('Error in /api/getRecipe:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
*/

app.post('/api/getRecipe', async (req, res) => {
    try {
        const { fitnessGoal, foodType, cuisine } = req.body;

        if (!fitnessGoal || !foodType || !cuisine) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const calorieType = fitnessGoal === 'weight_loss' ? 'low calorie' : 'high calorie';
        const key = `${calorieType} ${foodType}`;

        const db = mongoose.connection;
        const collection = db.collection(cuisine);

        const recipe = await collection.findOne({
            [key]: { $exists: true },
        });

        if (!recipe) {
            return res.status(404).json({ message: 'No recipes found' });
        }

        // Return only the specific recipe part
        res.status(200).json(recipe[key]);
    } catch (error) {
        console.error('Error in /api/getRecipe:', error);
        res.status(500).json({ message: 'Server error' });
    }
});


// Serve React in production
if (process.env.NODE_ENV === 'production') {
    const clientPath = path.join(__dirname, 'client', 'build');
    app.use(express.static(clientPath));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(clientPath, 'index.html'));
    });
}

// Default route
app.get('/', (req, res) => {
    res.send('API is running');
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
