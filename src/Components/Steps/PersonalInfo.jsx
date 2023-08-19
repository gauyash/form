import React from "react";
import StepInfo from "../StepInfo";
import FormPersonal from "../Form/FormPersonal";

const PersonalInfo = () => {
  return (
    <div className="box mx-auto rounded-lg">
      <StepInfo
        heading="Personal info"
        title="Please provide your name, email address, and phone number."
      />

    <FormPersonal />
    </div>
  );
};

export default PersonalInfo;
