import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const router = useNavigate();

    // Helper to generate a random 6-character Room ID
    const handleJoinGuest = () => {
        const randomID = Math.random().toString(36).substring(2, 8);
        router(`/${randomID}`);
    };

    return (
        <div className='landingPageContainer'>
            <nav>
                <div className='navHeader' onClick={() => router("/")}>
                    <h2>Pixel Call</h2>
                </div>
                <div className='navlist'>
                    {/* UPDATED CLICK HANDLER */}
                    <p onClick={handleJoinGuest}>Join as Guest</p>
                    
                    <p onClick={() => router("/auth")}>Register</p>
                    <div onClick={() => router("/auth")} role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>
                    <p>Cover a distance by Pixel Call</p>
                    <div role='button'>
                        <Link to={"/auth"}>Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt="Mobile View" />
                </div>
            </div>
        </div>
    );
}