import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function InstitutionDashboard() {
    return (
        <div className="dashboard-container">
            <h2>Institution Dashboard</h2>
            <div className="card-container">
                <Link to="/manage-faculties" className="card">
                    <h3>Manage Faculties</h3>
                </Link>
                <Link to="/manage-courses" className="card">
                    <h3>Manage Courses</h3>
                </Link>
                <Link to="/view-applications" className="card">
                    <h3>View Applications</h3>
                </Link>
            
            </div>
        </div>
    );
}

export default InstitutionDashboard;
