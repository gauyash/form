import React from "react";

const FormPersonal = ({handleSubmit, handleChange,formData}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col">
        <label className="font-medium" htmlFor="name">
          Name
        </label>
        <input
        onChange={handleChange}
          required
          className="p-5"
          name="username"
          type="text"
          value={formData.username}
          placeholder="e.g. Stephen King"
          id="name"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium" htmlFor="email">
          Email Address
        </label>
        <input
        onChange={handleChange}
          required
          className="p-5"
          type="email"
          value={formData.useremail}
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          name="useremail"
        />
      </div>

      <div className="flex flex-col">
        <label className="font-medium" htmlFor="number">
          Phone Number
        </label>
        <input
        onChange={handleChange}
          required
          className="p-5"
          type="number"
          value={formData.usernumber}
          placeholder="e.g. +1 234 567 890"
          id="number"
          name="usernumber"
        />
      </div>
      <footer className="mt-32">
        <button 
        className="p-4 px-8 font-medium rounded-lg">
          Next Step
        </button>
      </footer>
    </form>
  );
};

export default FormPersonal;
