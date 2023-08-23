import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Step = createContext();

const Context = ({ children }) => {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    usernumber: "",
    plan: "",
    addOns: {
      service: {
        isInterested:false,
        feature:"service"
      },
      storage: {
        isInterested:false,
        feature:"storage"
      },
      profile: {
        isInterested:false,
        feature:"profile"
      },
    },
  });

  const [isSwitchMonthly, setIsSwitchMonthly] = useState(true);

  const navigate = useNavigate();

  const { pathname } = useLocation();
  function handleSubmit(e) {
    e.preventDefault();
    if (pathname === "/form") navigate("/form/plan");
    else if (pathname === "/form/plan") {
      if (formData.plan != "") navigate("/form/add-ons");
    } else if (pathname === "/form/add-ons") navigate("/form/summary");
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


  function handleAddOns(addOn) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        addOns: {
          ...prevFormData.addOns,
          [addOn]: {
            ...prevFormData.addOns[addOn],
           isInterested: !prevFormData.addOns[addOn].isInterested,
          },
        },
      };
    });
  }

  function handleSwitch() {
    setIsSwitchMonthly((prevSwitchState) => !prevSwitchState);
  }

  const contextValue = {
    formData,
    handleChange,
    handleSubmit,
    handleAddOns,
    handlePlanSelection,
    handleSwitch,
    isSwitchMonthly,
  };

  return <Step.Provider value={contextValue}>{children}</Step.Provider>;
};

export const globalContext = () => {
  return useContext(Step);
};

export default Context;
