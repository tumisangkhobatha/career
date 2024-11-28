// src/components/Auth/Login.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [role, setRole] = useState("student");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false); // Loading state
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Basic validation
        if (!email || !password) {
            Swal.fire({
                icon: "warning",
                title: "Missing Fields",
                text: "Please fill in both email and password!",
                background: "#44803F",
                confirmButtonColor: "#FF5A33",
            });
            return;
        }

        setLoading(true); // Set loading state to true

        try {
            let response;

            // Call the respective endpoint based on the selected role
            switch (role) {
                case "admin":
                    response = await axios.post(`http://localhost:5000/api/admin/login`, {
                        email,
                        password,
                    });
                    break;
                case "institution":
                    response = await axios.post(`http://localhost:5000/api/institution/login`, {
                        email,
                        password,
                    });
                    break;
                case "student":
                default:
                    response = await axios.post(`http://localhost:5000/api/student/login`, {
                        email,
                        password,
                    });
                    break;
            }

            // Check if the login was successful
            if (response.status === 200) {
                // Store user role and email in local storage
                localStorage.setItem("role", role);
                localStorage.setItem("email", email);
                
                // Navigate to the respective dashboard
                navigate(`/${role}/dashboard`);
            }
        } catch (error) {
            console.error("Login error:", error);
            let errorMessage = "Please check your email or password!"; // Default error message

            // Check if the response has specific error messages
            if (error.response) {
                if (error.response.status === 401) {
                    errorMessage = "Invalid credentials. Please try again.";
                } else if (error.response.status === 500) {
                    errorMessage = "Internal server error. Please try again later.";
                }
            }

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: errorMessage,
                background: "#44803F",
                confirmButtonColor: "#FF5A33",
            });
        } finally {
            setLoading(false); // Set loading state to false
        }
    };

    return (
        <div className="container">
            <div className="card" style={{ width: "100%", maxWidth: "500px" }}>
                <h2>Login</h2>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                    <option value="institution">Institution</option>
                </select>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    onClick={handleLogin} 
                    className="btn-primary" 
                    disabled={loading} // Disable button when loading
                >
                    {loading ? "Logging in..." : "Login"} {/* Show loading text */}
                </button>
            </div>
        </div>
    );
}

export default Login;
