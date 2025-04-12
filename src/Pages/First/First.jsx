import React from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active state
import "./First.css";

const First = () => {
  return (
    <div className="first-container">
      <h1 className="first-title">People</h1>
      <p className="first-subtext">Select a topic to explore:</p>
      <div className="first-list">
        <NavLink to="/first/firs1" className="first-box" activeclassname="active">
          Bio-inspired Muscles-TSA
        </NavLink>
        <NavLink to="/first/firs2" className="first-box" activeclassname="active">
          Artificial Muscle-Based Robotic Finger
        </NavLink>
        <NavLink to="/first/firs3" className="first-box" activeclassname="active">
          Artificial Muscle-Based Robotic Hand
        </NavLink>
        <NavLink to="/first/firs4" className="first-box" activeclassname="active">
          Hawk Gripper
        </NavLink>
        <NavLink to="/first/firs5" className="first-box" activeclassname="active">
          Cat-Leap Parkour Rolling Mechanism
        </NavLink>
      </div>
    </div>
  );
};

export default First;
