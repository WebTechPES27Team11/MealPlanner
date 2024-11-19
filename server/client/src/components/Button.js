import React from 'react';
import '../styles.css';


function Button({ text, onClick }) {
    return (
        <button className="custom-button" onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;