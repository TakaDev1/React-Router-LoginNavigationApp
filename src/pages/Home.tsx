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
      <button
        onClick={handleLogin}
        className="w-1/4 bg-gray-500 text-white cursor-pointer hover:opacity-80 py-5 rounded-full transition"
      >
        Login
      </button>
    </div>
  );
};

export default Home;
