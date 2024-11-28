// src/components/Auth/Register.js
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Register() {
    const [role, setRole] = useState("student");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEndpoint = () => {
        switch (role) {
            case "admin":
                return "http://localhost:5000/api/admin/register";
            case "institution":
                return "http://localhost:5000/api/institution/register";
            case "student":
            default:
                return "http://localhost:5000/api/students/register";
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post(getEndpoint(), {
                name,
                email,
                password,
            });

            // Check if registration was successful
            if (response.status === 201) {
                Swal.fire({
                    icon: "success",
                    title: "Registered Successfully",
                    text: `Welcome, ${name}! You have registered as a ${role}.`,
                    background: "#44803F",
                    confirmButtonColor: "#FF5A33",
                });

                // Clear form fields after successful registration
                setName("");
                setEmail("");
                setPassword("");
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.response?.data?.error || "An error occurred during registration.",
                background: "#FF5A33",
                confirmButtonColor: "#44803F",
            });
        }
    };

    return (
        <div className="container">
            <div className="card" style={{ width: "100%", maxWidth: "500px", padding: "20px", backgroundColor: "#146152", borderRadius: "10px" }}>
                <h2 style={{ color: "#FFEC5C" }}>Register</h2>
                <form onSubmit={handleRegister}> {/* Wrap form elements in a <form> tag */}
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select mb-3">
                        <option value="student">Student</option>
                        <option value="admin">Admin</option>
                        <option value="institution">Institution</option>
                    </select>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" required />
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control mb-3" required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mb-3" required />
                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#FF5A33", borderColor: "#FF5A33" }}>
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
