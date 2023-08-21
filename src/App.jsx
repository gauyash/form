import { Route, Routes, useNavigate } from "react-router-dom";
import "./SCSS/App.scss";
import MainLayout from "./Components/MainLayout";
import PersonalInfo from "./Components/Steps/PersonalInfo";
import Plan from "./Components/Steps/Plan";
import AddOns from "./Components/Steps/AddOns";
import Summary from "./Components/Steps/Summary";
import ThankYou from "./Components/ThankYou";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    usernumber: "",
    plan: "",
    addOns:[],
  });

  // const [selectPlan,setSelectPlan]=useState();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.plan != "") {
      navigate("/summary");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handlePlanSelection(value) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        plan: value,
      };
    });
  }

  console.log(formData);

  function handleAddOns(value) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        addOns:[...prevFormData.addOns,value],
      };
    });
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PersonalInfo
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
            />
          }
        />
        <Route
          path="plan"
          element={
            <Plan
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
              handlePlanSelection={handlePlanSelection}
            />
          }
        />
        <Route
          path="add-ons"
          element={
            <AddOns
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
              handleAddOns={handleAddOns}
            />
          }
        />
        <Route path="summary" element={<Summary />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;
