import React from "react";
import { globalContext } from "../Context";

const FormPlan = () => {
  const { formData, handlePlanSelection, handleSubmit, handleSwitch,isSwitchMonthly } =
    globalContext();

  return (
    <form className="form-plan">
      <div className="plan">
        <div
          onClick={() => handlePlanSelection(isSwitchMonthly ?"arcade-monthly":"arcade-yearly")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.plan === "arcade" ? "selected" : ""
          }`}
        >
          <img src="/assets/images/icon-arcade.svg" alt="" />
          <div className="flex flex-col gap-1">
            <span className="card-title font-semibold text-4xl">Arcade</span>
            <span className="card-price font-semibold text-3xl py-1">{isSwitchMonthly ?"$9/mo":"$90/yr"}</span>
            {!isSwitchMonthly && <span className="free">2 months free</span> }
          </div>
        </div>

        <div
          onClick={() => handlePlanSelection(isSwitchMonthly ?"advance-monthly":"advance-yearly")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.plan === "advance" ? "selected" : ""
          }`}
        >
          <img src="/assets/images/icon-advanced.svg" alt="" />
          <div className="flex flex-col gap-1">
            <span className="card-title font-semibold text-4xl">Advance</span>
            <span className="card-price font-semibold text-3xl py-1">{isSwitchMonthly ?"$12/mo":"$120/yr"}</span>
            {!isSwitchMonthly && <span className="free">2 months free</span> }
          </div>
        </div>

        <div
          onClick={() => handlePlanSelection(isSwitchMonthly ?"pro-monthly":"pro-yearly")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.plan === "pro" ? "selected" : ""
          }`}
        >
          <img src="/assets/images/icon-pro.svg" alt="" />
          <div className="flex flex-col gap-1">
            <span className="card-title font-semibold text-4xl">Pro</span>
            <span className="card-price font-semibold text-3xl py-1">{isSwitchMonthly ?"$15/mo":"$150/yr"}</span>
            {!isSwitchMonthly && <span className="free">2 months free</span> }
          </div>
        </div>
      </div>

      <div className="switch-box flex gap-6 rounded-lg justify-center">
        <p>Monthly</p>
        <div className="switch-button">
          <input onClick={handleSwitch} type="checkbox" id="toggle" />
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
