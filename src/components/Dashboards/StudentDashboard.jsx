// src/components/StudentDashboard.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function StudentDashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        navigate("/login"); // Redirect to login
    };

    return (
        <div className="dashboard-container">
            <h2>Student Dashboard</h2>
            <div className="card-container">
                <Link to="/apply-for-courses" className="card">
                    <h3>Apply for Courses</h3>
                </Link>
                <Link to="/view-admissions" className="card">
                    <h3>View Admissions</h3>
                </Link>
           
            </div>
            <button onClick={handleLogout} className="btn-primary">
                Logout
            </button>
        </div>
    );
}

export default StudentDashboard;
