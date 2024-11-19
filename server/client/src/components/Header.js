import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">Meal Planner</h1>
            
            <nav className="navbar" aria-label="Main Navigation">
            <Link to="/" className="nav-link">Home</Link>
            </nav>
        </header>
    );
}

export default Header;
