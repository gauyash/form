import { Route, Routes } from "react-router-dom";
import "./SCSS/App.scss";
import MainLayout from "./Components/MainLayout";
import PersonalInfo from "./Components/Steps/PersonalInfo";
import Plan from "./Components/Steps/Plan";
import AddOns from "./Components/Steps/AddOns";
import Summary from "./Components/Steps/Summary";
import ThankYou from "./Components/ThankYou";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="plan" element={<Plan />} />
        <Route path="add-ons" element={<AddOns />} />
        <Route path="summary" element={<Summary />} />
        <Route path="thankyou" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;
