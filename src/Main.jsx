import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1 className="main-title">Welcome to BirdLab</h1>
      <div className="sections-container">
        <div className="section-box" onClick={() => navigate("/first")}>
          People
        </div>
        <div className="section-box" onClick={() => navigate("/second")}>
          Research
        </div>
        <div className="section-box" onClick={() => navigate("/third")}>
          Publications
        </div>
        <div className="section-box" onClick={() => navigate("/fourth")}>
          Lectures
        </div>
        <div className="section-box" onClick={() => navigate("/fifth")}>
          Open Positions
        </div>
        <div className="section-box" onClick={() => navigate("/fifth")}>
          Contacts
        </div>
      </div>
    </div>
  );
};

export default Main;
