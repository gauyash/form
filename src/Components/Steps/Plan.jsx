import React from "react";
import StepInfo from "../StepInfo";
import FormPlan from "./Form/FormPlan";

const Plan = () => {
  return (
    <div className="box mx-auto rounded-lg">
      <StepInfo
        heading="Select your plan"
        title="You have the option of monthly or yearly billing."
      />

     <FormPlan />
    </div>
  );
};

export default Plan;
