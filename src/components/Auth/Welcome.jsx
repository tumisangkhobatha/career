// src/components/Auth/Welcome.js
import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
    return (
        <div className="container">
            <div className="card" style={{ textAlign: "center" }}>
                <h1>Career Guidance Application</h1>
                <p>Select an option to continue:</p>
                <div>
                    <Link to="/login">
                        <button className="btn-primary">Login</button>
                    </Link>
                    <Link to="/register" style={{ marginLeft: "10px" }}>
                        <button className="btn-secondary">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
