import React from "react";

const FormPlan = ({ formData, handlePlanSelection, handleSubmit }) => {
  return (
    <form className="form-plan">
      <div className="plan">
        <div
          onClick={() => handlePlanSelection("arcade")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.plan === "arcade" ? "selected" : ""
          }`}
        >
          <img src="/assets/images/icon-arcade.svg" alt="" />
          <div className="flex flex-col">
            <span className="card-title font-semibold text-3xl">Arcade</span>
            <span className="card-price">$9/mo</span>
          </div>
        </div>

        <div
          onClick={() => handlePlanSelection("advance")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.plan === "advance" ? "selected" : ""
          }`}
        >
          <img src="/assets/images/icon-advanced.svg" alt="" />
          <div className="flex flex-col">
            <span className="card-title font-semibold text-3xl">Advance</span>
            <span className="card-price">$12/mo</span>
          </div>
        </div>

        <div
          onClick={() => handlePlanSelection("pro")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.plan === "pro" ? "selected" : ""
          }`}
        >
          <img src="/assets/images/icon-pro.svg" alt="" />
          <div className="flex flex-col">
            <span className="card-title font-semibold text-3xl">Pro</span>
            <span className="card-price">$15/mo</span>
          </div>
        </div>
      </div>

      <div className="switch-box flex gap-6 rounded-lg justify-center">
        <p>Monthly</p>
        <div className="switch-button">
          <input type="checkbox" id="toggle" />
          <label htmlFor="toggle" className="switch"></label>
        </div>
        <p>Yearly</p>
      </div>
      <footer className="mt-32">
        <button
          onClick={handleSubmit}
          className="p-4 px-8 font-medium rounded-lg"
        >
          Next Step
        </button>
      </footer>
    </form>
  );
};

export default FormPlan;
