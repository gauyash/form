import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex">
      <div className="flex gap-12 progress-indicator-box">
        <div className="sub-box">
          <NavLink
            className="font-bold progress-indicator rounded-full flex justify-center items-center"
            to="/"
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
            to="/"
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
            to="/"
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
            to="/"
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
