import React from "react";
import { Link } from "react-router-dom";

const Bill = () => {
  return (
    <div className="bill">
      <ul className="rounded-3xl mt-8">
        <li className="flex">
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold">Pro(Monthly)</h3>
            <Link to="/">change</Link>
          </div>
          <h3 className="price text-4xl font-bold">$15/mo</h3>
        </li>

        <li className="flex">
          <p className="text-3xl">Customizable Profile</p>
          <p className="price text-3xl">+$2/mo</p>
        </li>
      </ul>

      <div className="total flex">
        <p className="text-3xl">Total(per month)</p>
        <p className="total-price font-bold text-3xl">$17/mo</p>
      </div>
    </div>
  );
};

export default Bill;
