import React from "react";

const FormPlan = () => {
  return (
    <form className="form-plan">
      <div className="plan">
        <div className="plan-box flex rounded-2xl gap-5">
          <img src="/assets/images/icon-arcade.svg" alt="" />
          <div className="flex flex-col">
            <span className="plan-title font-semibold text-3xl">Arcade</span>
            <span className="plan-price">$9/mo</span>
          </div>
        </div>

        <div className="plan-box flex rounded-2xl gap-5">
          <img src="/assets/images/icon-advanced.svg" alt="" />
          <div className="flex flex-col">
            <span className="plan-title font-semibold text-3xl">Advance</span>
            <span className="plan-price">$12/mo</span>
          </div>
        </div>

        <div className="plan-box flex rounded-2xl gap-5">
          <img src="/assets/images/icon-pro.svg" alt="" />
          <div className="flex flex-col">
            <span className="plan-title font-semibold text-3xl">Pro</span>
            <span className="plan-price">$15/mo</span>
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
    </form>
  );
};

export default FormPlan;
