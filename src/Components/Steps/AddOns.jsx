import React from "react";
import StepInfo from "../StepInfo";
import FormAddOns from "../Form/FormAddOns";
import { Link } from "react-router-dom";
const AddOns = () => {
  return (
    <div className="box h-full  rounded-lg">
      <StepInfo
        heading="Pick add-ons"
        title="Add-ons help enhance your gaming experience."
      />
      <FormAddOns />
      <footer className="mt-32">
        <Link to="/summary" className="p-4 px-8 font-medium rounded-lg">
          Next Step
        </Link>
      </footer>
    </div>
  );
};

export default AddOns;
