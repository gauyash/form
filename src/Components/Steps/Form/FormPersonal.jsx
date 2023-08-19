import React from "react";

const FormPersonal = () => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col">
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="e.g. Stephen King" id="name" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="number">Phone Number</label>
        <input type="tel" placeholder="e.g. +1 234 567 890" id="number" />
      </div>
    </form>
  );
};

export default FormPersonal;
