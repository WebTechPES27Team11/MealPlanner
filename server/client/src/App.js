import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MealPlannerPage from './pages/MealPlannerPage';
import MealPlanPage from './pages/MealPlanPage';
import BreakfastPage from './pages/BreakfastPage';
import LunchPage from './pages/LunchPage';
import DinnerPage from './pages/DinnerPage';
import SnackPage from './pages/SnackPage';
import DessertPage from './pages/DessertPage';

// Breakfast Recipes
import BreakfastRecipe1 from './pages/BreakfastRecipe1';
import BreakfastRecipe2 from './pages/BreakfastRecipe2';
import BreakfastRecipe3 from './pages/BreakfastRecipe3';

// Lunch Recipes
import LunchRecipe1 from './pages/LunchRecipe1';
import LunchRecipe2 from './pages/LunchRecipe2';
import LunchRecipe3 from './pages/LunchRecipe3';

// Dinner Recipes
import DinnerRecipe1 from './pages/DinnerRecipe1';
import DinnerRecipe2 from './pages/DinnerRecipe2';
import DinnerRecipe3 from './pages/DinnerRecipe3';

// Snacks Recipes
import SnackRecipe1 from './pages/SnackRecipe1';
import SnackRecipe2 from './pages/SnackRecipe2';
import SnackRecipe3 from './pages/SnackRecipe3';

// Desserts Recipes
import DessertRecipe1 from './pages/DessertRecipe1';
import DessertRecipe2 from './pages/DessertRecipe2';
import DessertRecipe3 from './pages/DessertRecipe3';
import './styles.css';

function App() {
    return (
        <Router>
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="main-content">
                <Routes>
                    {/* General Routes */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/meal-planner" element={<MealPlannerPage />} />
                    <Route path="/meal-plan" element={<MealPlanPage />} />
                    <Route path="/breakfast" element={<BreakfastPage />} />
                    <Route path="/lunch" element={<LunchPage />} />
                    <Route path="/dinner" element={<DinnerPage />} />
                    <Route path="/snack" element={<SnackPage />} />
                    <Route path="/dessert" element={<DessertPage />} />

                    {/* Breakfast Recipe Routes */}
                    <Route path="/breakfast/recipe1" element={<BreakfastRecipe1 />} />
                    <Route path="/breakfast/recipe2" element={<BreakfastRecipe2 />} />
                    <Route path="/breakfast/recipe3" element={<BreakfastRecipe3 />} />

                    {/* Lunch Recipe Routes */}
                    <Route path="/lunch/recipe1" element={<LunchRecipe1 />} />
                    <Route path="/lunch/recipe2" element={<LunchRecipe2 />} />
                    <Route path="/lunch/recipe3" element={<LunchRecipe3 />} />

                    {/* Dinner Recipe Routes */}
                    <Route path="/dinner/recipe1" element={<DinnerRecipe1 />} />
                    <Route path="/dinner/recipe2" element={<DinnerRecipe2 />} />
                    <Route path="/dinner/recipe3" element={<DinnerRecipe3 />} />

                    {/* Snacks Recipe Routes */}
                    <Route path="/snack/recipe1" element={<SnackRecipe1 />} />
                    <Route path="/snack/recipe2" element={<SnackRecipe2 />} />
                    <Route path="/snack/recipe3" element={<SnackRecipe3 />} />

                    {/* Desserts Recipe Routes */}
                    <Route path="/dessert/recipe1" element={<DessertRecipe1 />} />
                    <Route path="/dessert/recipe2" element={<DessertRecipe2 />} />
                    <Route path="/dessert/recipe3" element={<DessertRecipe3 />} />

                </Routes>
            </main>
        </Router>
    );
}

export default App;
