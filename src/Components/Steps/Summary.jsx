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
      <footer className="mt-32">
        <Link to="/thankyou" className="p-4 px-8 font-medium rounded-lg">
          Next Step
        </Link>
      </footer>
    </div>
  );
};

export default Summary;
