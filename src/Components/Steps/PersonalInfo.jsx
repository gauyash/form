import React from "react";
import StepInfo from "../StepInfo";
import FormPersonal from "../Form/FormPersonal";
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
    </div>
  );
};

export default PersonalInfo;
