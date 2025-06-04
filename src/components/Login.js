import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password
      });

      if (response.status === 200) {
        setMessage("Login successful!");
        // You can redirect or store token if required
        // localStorage.setItem("token", response.data.token);
      }
    } catch (error) {
      console.error("Login failed", error);
      setMessage("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Login;
