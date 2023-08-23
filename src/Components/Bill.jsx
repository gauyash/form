import React from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./Context";

const Bill = () => {
  const { formData, isSwitchMonthly } = globalContext();

  const planData = {
    9: {
      time: "Monthly",
      plan: "Arcade",
    },
    12: {
      time: "Monthly",
      plan: "Advance",
    },
    15: {
      time: "Monthly",
      plan: "Pro",
    },

    90: {
      time: "Yearly",
      plan: "Arcade",
    },

    120: {
      time: "Yearly",
      plan: "Advance",
    },

    150: {
      time: "Yearly",
      plan: "Pro",
    },
  };

  const addOnData = {
    service: {
      price: isSwitchMonthly ? 1 : 10,
      feature: "Online Service",
    },
    storage: {
      price: isSwitchMonthly ? 2 : 20,
      feature: "Large Storage",
    },
    profile: {
      price: isSwitchMonthly ? 2 : 20,
      feature: "Custom Profile",
    },
  };

  const interestedAddOns = Object.values(formData.addOns).filter(
    (addOn) => addOn.isInterested
  );

  const interestedAddOnsElements = interestedAddOns.map(
    (item) => addOnData[item.feature]
  );
  const period = isSwitchMonthly ? "/mo" : "/yr";

  const interestedAddOnsPrice = interestedAddOnsElements.reduce(
    (acc, curr) => acc + curr.price,
    0
  );

  const interestedAddOnsElementsArray = interestedAddOnsElements.map(
    (item, index) => {
      return (
        <li key={index} className="flex">
          <p className="text-3xl">{item.feature}</p>
          <p className="price text-3xl">{`+$${item.price}${period}`}</p>
        </li>
      );
    }
  );

  return (
    <div className="bill">
      <ul className="rounded-3xl mt-8">
        <li className="flex">
          <div className="flex flex-col">
            <h3 className="text-4xl font-bold">{`${
              planData[formData.plan].plan
            }(${planData[formData.plan].time})`}</h3>
            <Link to="/">change</Link>
          </div>
          <h3 className="price text-4xl font-bold">{`$${formData.plan}${period}`}</h3>
        </li>
        {interestedAddOnsElementsArray}
      </ul>

      <div className="total flex">
        <p className="text-3xl">{`Total(per ${
          isSwitchMonthly ? "month" : "yearly"
        })`}</p>
        <p className="total-price font-bold text-3xl">{`$${
          interestedAddOnsPrice + formData.plan
        }${period}`}</p>
      </div>
    </div>
  );
};

export default Bill;
