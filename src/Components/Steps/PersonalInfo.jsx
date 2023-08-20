import React from "react";
import StepInfo from "../StepInfo";
import FormPersonal from "../Form/FormPersonal";
import { Link } from "react-router-dom";
const PersonalInfo = () => {
  return (
    <div className="box rounded-lg">
      <div>
        <StepInfo
          heading="Personal info"
          title="Please provide your name, email address, and phone number."
        />

        <FormPersonal />
      </div>
      <footer className="mt-32">
        <Link to="/plan" className="p-4 px-8 font-medium rounded-lg">
          Next Step
        </Link>
      </footer>
    </div>
  );
};

export default PersonalInfo;
