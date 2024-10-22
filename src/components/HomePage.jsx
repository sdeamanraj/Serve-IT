import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <h1>File Sharing App</h1>
            <button onClick={() => navigate('/send')}>Send</button>
            <button onClick={() => navigate('/receive')}>Receive</button>
        </div>
    );
}

export default HomePage;
