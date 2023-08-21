import React from "react";
import StepInfo from "../StepInfo";
import Bill from "../Bill";
import { Link } from "react-router-dom";
const Summary = () => {
  return (
    <div className="box h-full  rounded-lg">
      <StepInfo
        heading="Finishing up"
        title="Double-check everything looks OK before confirming."
      />

      <Bill />
      <footer className="mt-32 flex items-center justify-between">
        <Link to="/add-ons" className="back-button font-medium">Go Back</Link>
        <Link to="/thankyou" className="forward-button p-4 px-8 font-medium rounded-lg">Confirm</Link>
      </footer>
    </div>
  );
};

export default Summary;
