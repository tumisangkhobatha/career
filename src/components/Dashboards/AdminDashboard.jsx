import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
    return (
        <div className="dashboard-container">
            <h2>Admin Dashboard</h2>
            <div className="card-container">
                <Link to="/manage-institutions" className="card">
                    <h3>Manage Institutions</h3>
                </Link>
                <Link to="/manage-faculties" className="card">
                    <h3>Manage Faculties</h3>
                </Link>
                <Link to="/manage-courses" className="card">
                    <h3>Manage Courses</h3>
                </Link>
             
            </div>
        </div>
    );
}

export default AdminDashboard;
