import React from "react";
import { globalContext } from "../Context";
import { Link } from "react-router-dom";
const FormAddOns = () => {
  const { formData, handleSubmit, handleAddOns } = globalContext();

  return (
    <form onSubmit={handleSubmit} className="form-plan">
      <div className="plan add-ons">
        <div
          onClick={() => handleAddOns("service")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.addOns.service === true ? "selected" : ""
          }`}
        >
          <input
            checked={formData.addOns.service}
            type="checkbox"
            name=""
            id=""
          />
          <div className="flex items-center justify-between ml-7">
            <div className="flex flex-col">
              <span className="card-title font-semibold text-3xl">
                Online Service
              </span>
              <span className="card-price">Access to multiplayer games</span>
            </div>
            <span className="card-price">+ $1/mo</span>
          </div>
        </div>

        <div
          onClick={() => handleAddOns("storage")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.addOns.storage === true ? "selected" : ""
          }`}
        >
          <input
            checked={formData.addOns.storage}
            type="checkbox"
            name=""
            id=""
          />
          <div className="flex items-center justify-between ml-7">
            <div className="flex flex-col">
              <span className="card-title font-semibold text-3xl">
                Larger Storage
              </span>
              <span className="card-price">Extra 1TB of cloud save</span>
            </div>
            <span className="card-price">$2/mo</span>
          </div>
        </div>

        <div
          onClick={() => handleAddOns("profile")}
          className={`card-box flex rounded-2xl gap-5 ${
            formData.addOns.profile === true ? "selected" : ""
          }`}
        >
          <input
            checked={formData.addOns.profile}
            type="checkbox"
            name=""
            id=""
          />
          <div className="flex items-center justify-between ml-7">
            <div className="flex flex-col">
              <span className="card-title font-semibold text-3xl">
                Customizable Profile
              </span>
              <span className="card-price">Custom theme on your profile</span>
            </div>
            <span className="card-price">$2/mo</span>
          </div>
        </div>
      </div>
      <footer className="mt-32 flex items-center justify-between">
        <Link to="/plan" className="back-button font-medium">Go Back</Link>
        <button className="forward-button p-4 px-8 font-medium rounded-lg">Next Step</button>
      </footer>
    </form>
  );
};

export default FormAddOns;
