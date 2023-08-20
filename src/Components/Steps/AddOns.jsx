import React from "react";
import StepInfo from "../StepInfo";
import FormAddOns from "../Form/FormAddOns";
import Footer from "../Footer";
const AddOns = () => {
  return (
    <div className="box h-full  rounded-lg">
      <StepInfo
        heading="Pick add-ons"
        title="Add-ons help enhance your gaming experience."
      />
      <FormAddOns />
      <Footer />
    </div>
  );
};

export default AddOns;
