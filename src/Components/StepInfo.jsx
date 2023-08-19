import React from "react";

const StepInfo = ({heading,title}) => {
  return (
    <>
      <h1 className="text-5xl font-bold mb-3">{heading}</h1>
      <p>{title}</p>
    </>
  );
};

export default StepInfo;
