import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
