import React from "react";
import StepInfo from "../StepInfo";
import FormPlan from "../Form/FormPlan";
import { Link } from "react-router-dom";
const Plan = () => {
  return (
    <div className="box rounded-lg">
      <StepInfo
        heading="Select your plan"
        title="You have the option of monthly or yearly billing."
      />

      <FormPlan />
      <footer className="mt-32">
        <Link to="/add-ons" className="p-4 px-8 font-medium rounded-lg">
          Next Step
        </Link>
      </footer>
    </div>
  );
};

export default Plan;
