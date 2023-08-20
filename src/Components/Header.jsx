import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const activeStep = {
    backgroundColor: "var(--Light-blue)",
    color: "var(--Marine-blue)",
  };


  return (
    <header className="flex">
      <div className="flex gap-12 progress-indicator-box">
        <div className="sub-box">
          <NavLink
            className="font-bold progress-indicator rounded-full flex justify-center items-center"
            to="/"
             style={({ isActive }) => isActive ? activeStep : null}
          >
            1
          </NavLink>
          <span>
            <p className="step-num">Step 1</p>
            <p className="step-title">Your Info</p>
          </span>
        </div>
        <div className="sub-box">
          <NavLink
            className="font-bold progress-indicator rounded-full flex justify-center items-center"
            to="/plan"
             style={({ isActive }) => isActive ? activeStep : null}
          >
            2
          </NavLink>
          <span>
            <p className="step-num">Step 2</p>
            <p className="step-title">Select Plan</p>
          </span>
        </div>
        <div className="sub-box">
          <NavLink
            className="font-bold progress-indicator rounded-full flex justify-center items-center"
            to="/add-ons"
             style={({ isActive }) => isActive ? activeStep : null}
          >
            3
          </NavLink>
          <span>
            <p className="step-num">Step 3</p>
            <p className="step-title">Add-Ons</p>
          </span>
        </div>
        <div className="sub-box">
          <NavLink
            className="font-bold progress-indicator rounded-full flex justify-center items-center"
            to="/summary"
             style={({ isActive }) => isActive ? activeStep : null}
          >
            4
          </NavLink>
          <span>
            <p className="step-num">Step 4</p>
            <p className="step-title">Summary</p>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
