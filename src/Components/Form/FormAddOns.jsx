import React from "react";

const FormAddOns = () => {
  return (
    <form className="form-plan">
      <div className="plan add-ons">
        <div className="card-box flex rounded-2xl gap-5">
          <input type="checkbox" name="" id="" />
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

        <div className="card-box flex rounded-2xl gap-5">
          <input type="checkbox" name="" id="" />
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

        <div className="card-box flex rounded-2xl gap-5">
          <input type="checkbox" name="" id="" />
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
    </form>
  );
};

export default FormAddOns;
