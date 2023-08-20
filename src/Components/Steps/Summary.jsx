import React from "react";
import StepInfo from "../StepInfo";
import Bill from "../Bill";
import Footer from "../Footer";

const Summary = () => {
  return (
    <div className="box h-full  rounded-lg">
      <StepInfo
        heading="Finishing up"
        title="Double-check everything looks OK before confirming."
      />

      <Bill />
      <Footer />
    </div>
  );
};

export default Summary;
