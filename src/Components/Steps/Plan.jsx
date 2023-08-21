import React from "react";
import StepInfo from "../StepInfo";
import FormPlan from "../Form/FormPlan";
const Plan = ({ handleSubmit, handleChange, formData,handlePlanSelection }) => {
  console.log(formData);
  return (
    <div className="box rounded-lg">
      <StepInfo
        heading="Select your plan"
        title="You have the option of monthly or yearly billing."
      />

      <FormPlan
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
        handlePlanSelection={handlePlanSelection}
      />
    </div>
  );
};

export default Plan;
