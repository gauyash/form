import React from "react";
import StepInfo from "../StepInfo";
import FormPersonal from "../Form/FormPersonal";
import Footer from '../Footer'
const PersonalInfo = () => {
  return (
    <div className="box h-full rounded-lg">
      <StepInfo
        heading="Personal info"
        title="Please provide your name, email address, and phone number."
      />

    <FormPersonal />
    <Footer />
    </div>
  );
};

export default PersonalInfo;
