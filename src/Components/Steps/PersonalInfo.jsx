import React from "react";
import StepInfo from "../StepInfo";
import FormPersonal from "../Form/FormPersonal";
const PersonalInfo = ({formData,handleChange,handleSubmit}) => {

  console.log(formData);


  return (
    <div className="box rounded-lg">
      <div>
        <StepInfo
          heading="Personal info"
          title="Please provide your name, email address, and phone number."
        />

        <FormPersonal formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>

    </div>
  );
};

export default PersonalInfo;
